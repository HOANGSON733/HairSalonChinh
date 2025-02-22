import axios from 'axios';

const API_URL = "http://localhost:5000"; // Thêm `const` và sửa dấu `=` đúng

export const GetBlogs = async () => {
    try {
        const response = await axios.get(`${API_URL}/blogs`);
        return response.data.data; // Trả về `data` thay vì toàn bộ `AxiosResponse`
    } catch (error) {
        console.error("Lỗi khi lấy blogs:", error);
        return []; // Trả về mảng rỗng để tránh lỗi `undefined`
    }
};


export const GetService = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data.data; // Trả về `data` thay vì toàn bộ `AxiosResponse`
    } catch (error) {
        console.error("Lỗi khi lấy service:", error);
        return []; // Trả về mảng rỗng để tránh lỗi `undefined`
    }
};


export const GetProducts =async ()=>{
    try {
        const response =await axios.get(`${API_URL}/products`);
        return response.data.data;
    } catch (error) {
        console.log("Lỗi trong API",error);
        
    }
}
