export default interface IPagedResponse<T> {
    content: T[],
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    totalElements: number,
    sortField: string,
    sortDirection: string
    reverseSortDirection: string
}