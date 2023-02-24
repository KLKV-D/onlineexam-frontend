import { Box, Button, Paper, Snackbar, Stack, TextField, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ChangeEvent, forwardRef, SyntheticEvent, useState } from "react";
import CategoryService from "../../services/CategoryService";
import ICategory from "../../types/ICategory";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function CreateCategory() {
    const initCategoryState = {
        name: "",
        description: ""
    };

    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState<ICategory>(initCategoryState);

    const textFieldInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCategory({ ...category, [name]: value });
    };

    const showMessage = () => {
        setOpen(true);
    };

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickway') {
            return;
        }

        setOpen(false);
    };

    const createCategory = () => {
        CategoryService.createCategory(category).then((response: any) => {
            setOpen(true);
        })
            .catch((e: Error) => {
                console.log(e);
            })
    };


    return (
        <Box sx={{
            p: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper sx={{
                p: 5,
                width: '75%'
            }}>
                <Stack
                    component='form'
                    spacing={2}
                >
                    <Typography variant='h4' alignSelf='center' color='primary'>
                        Add category
                    </Typography>
                    <TextField
                        id='outlined-basic'
                        label='Name'
                        variant='outlined'
                        value={category.name}
                        onChange={textFieldInputHandler}
                        name='name'
                    />
                    <TextField
                        multiline
                        rows={3}
                        maxRows={3}
                        id='outlined-basic'
                        label='Description'
                        variant='outlined'
                        value={category.description}
                        onChange={textFieldInputHandler}
                        name='description'
                    />
                    <Button sx={{width: '25%', alignSelf: 'flex-end'}} variant='contained' onClick={createCategory}>
                        Submit
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={5000}
                        onClose={handleClose}
                    >
                        <Alert onClose={handleClose} severity='success' sx={{width: '100%'}}>
                            Category successfully created!
                        </Alert>
                    </Snackbar>
                </Stack>
            </Paper>
        </Box>
    );
}