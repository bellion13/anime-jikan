
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  timeout: 10000,
});
export const getAllAnime  = async (page = 1) => {
  const res = await api.get(`/anime?page=${page}`);
  return res.data;
}
export const getTopAnime = async (page = 1) => {
  const res = await api.get(`/top/anime?page=${page}`);
  return res.data;
};

// Lấy danh sách anime là movie
export const getMovieAnime = async (page = 1) => {
  const res = await api.get(`/anime?type=movie&page=${page}`);
    return res.data;
};
export const getAnimeDetails = async (id) => {
  const res = await api.get(`/anime/${id}`);
  return res.data;
};

export const getAnimeTrailer = async (id) => {
  const res = await api.get(`/anime/${id}`);
  return res.data.data.trailer;
};

export const searchAnime = async (query) => {
  const res = await api.get(`/anime`, {
    params: {
      q: query,
      limit: 10,
    },
  });
  return res.data;
};

export const getAnimeCharacters = async (id) => {
  const res = await api.get(`/anime/${id}/characters`);
  return res.data.data;
};
