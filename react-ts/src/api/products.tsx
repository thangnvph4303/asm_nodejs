import { Iproduct } from "../interfaces/products";
import instance from "./instance";

const { accessToken } = JSON.parse(localStorage.getItem('user')!);

export const GetAllPro = () => {
    return instance.get("/products")
};

export const GetPro = (_id: number | string) => {
    return instance.get("/products/" + _id)
}

export const AddPro = (product: Iproduct) => {
    return instance.post("/products", product)
}

export const RemovePro = (_id: number | string) => {
    console.log(accessToken);
    
    return instance.delete("/products/" + _id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export const UpdatePro = (product: Iproduct) => {
    return instance.put("/products/" + product._id, product)
}