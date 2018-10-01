function  获取短信(手机号码){

  获取手机号码s=require('./1易码获取手机号码.js')
  返回代码对照表={
    1001:'参数token不能为空',
    1002:'参数action不能为空',
    1003:'参数action错误',
    1004:'token失效',
    1005:'用户名或密码错误',
    1006:'用户名不能为空',
    1007:'密码不能为空',
    1008:'账户余额不足',
    1009:'账户被禁用',
    1010:'参数错误',
    1011:'账户待审核',
    1012:'登录数达到上限',
    2001:'参数itemid不能为空',
    2002:'项目不存在',
    2003:'项目未启用',
    2004:'暂时没有可用的号码',
    2005:'获取号码数量已达到上限',
    2006:'参数mobile不能为空',
    2007:'号码已被释放',
    2008:'号码已离线',
    2009:'发送内容不能为空',
    2010:'号码正在使用中',
    3001:'尚未收到短信',
    3002:'等待发送',
    3003:'正在发送',
    3004:'发送失败',
    3005:'订单不存在',
    3006:'专属通道不存在',
    3007:'专属通道未启用',
    3008:'专属通道密码与项目不匹配',
    9001:'系统错误',
    9002:'系统异常',
    9003:'系统繁忙'
  }
  项目编号='16518'
  TOKEN='00888865ec587af114605f2ffb53b6e89c023b29'
  // 手机号码=获取手机号码s.获取手机号码()
  baseUrl='http://api.fxhyd.cn/UserInterface.aspx?action=getsms&token='+TOKEN+'&itemid='+项目编号+'&mobile='+手机号码+'&release=1'
  var r = http.get(baseUrl);
  log("code = " + r.statusCode);
  result=r.body.string()
  log("html = " + result);
  if(返回代码对照表.hasOwnProperty(result)){
    log(result,返回代码对照表[result])
  }else{
    log('返回值没有在代码对照表中找到,返回值=',result)
  }
  startTime=new Date().getTime()
  while(1){
    if(返回代码对照表.hasOwnProperty(result)){
      log(result,返回代码对照表[result])
      if(返回代码对照表[result]=='尚未收到短信'){
        log('尚未收到短信,延迟5秒')
        sleep(5000)
      }
    }else{
      log('返回码中不在返回代码对照表中')
      if(result.indexOf('success') != -1){
        log('success,短信获取成功')
        验证码=getCode(result)
        log('验证码是',验证码)
        return 验证码+''
      }else{
        log('短信没有获取成功,返回码也不在对照表中')
      }
    }

    r = http.get(baseUrl)
    log("code = " + r.statusCode);
    result=r.body.string()
    log("html = " + result);
    endTime=new Date().getTime()
    spendTime=endTime-startTime
    if(spendTime>60000){
      return "0000"
    }

  }
  // result=result.split('|');
  // mobile=result[1]
  // log(mobile)
  // 手机号码=mobile
  // log('手机号码=',手机号码)
}

function getCode(短信)
{//4位连数
var u=短信;
var a= u.match(/\d{4,8}/g);//.join("");//取所有５位连数字字符，放入数组。
   return parseInt(a[a.length-1],10);//取最后一个５位数字字符，并转为１０进次。
}

var circle = {};
circle.获取短信 = 获取短信
module.exports = circle;



