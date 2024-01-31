import { Product } from '@/types';
import axios from 'axios';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/products`;

const getProduct = async (id:string): Promise<Product> => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Failed to fetch product. Please check your internet connection and try again later.');
    }
};

export default getProduct;