import axios from 'axios';

const baseURL = 'https://press-jl.herokuapp.com/api/articles/';

const fetchArticles = queries => {
  console.log('stuff', queries);
  return axios.get(`${baseURL}`, {
    params: queries
  });
};

const fetchArticleById = id => {
  return axios.get(`${baseURL}${id}`);
};

export { fetchArticles, fetchArticleById };
