import React, {useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import dao from "../ajax/dao";

const CategoryDeleteConfirmationView = ({history}) => {
    const [message, setMessage] = useState("Do you want to delete this category?");
    const [category, setCategory] = useState({});
    const {categoryId} = useParams();

    useEffect(() => {
        async function getCategory () {
            const data = await dao.fetchOneCategoryById(categoryId);
            setCategory(data);
        }
        getCategory();
    },[categoryId]);

    const deleteCategory = () => {
        async function doDeleteCategory (categoryId) {
            const answer = await dao.deleteOneCategoryById(categoryId);
            console.log("answer: "+ answer);
            if(answer===true) {
                setMessage(`Category "${category.name}" deleted`);
                setCategory({});
            }
            // history.push("/category"); 
            // This should make auto-return to list possible
        }
        doDeleteCategory(categoryId);
    }
        

    return(
        <div>
            <h1>{message}</h1>
            { category && category.id !== undefined ?
                <button onClick={()=>{deleteCategory()}}>Yes, delete!</button>     
                : ""                
            }
            
            { category && category.id !== undefined ?
            <dl>
                <dt>id: {category.id}</dt>
                <dd>name: {category.name}</dd>
                <dd>budget: {category.budgetLimit}</dd>
            </dl>
            : "No category fetched yet OR category already deleted"
            }
            <nav>
                <Link to="/category">Back to list</Link>
            </nav>            
        </div>

    );
}

export default CategoryDeleteConfirmationView;