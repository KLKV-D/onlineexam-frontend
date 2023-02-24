import { Box, List, ListItem, IconButton, Pagination, Typography, Button, Paper, Link } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryService from "../../services/CategoryService";
import ICategory from "../../types/ICategory";
import IPagedResponse from "../../types/PagedResponse";
import { Link as RouterLink, useParams } from "react-router-dom";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Stack } from "@mui/system";

export default function CategoriesList() {
    const { pageNumber } = useParams();

    const initCategoriesPageState = {
        content: [],
        pageNumber: 1,
        pageSize: 6,
        totalPages: 1,
        totalElements: 1,
        sortField: "id",
        sortDirection: "asc",
        reverseSortDirection: "desc"
    };

    const [categoriesPage, setCategoriesPage] = useState<IPagedResponse<ICategory>>(initCategoriesPageState);
    const [categories, setCategories] = useState<Array<ICategory>>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getAllCategporiesPaginated = (pageNumber: any) => {
        CategoryService.getAllCategporiesPaginated(pageNumber).then((response: any) => {
            console.log(response.data);
            setCategoriesPage(response.data);
            setCategories(response.data.content);

        })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
        getAllCategporiesPaginated(value);
    };

    useEffect(() => {
        if (pageNumber) getAllCategporiesPaginated(pageNumber);
    }, [pageNumber]);

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            background: '#f7f7f7'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Stack spacing={2} sx={{
                    mt: 2,
                    width: '60%'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        paddingBottom: 2,
                        borderBottom: '2px solid #e5e5e5'
                    }}>
                        <Typography color={'primary'} sx={{
                            fontFamily: 'serif',
                            fontWeight: 'bold',
                            fontSize: 22
                        }}>
                            Categories
                        </Typography>
                        <Button size={'large'} component={RouterLink} to={'/add-category'} variant='contained'>
                            Create
                        </Button>
                    </Box>

                    <Paper variant='outlined' sx={{
                        width: '100%'
                    }}>
                        <List>
                            {categories && categories.map((category: ICategory, index: number) => (
                                <ListItem
                                    key={index}
                                    secondaryAction={
                                        <Box>
                                            <IconButton edge="end" color='warning'>
                                                <EditRoundedIcon />
                                            </IconButton>
                                            <IconButton edge="end" color='error' sx={{ ml: 2 }}>
                                                <DeleteRoundedIcon />
                                            </IconButton>
                                        </Box>
                                    }
                                >
                                    <Link component={RouterLink} to={`/category-details/${category.id}`} underline='none'>
                                        <Typography sx={{
                                            fontFamily: 'serif',
                                            fontSize: 18,
                                            color: '#182c25'
                                        }}>
                                            {category.name}
                                        </Typography>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>

                    <Box sx={{
                        mt: 3,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <Pagination
                            count={categoriesPage?.totalPages}
                            page={currentPage}
                            onChange={handleChange}
                            defaultPage={categoriesPage.totalPages == 1 ? 1 : Math.floor(categoriesPage?.totalPages / 2)}
                            siblingCount={0}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}