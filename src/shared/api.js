import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '29403206-b29e9098c0ff3e75ea37bca5c';

export async function fetchImages(query, page) {
  const PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 20,
    page,
    q: query,
  };

  const response = await axios.get(URL, {
    params: PARAMS,
  });
  return response.data;
}
