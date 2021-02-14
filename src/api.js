import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'ko-KR',
        page: 1,
        limit: 50
    }
})

export const movieApi = {
    getPopular: (page) => api.get('movie/popular', {
        params: {
            page,
        }
    }),

    getUpcoming: (page) => api.get('movie/upcoming', {
        params: {
            page
        }
    }),

    getNowPlaying: (page) => api.get('movie/now_playing', {
        params: {
            page
        }
    }),

    getDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: 'videos'
        }
    })
}

export const tvApi = {
    getPopular: () => api.get('tv/popular')
}