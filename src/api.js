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

const patchArticle = (article_id, inc_votes) => {
  return axios.patch(`${baseUrl}/articles/${article_id}`, inc_votes);
};

export {
  fetchArticles,
  fetchArticleById,
  fetchCommentsByArticleId,
  fetchTopics,
  patchArticle
};
