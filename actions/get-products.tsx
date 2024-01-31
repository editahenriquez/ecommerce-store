import { Product } from '@/types';
import axios from 'axios';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    try {
        const url = qs.stringifyUrl({
            url: URL,
            query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
            }
        })

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products. Please check your internet connection and try again later.');
    }
};

export default getProducts;

