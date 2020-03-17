import axios from "axios";

const articlesURL = "https://press-jl.herokuapp.com/api/articles/";

const fetchArticles = queries => {
  return axios.get(`${articlesURL}`, {
    params: queries
  });
};

const fetchArticleById = article_id => {
  return axios.get(`${articlesURL}${article_id}`);
};

const fetchCommentsByArticleId = article_id => {
  return axios.get(
    `https://press-jl.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export { fetchArticles, fetchArticleById, fetchCommentsByArticleId };
