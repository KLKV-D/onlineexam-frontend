import axios from "../axios-common";
import ICategory from "../types/ICategory";
import IPagedResponse from "../types/PagedResponse";

const getAllCategporiesPaginated = (pageNumber: any) => {
    return axios.get<IPagedResponse<ICategory>>(`/categories/page/${pageNumber}?sortField=id&sortDirection=asc`);
}

const getCategoryDetails = (id: any) => {
    return axios.get<ICategory>(`/categories/${id}`);
}

const createCategory = (newCategory: ICategory) => {
    return axios.post<ICategory>('/categories', newCategory);
}

const updateCategory = (newCategory: ICategory, id: any) => {
    return axios.put<ICategory>(`/categories/edit/${id}`, newCategory);
}

const deleteCategory = (id: any) => {
    return axios.delete<any>(`/categories/${id}`);
}

const CategoryService = {
    getAllCategporiesPaginated,
    getCategoryDetails,
    createCategory,
    updateCategory,
    deleteCategory
}

export default CategoryService;