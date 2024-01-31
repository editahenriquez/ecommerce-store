import {Size } from '@/types';
import axios from 'axios';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching sizes:', error);
        throw new Error('Failed to fetch sizes. Please check your internet connection and try again later.');
    }
};

export default getSizes;

