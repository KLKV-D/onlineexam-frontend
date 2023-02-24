import { Box, Button, Card, CardActions, CardContent, IconButton, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryService from "../../services/CategoryService";
import ICategory from "../../types/ICategory";
import { Link } from "react-router-dom";

export default function CategoryDetails() {
    const { id } = useParams();

    const initCategoryState = {
        name: "",
        description: ""
    };

    const [category, setCategory] = useState<ICategory>(initCategoryState);

    const getCategoryDetails = (id: any) => {
        CategoryService.getCategoryDetails(id).then((response: any) => {
            console.log(response.data);
            setCategory(response.data);
        })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id) getCategoryDetails(id);
    }, [id]);

    return (
        <Box sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                padding: 5,
                width: '75%',
                bgcolor: '#ececec',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card variant='outlined' sx={{
                    p: 1,
                    width: '100%'
                }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {category.name}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} color='text.secondary'>
                            {category.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Button sx={{
                                ml:1,
                                maxWidth: '120px',
                                maxHeight: '40px',
                                minWidth: '120px',
                                minHeight: '40px'
                            }}
                                variant='contained'
                                component={Link} to={'/categories/page/1?sortField=id&sortDirection=asc'}>
                                <Typography sx={{ fontSize: 12 }}>Categories</Typography>
                            </Button>
                            <Button sx={{
                                ml:1,
                                maxWidth: '120px',
                                maxHeight: '40px',
                                minWidth: '120px',
                                minHeight: '40px'
                            }}
                                variant='contained' 
                                component={Link} to={`/subcategories/${category.id}/page/1?sortField=id&sortDirection=asc`}>
                                <Typography sx={{ fontSize: 12 }}>Subcategories</Typography>
                            </Button>
                            <Button sx={{
                                ml:1,
                                maxWidth: '120px',
                                maxHeight: '40px',
                                minWidth: '120px',
                                minHeight: '40px'
                            }}
                                variant='contained' 
                                component={Link} to={`/categories/edit/${category.id}`}>
                                <Typography sx={{ fontSize: 12 }}>Edit</Typography>
                            </Button>
                            <Button sx={{
                                ml:1,
                                maxWidth: '120px',
                                maxHeight: '40px',
                                minWidth: '120px',
                                minHeight: '40px'
                            }}
                                variant='contained' 
                                component={Link} to={`/categories/delete/${category.id}`}>
                                <Typography sx={{ fontSize: 12 }}>Delete</Typography>
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
}