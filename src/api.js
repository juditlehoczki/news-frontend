import axios from 'axios';

const fetchArticles = queries => {
  return axios.get('https://press-jl.herokuapp.com/api/articles/', {
    params: queries
  });
};

export { fetchArticles };
