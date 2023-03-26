import React, {useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import dao from "../ajax/dao";

const CategoryDetailsView = () => {
    const [category, setCategory] = useState({});
    const {categoryId} = useParams();

    useEffect(() => {
        async function getCategory () {
            const data = await dao.fetchOneCategoryById(categoryId);
            setCategory(data);
        }
        getCategory();
    },[categoryId]);

    return(
        <div>
            <h1>Details of a Category</h1>

            { category && category.id !== undefined ?
                <dl>
                    <dt>id: {category.id}</dt>
                    <dd>name: {category.name}</dd>
                    <dd>budget: {category.budgetLimit}</dd>
                </dl>
                : 
                "Still downloading the category"
            }
            <nav>
                <Link to="/category">Back to list</Link>
            </nav>            
        </div>

    );
}

export default CategoryDetailsView;