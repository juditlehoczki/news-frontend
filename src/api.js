import axios from "axios";

const baseUrl = "https://press-jl.herokuapp.com/api";

const fetchArticles = queries => {
  return axios.get(`${baseUrl}/articles/`, {
    params: queries
  });
};

const fetchArticleById = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}`);
};

const fetchCommentsByArticleId = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}/comments`);
};

const fetchTopics = () => {
  return axios.get(`${baseUrl}/topics`);
};

export {
  fetchArticles,
  fetchArticleById,
  fetchCommentsByArticleId,
  fetchTopics
};
