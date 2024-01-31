import { Category } from '@/types';
import axios from 'axios';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/categories`;

const getCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw new Error('Failed to fetch categories. Please check your internet connection and try again later.');
    }
};

export default getCategories;

