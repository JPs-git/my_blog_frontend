/**
 * @description 日期格式化工具, 将时间戳转换为UTC+8:00时间
 * 
 */

export default function(timestamp){
  let date = new Date(timestamp)
  // 日期格式化
  return {
    y : date.getFullYear(), 
    m : date.getMonth() + 1 ,
    d : date.getDate(),
    h : date.getHours(),
    min : date.getMinutes(),
    s : date.getSeconds(),
    fullDate: date.getFullYear() + '-' + (Number(date.getMonth()) + 1) + '-' + date.getDate(),
    fullTime: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }
}
