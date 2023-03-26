const baseUrl = process.env.REACT_APP_BE_SERVER_BASE_URL;

const fetchCategories = async () => {
    const request = new Request(`${baseUrl}/category/`,{
        method: 'GET',  
    });

    const response = await fetch(request);
    const data = await response.json();
    return data;
};
const fetchOneCategoryById = async (categoryId) => {
    const request = new Request(`${baseUrl}/category/${categoryId}`,{
        method: 'GET',  
    });

    const response = await fetch(request);
    const data = await response.json();

    const category = data && data.length>0 ? data[0] : null;
    return category;
};
const deleteOneCategoryById = async (categoryId) => {
    const request = new Request(`${baseUrl}/category/${categoryId}`,{
        method: 'DELETE',  
    });

    const response = await fetch(request);
    const data = await response.json();

    const answer = data && data.returnValue===1 ? true : false;
    return answer;
};

const dao = {
    fetchCategories,
    fetchOneCategoryById,
    deleteOneCategoryById,
};
export default dao;