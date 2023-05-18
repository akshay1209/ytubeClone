import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
   params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'bbe86bd5f1mshd6d08d8dfa93233p11db5bjsn30430ae71989',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export  const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }