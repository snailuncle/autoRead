

还有没有未使用的号码s=require("./流程图还有没有未使用的号码.js")
必须启动apps=require("./流程图清除数据启动app.js")
登录apps=require("./流程图登录app.js")
看视频s=require("./流程图看视频.js")

//创建必要的文件
path='/sdcard/电话号码/'
files.ensureDir(path)

必要的文件=[
  '/sdcard/电话号码/异常的手机号码.txt',
  '/sdcard/电话号码/登录过的手机号码.txt',
  '/sdcard/电话号码/注册成功的手机号码.txt'
]

for(let i=0;i<必要的文件.length;i++){

  if(files.exists(必要的文件[i])){

  }else{
    files.write(必要的文件[i], "");
  }
}


var kk=0
while(1){
  log('第'+kk+"个号码")
  未使用的号码=还有没有未使用的号码s.还有没有未使用的号码()
  log('当前号码=',未使用的号码)
  // exit()
  if(未使用的号码){
    appName='种子视频'
    必须启动apps.必须启动app(appName)
    登录结果=登录apps.登录app(未使用的号码)
    log('主脚本登陆结果打印=',登录结果)
    if(登录结果=='登录正常'){
      log('进入正常登陆后的流程==记录号码+看视频')
      记录正常登录的号码(未使用的号码)
      log("看视频返回值",看视频s.看视频())
      log(未使用的号码+"",'观看视频完成')
    }else{
      switch (登录结果)
      {
      case "手机号被占用或离线":
        log("手机号被占用或离线")
        记录异常号码(未使用的号码,"手机号被占用或离线");

        break;
      case "接收验证码错误":
        log("接收验证码错误")
        记录异常号码(未使用的号码,"接收验证码错误");

        break;
      case "app服务器异常":
        log("app服务器异常")
        记录异常号码(未使用的号码,"app服务器异常");

        break;
      case "您的账号存在违规操作":
        log("您的账号存在违规操作")
        记录异常号码(未使用的号码,"您的账号存在违规操作");

        break;
      default:
        log("脚本停止,未知的登录结果=",登录结果);
        exit()
        break;
      }
    }

  }else{
    log('提示所有指定号码登录完毕,脚本结束')
    exit()
  }
}


function 记录异常号码(phone,error){
  var 异常号码路径='/sdcard/电话号码/异常的手机号码.txt'
  var text = phone+"      "+error+'\n';
  files.append(异常号码路径, text);
}



function 记录正常登录的号码(phone){
  var 登录过的手机号码路径='/sdcard/电话号码/登录过的手机号码.txt'
  var text = phone+'\n';
  files.append(登录过的手机号码路径, text);
}






