import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryService from "../../services/CategoryService";
import ICategory from "../../types/ICategory";

export default function EditCategory() {
    const { id } = useParams();

    const initCategoryState = {
        name: "",
        description: ""
    };

    const [currentCategory, setCurrentCategory] = useState<ICategory>(initCategoryState);

    const getCurrentCategory = (id: any) => {
        CategoryService.getCategoryDetails(id).then((response: any) => {
            console.log(response.data);
            setCurrentCategory(response.data);
        })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id) getCurrentCategory(id);
    }, [id]);

    return (
        <div>EditCategory</div>
    );
}