import axios from 'axios'

const Base_url = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: Base_url,
  params: {
    maxResults: '50'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': process.env.youtube_rapid_api_key,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
  
export const fetchDataFromAPI = async(url) => {
    const {data} = await axios.get(`${Base_url}/${url}`,options)
    return data;
}