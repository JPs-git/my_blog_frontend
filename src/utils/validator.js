export default {
  isNotEmpty(input){
    return new Promise((resolve, reject) => {
        if(String(input) === ''){
          reject('输入不能为空！')
        }else{
          resolve()
        }
    })
  },
  checkLength(input, min_length, max_length){
    return new Promise((resolve, reject) =>{
      // 转成字符串
      input = String(input)
      if(input.length >= min_length && input.length <= max_length){
        resolve()
      }else{
        reject(`长度在${min_length}到${max_length}之间！`)
      }
    })
  },
  checkEmail(input){
    // 邮箱的正则表达式
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return new Promise((resolve, reject) =>{
      if(reg.test(String(input))){
        resolve()
      }else{
        reject('请输入正确的邮箱！')
      }
    })
  },
  checkUrl(input){
    // url的正则表达式
    const reg = new RegExp('^[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$')
    return new Promise((resolve, reject) => {
        if(reg.test(String(input))){
          resolve()
        }else{
          reject('请输入正确的url！')
        }
    })
  },
  // 检验字符合法性 只能包括汉字，英文大小写字母，数字，下划线
  checkChar(input){
    const reg = new RegExp('^[A-Za-z0-9\u4e00-\u9fa5_]+$')
    return new Promise((resolve, reject) => {
        if(reg.test(String(input))){
          resolve()
        }else{
          reject('只能包括只能包括汉字，英文字母，数字，下划线！')
        }
    })
  }
}