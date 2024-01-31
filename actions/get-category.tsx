import { Category } from '@/types';
import axios from 'axios';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/categories`;

const getCategory = async (id:string): Promise<Category> => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw new Error('Failed to fetch category. Please check your internet connection and try again later.');
    }
};

export default getCategory;