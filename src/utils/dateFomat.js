/**
 * @description 日期格式化工具, 将时间戳转换为UTC+8:00时间
 *
 */

export default function (timestamp) {
  let date = new Date(timestamp)
  // 日期格式化
  return {
    y: String(date.getFullYear()),
    m: String(date.getMonth() + 1),
    d: String(date.getDate()),
    h: String(date.getHours()),
    min: ('0' + date.getMinutes()).slice(-2),
    s: ('0' + date.getSeconds()).slice(-2),
    fullDate:
      date.getFullYear() +
      '-' +
      (Number(date.getMonth()) + 1) +
      '-' +
      date.getDate(),
    fullTime:
      date.getHours() +
      ':' +
      ('0' + date.getMinutes()).slice(-2) +
      ':' +
      ('0' + date.getSeconds()).slice(-2),
  }
}
