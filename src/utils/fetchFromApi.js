import axios from "axios";
const BASE_URL = 'https://restful-booker.herokuapp.com'
const options = {
    url: BASE_URL,
    headers : {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+token
    }
}

export const fetchFromApi = async (url) => {
    
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
}