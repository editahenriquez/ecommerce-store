import { Color } from '@/types';
import axios from 'axios';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/colors`;

const getColors = async (): Promise<Color[]> => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching colors:', error);
        throw new Error('Failed to fetch colors. Please check your internet connection and try again later.');
    }
};

export default getColors;
