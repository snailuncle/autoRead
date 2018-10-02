手机号情况s=require("./流程图手机号情况.js")

function 手机号码是否在线(phoneNumber){
  手机号是否在线=手机号情况s.手机号情况(phoneNumber)
  if(手机号是否在线){
    return true
  }
  return false
}


function 还有没有未使用的号码(){
  读取指定号码文件结果=读取指定号码文件()

  for(let i=0;i<读取指定号码文件结果.length;i++){
    是否异常号码结果=是否异常号码(读取指定号码文件结果[i])
    if(是否异常号码结果){
      //属于异常号码
      log('号码异常',读取指定号码文件结果[i])
    }else{
      //不属于异常号码
      log("读取指定号码文件结果["+i+"]=",读取指定号码文件结果[i])
      是否登录过=是否登录过的号码(读取指定号码文件结果[i])
      if(是否登录过){
        //登录过
        log('号码登录过',读取指定号码文件结果[i])
      }else{
        if(手机号码是否在线(读取指定号码文件结果[i])){

          return 读取指定号码文件结果[i]
        }else{
          log('手机离线',读取指定号码文件结果[i])

        }


      }
    }
  }
  return false
}



function 读取指定号码文件(){
  var 指定号码路径='/sdcard/电话号码/注册成功的手机号码.txt'
  var phonesText=files.read(指定号码路径)
  var phones=phonesText.match(/1\d{10}/g)
  return phones
}
function 是否异常号码(phoneNumber){
  var 异常号码路径='/sdcard/电话号码/异常的手机号码.txt'
  var phonesText=files.read(异常号码路径)
  if(phonesText == ""){
    return false
  }else if(phonesText && phonesText.indexOf(phoneNumber+"") == -1){
    return false
  }else{
    return true
  }
}
function 是否登录过的号码(phoneNumber){
  var 登录过的手机号码路径='/sdcard/电话号码/登录过的手机号码.txt'
  var phonesText=files.read(登录过的手机号码路径)
  if(phonesText == ""){
    return false
  }else if(phonesText && phonesText.indexOf(phoneNumber+"") == -1){
    return false
  }else{
    return true
  }
}

var circle = {};
circle.还有没有未使用的号码 = 还有没有未使用的号码
module.exports = circle;
