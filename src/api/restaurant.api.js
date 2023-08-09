import axios from 'axios'

import { url_static_api } from '../environments/environments'

const fetch_restaurant_random = async() => {
    try {
        const response = await axios.get(url_static_api);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data url: ${url_static_api}`, error);
    }
}

export {
    fetch_restaurant_random
}