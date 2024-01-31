import { Billboard } from '@/types';
import axios from 'axios';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/billboards`;

const getBillboard = async (id:string): Promise<Billboard> => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching billboard:', error);
        throw new Error('Failed to fetch billboard. Please check your internet connection and try again later.');
    }
};

export default getBillboard;
