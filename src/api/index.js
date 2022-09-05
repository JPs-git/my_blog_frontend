// 当前模块进行API统一管理
import requests from './requests'

// 测试接口
export const reqTest = () => requests({ url: 'articles/test', method: 'get' })
// 获取文章列表
export const reqArticleList = () => requests({ url: 'articles', method: 'get' })
// 获取指定id文章
export const reqArticleById = (id) =>
  requests({ url: `articles/${id}`, method: 'get' })
// 新增评论
export const reqNewComment = (data) =>
  requests({ url: 'comments', method: 'post', data })
// 获取留言板评论
export const reqMsgboard = (skip) =>
  requests({ url: `comments/msgboard?skip=${skip}`, method: 'get' })
// 获取指定文章评论
export const reqArticleComments = (id, skip) =>
  requests({ url: `comments/article_id/${id}?skip=${skip}`, method: 'get' })
