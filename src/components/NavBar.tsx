import { AppBar, Box, Link, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NavBar() {
    return (
        <Box sx={{
            width: '100%'
        }}>
            <AppBar color='primary' position="static" sx={{
                // background: '#0a7b79',
                boxShadow: 'none'
            }}>
                <Toolbar>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Link component={RouterLink} to={"/"} variant="h5" underline="none"
                            sx={{
                                color: '#e9e9e9',
                                py: 2,
                                textTransform: "uppercase"
                            }}>
                            Online exam
                        </Link>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center"
                        }}>
                            <Link component={RouterLink} to={"/categories-list/1?sortField=id&sortDirection=asc"} 
                                variant="h6"
                                underline="none"
                                sx={{
                                    color: '#e9e9e9',
                                    p: 2,
                                    textTransform: "uppercase",
                                    '&:hover': {
                                        color: '#f7f7f7',
                                        backgroundColor: '#4c516d'
                                    },
                                }}>
                                Categories
                            </Link>
                            <Link component={RouterLink} to={"/tests"} variant="h6" underline="none" color="#0a7b79"
                                sx={{
                                    color: '#e9e9e9',
                                    p: 2,
                                    textTransform: "uppercase",
                                    '&:hover': {
                                        color: '#f7f7f7',
                                        backgroundColor: '#4c516d'
                                    },
                                }}>
                                Tests
                            </Link>
                            <Link component={RouterLink} to={"/login"} variant="h6" underline="none" color="#0a7b79"
                                sx={{
                                    color: '#e9e9e9',
                                    p: 2,
                                    textTransform: "uppercase",
                                    '&:hover': {
                                        color: '#f7f7f7',
                                        backgroundColor: '#4c516d'
                                    },
                                }}>
                                Login
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}