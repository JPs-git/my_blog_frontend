// 当前模块进行API统一管理
import requests from './requests'

// 测试接口
export const reqTest = () => requests({ url: 'articles/test', method: 'get' })
// 获取文章列表
export const reqArticleList = () => requests({url:'articles', method:'get'} )
// 获取指定id文章
export const reqArticleById = (id) => requests({url:`articles/${id}`, method:'get'})
