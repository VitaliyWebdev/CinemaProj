import axios from "axios";
export const AXIOS = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmZkZWZmOGZlYjNlM2ZjZjkwNzVjYjdhZDFmNzk0MiIsInN1YiI6IjVmZmUwMjJlOGQ1MmM5MDAzZWFhODNiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nbHKxNdHOyGWmcfMKKicVUAC5b9GLutF1BDJiHUMM2Y'
    }
})
