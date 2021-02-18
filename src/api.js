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
    }),

    search: (term, page) => api.get('search/movie', {
        params: {
            query: term,
            page
        }
    })
}

export const tvApi = {
    getPopular: (page) => api.get('tv/popular', {
        params: {
            page
        }
    }),
    getAiringToday: (page) => api.get('tv/airing_today', {
        params: {
            page
        }
    }),
    getTopRated: (page) => api.get('tv/top_rated', {
        params: {
            page
        }
    }),
    getDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: 'videos'
        }
    }),
    getSeason: (id, seasonId) => api.get(`tv/${id}/season/${seasonId}`, {
        params: {
            append_to_response: 'videos'
        }
    }),

    search: (term, page) => api.get('search/tv', {
        params: {
            query: term,
            page
        }
    })
}