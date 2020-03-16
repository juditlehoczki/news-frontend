import axios from 'axios';

const fetchArticles = () => {
  return axios.get('https://press-jl.herokuapp.com/api/articles/');
};

export { fetchArticles };
