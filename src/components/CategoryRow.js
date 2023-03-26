import React from "react";

const CategoryRow = ({category}) => {
    return (<span>{`${category.id} : ${category.name}`}</span>);
}

export default CategoryRow;