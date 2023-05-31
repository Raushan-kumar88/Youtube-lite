// import axios from "axios";
// const BASE_URL = "https://youtube138.p.rapidapi.com";
// const options = {
//   params: {
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// export const fetchDataFromApi=async (url) => {
//     const {data} = await axios.get(`${BASE_URL}/${url}`,options);
//     return data;
// }

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "d0d9e717f2msh75a346ed286d4cdp157452jsn3d92999257a2",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};