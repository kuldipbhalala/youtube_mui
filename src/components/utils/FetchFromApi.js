import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'
console.log(process.env.REACT_APP_RAPID_API_KEY, "process.env.REACT_APP_RAPID_API_KEYprocess.env.REACT_APP_RAPID_API_KEYprocess.env.REACT_APP_RAPID_API_KEY");

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }

};


export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data

}