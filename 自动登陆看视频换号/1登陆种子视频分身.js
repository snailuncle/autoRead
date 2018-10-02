

function press(x,y,t){
  //改为滑动
  var x1=随机数字(10)+x
  var y1=随机数字(10)+y
  var x2=随机数字(10)+x
  var y2=随机数字(10)+y
  var x3=随机数字(10)+x
  var y3=随机数字(10)+y


  gesture(t, [x1,y1], [x2, y2], [x3, y3])



}

function 登录(指定手机号){
  var lock = threads.lock();
  获取手机号码s=require('./1易码获取手机号码.js')
  获取验证码s=require('./1易码获取短信.js')


    // 手机号码=获取手机号码s.获取手机号码()



  // //先打开app
  appName='种子视频'
  杀掉app(appName)
  sleep(3000)
  log('开始启动'+appName)
  启动(appName);
  sleep(8000)
  log('启动'+appName+"10秒了")

  // // id = splash_skip_tv
  // // 跳过=id('guid_jump').text('跳过').findOne(8000)
  // 跳过=id('splash_skip_tv').textContains('跳过').findOne(8000)
  // if(跳过){
  //   log('找到了跳过')
  //   x=跳过.bounds().centerX()
  //   y=跳过.bounds().centerY()
  //   press(x+随机数字(20),y+随机数字(20),1)
  //   sleep(222)
  // }else{
  //   log('没有找到名字叫跳过的控件')
  // }

  threads.start(function(){
    //在新线程执行的代码
    log('多线程宝箱奖励开始')
    log('宝箱奖励检测开始')
    宝箱奖励=text('宝箱奖励').findOne(8000)
    if(宝箱奖励){
      var x=宝箱奖励.bounds().centerX()
      var y=宝箱奖励.bounds().centerY()
      lock.lock();
      press(x+随机数字(20),y+随机数字(20),随机延迟(200))
      lock.unlock();
    }
    log('宝箱奖励检测结束')

    log('多线程宝箱奖励结束')
});

threads.start(function(){
  //在新线程执行的代码
  while(1){

    log('多线程位置电话权限开始')
    log('位置电话权限检测开始')
    位置电话权限1=text('总是允许').findOne(8000)
    位置电话权限2=text('拒绝').findOne(8000)
    if(位置电话权限1 && 位置电话权限2 ){
      // var x=位置电话权限.bounds().centerX()
      // var y=位置电话权限.bounds().centerY()
      lock.lock();
      拒绝=text('拒绝').findOne(100)
      if(拒绝){

        var x=拒绝.bounds().centerX()
        var y=拒绝.bounds().centerY()
        lock.lock();
        press(x+随机数字(20),y+随机数字(20),随机延迟(200))
        lock.unlock();
      }













      随机延迟(1000)
      lock.unlock();
    }
    log('位置电话权限检测结束')

    log('多线程位置电话权限结束')
  }
});




threads.start(function(){
  //在新线程执行的代码
  log('多线程右上角跳过开始')
  log('右上角跳过检测开始')
  右上角跳过=text('跳过').findOne(8000)
  if(右上角跳过){
    var x=右上角跳过.bounds().centerX()
    var y=右上角跳过.bounds().centerY()
    lock.lock();
    press(x+随机数字(20),y+随机数字(20),随机延迟(200))
    随机延迟(1000)
    lock.unlock();
  }
  log('右上角跳过检测结束')

  log('多线程右上角跳过结束')
});





  //视频 赚钱 我的
  // id = main_tab_bar_tv
  视频=id('main_tab_bar_tv').text('视频').findOne(8000)
  赚钱=id('main_tab_bar_tv').text('赚钱').findOne(8000)
  我的=id('main_tab_bar_tv').text('我的').findOne(8000)
  if(视频 && 赚钱 && 我的){
    随机延迟(1111)
  }else{
    log('再次启动'+appName)
    launchApp(appName)
    随机延迟(3333)
  }



  左上角领取=id('treasureTakeText').text('领取').findOne(8000)
  if(左上角领取){
    log('找到了左上角领取')
    // x=左上角领取.bounds().centerX()
    // y=左上角领取.bounds().centerY()
    // press(x+随机数字(20),y+随机数字(20),1)
    // sleep(222)
    视频=id('main_tab_bar_tv').text('视频').findOne(8000)
    赚钱=id('main_tab_bar_tv').text('赚钱').findOne(8000)
    我的=id('main_tab_bar_tv').text('我的').findOne(8000)
    if(视频 && 赚钱 && 我的){
      // //观看一个视频再登陆  待添加
      // press(214,330,100)
      // 随机延迟(20000)
      // back()
      随机延迟(6000)
      //我的被选中了

      if(!(我的.isSelected())){

        我的=text('我的').findOne()
        while(1){
          我的=id('main_tab_bar_tv').text('我的').findOne(8000)

          x=我的.bounds().centerX()
          y=我的.bounds().centerY()
          press(x+随机数字(30),y+随机数字(20),随机延迟(200))
          随机延迟(2000)
          if(我的.isSelected() && text("点此登录").findOne(1000)){
            break;
          }



        }
        点此登录=text("点此登录").findOne(1000)
        if(点此登录){

          x=点此登录.bounds().centerX()
          y=点此登录.bounds().centerY()
          press(x+随机数字(50),y+随机数字(20),随机延迟(200))
        }
        随机延迟(2222)
        切换至手机登陆=text('切换至手机登录').findOne(1000)
        while(!切换至手机登陆){
          点此登录=text("点此登录").findOne(1000)
          if(点此登录){

            x=点此登录.bounds().centerX()
            y=点此登录.bounds().centerY()
            press(x+随机数字(50),y+随机数字(20),随机延迟(200))
          }
          随机延迟(2222)
          切换至手机登陆=text('切换至手机登录').findOne(1000)

        }
      }
    }







  }else{
    log('没有找到,左上角领取')
  }

  // text = 切换至手机登录
  切换至手机登陆=text('切换至手机登录').findOne(2000)
  if(切换至手机登陆){
    log('找到了切换至手机登录')
    x=切换至手机登陆.bounds().centerX()
    y=切换至手机登陆.bounds().centerY()
    press(x+随机数字(20),y+随机数字(20),随机延迟(200))
    随机延迟(222)

  }else{
    log('没有找到,切换至手机登陆')
  }


  // text = 请输入手机号  id = et_phone
  请输入手机号=id('et_phone').text('请输入手机号').findOne(3000)
  if(请输入手机号){
    x=请输入手机号.bounds().centerX()
    y=请输入手机号.bounds().centerY()
    press(x+随机数字(20),y+随机数字(20),随机延迟(200))
    随机延迟(1000)
    手机号码=指定手机号+""
    if(手机号码 && 手机号码.length==11){
      // 请输入手机号.setText(手机号码)
      //手机号码一个一个输入进去
      一个一个输入数字(手机号码,"请输入手机号",0)
      随机延迟(300)

    }else{
      log('获取手机号码失败,脚本停止')
      exit()
    }
  }else{
    log('没有找到,请输入手机号')
    while(1){
      切换至手机登陆=text('切换至手机登录').findOne(1000)
      if(切换至手机登陆){
        log('找到了切换至手机登录')
        x=切换至手机登陆.bounds().centerX()
        y=切换至手机登陆.bounds().centerY()
        press(x+随机数字(20),y+随机数字(20),随机延迟(200))
        随机延迟(222)

      }else{
        log('没有找到,切换至手机登陆')
      }
      请输入手机号=id('et_phone').text('请输入手机号').findOne(3000)
      if(请输入手机号){
        x=请输入手机号.bounds().centerX()
        y=请输入手机号.bounds().centerY()
        press(x+随机数字(20),y+随机数字(20),随机延迟(200))
        随机延迟(1000)
        手机号码=指定手机号
        if(手机号码 && 手机号码.length==11){
          // 请输入手机号.setText(手机号码)
          //手机号码一个一个输入进去
          一个一个输入数字(手机号码,"请输入手机号",0)
          随机延迟(300)
          break;
        }else{
          log('获取手机号码失败,脚本停止')
          exit()
        }
      }
    }
  }








  // 点击验证码
  // text = 验证码
  // id = btn_send_auth_code
  点击验证码=id('btn_send_auth_code').text('验证码').findOne(1000)
  if(点击验证码){
    log('找到,点击验证码')
    x=点击验证码.bounds().centerX()
    y=点击验证码.bounds().centerY()
    press(x+随机数字(20),y+随机数字(20),随机延迟(200))
    随机延迟(222)

  }else{
    log('没有找到,点击验证码')
  }


  // 获取验证码
  验证码=获取验证码s.获取短信(手机号码)
  if(验证码=='0000'){
    return false
  }
  //输入验证码
  if(验证码 && 验证码.length>3){
    log('接收验证码正常')
    log('手机号码=',手机号码,'验证码=',验证码)
  }else{
    log('接收验证码错误,停止脚本')
    log('接收到的验证码是',验证码)
    exit()
  }


  // id = et_auth_code
  // text = 请输入验证码



  请输入验证码=id('et_auth_code').text('请输入验证码').findOne(1000)
  if(请输入验证码){
    // 请输入验证码.setText(验证码)
    x=请输入验证码.bounds().centerX()
    y=请输入验证码.bounds().centerY()
    press(x+随机数字(20),y+随机数字(20),随机延迟(200))
    随机延迟(1000)


    一个一个输入数字(验证码,"请输入验证码",1)

    随机延迟(1000)
  }else{
    log('没有找到,请输入验证码')
  }


  // 点击登录
  // id = btn_login
  // text = 登录
  登录按钮=id('btn_login').text('登录').findOne(1000)
  if(登录按钮){
    x=登录按钮.bounds().centerX()
    y=登录按钮.bounds().centerY()
    press(x+随机数字(50),y+随机数字(20),随机延迟(200))
    随机延迟(1000)
    if(text('您的账号存在违规操作，请正确使用种子视频，如有疑问，请携邀请码到官方公众号进行反馈。').findOne(3000)){
      拉黑手机号(手机号码)
      //杀掉app
      appName='种子视频'
      杀掉app(appName)
      随机延迟(3000)
    }else if(text('登陆').findOne(5000)  && text('登录即代表你同意《种子视频服务协议》').findOne(5000)){
      return '登陆无效'
    }



    else{
      return 手机号码+""
    }
  }else{
    log('没有找到,登录按钮')
  }
}

function 一个一个输入数字(phoneNum,提示语,输入框序号){

  请输入手机号=text(提示语).findOne(300)
  请输入手机号.setText(phoneNum[0])
  sleep(随机延迟(500))
  if(phoneNum.length==11){

    for(let i=1;i<3;i++){
      input(输入框序号,phoneNum[i])
      延迟=随机延迟(200)
      log(延迟)
      sleep(延迟)
    }
    for(let i=3;i<7;i++){
      input(输入框序号,phoneNum[i])
      延迟=随机延迟(400)
      log(延迟)
      sleep(延迟)
    }
    for(let i=7;i<11;i++){
      input(输入框序号,phoneNum[i])
      延迟=随机延迟(300)
      log(延迟)
      sleep(延迟)
    }
  }else{




      for(let i=1;i<phoneNum.length;i++){
        input(输入框序号,phoneNum[i])
        延迟=随机延迟(300)
        log(延迟)
        sleep(延迟)
      }







  }

}

function 随机延迟(num){
  var max=num+100
  var min=num-50
  result= Math.floor(Math.random()*(max-min+1)+min);
  sleep(result)
  return result
}

function 随机数字(num){
  var max=num
  var min=-num
  result= Math.floor(Math.random()*(max-min+1)+min);
  return result
}
function 启动(appName){
  // packageName = com.huawei.android.launcher

  home()
  随机延迟(1000)
  while(!(currentPackage()=='com.huawei.android.launcher')){
    home()
    随机延迟(1000)
  }

  var appIsExist=text(appName).findOne(300)
  while(!appIsExist){
    Swipe(670,603, 250,693,333)
    随机延迟(1000)
    appIsExist=text(appName).findOne(300)
  }

  if(appIsExist){
    appIsExist.click()
    随机延迟(1000)

  }

}


function 拉黑手机号(phone){

  项目编号='16518'
  TOKEN='00888865ec587af114605f2ffb53b6e89c023b29'
  手机号码=phone
  baseUrl='http://api.fxhyd.cn/UserInterface.aspx?action=addignore&token='+TOKEN+'&itemid='+项目编号+'&mobile='+手机号码
  var r = http.get(baseUrl);
  log("code = " + r.statusCode);
  result=r.body.string()
  log("html = " + result);
  log('拉黑手机号码',phone,result)
}


function 杀掉app(appName){
  home()
  sleep(1000)
  home()
  sleep(1000)
  packageName=app.getPackageName(appName)
  log(packageName)
  app.openAppSetting(packageName)
  sleep(3000)
  var 存储界面=text('存储').findOne(300) &&　text('种子视频').findOne(300)　&& text('清除数据').findOne(300) && id('entity_header_icon').findOne(300)

  if(存储界面){
    back()
  }



  var 强行停止=text('强行停止').findOne(3000)
  if(强行停止){
    click('强行停止')
    sleep(1000)
  }

  var 确定=text('确定').findOne(3000)
  if(确定){
    click('确定')
    sleep(1000)
  }
  清空数据()
}


function 清空数据(){
  内部存储空间已使用=textContains("内部存储空间已使用").findOne(3000)
  if(内部存储空间已使用){
    var x=内部存储空间已使用.bounds().centerX()
    var y=内部存储空间已使用.bounds().centerY()
    press(x+随机数字(20),y+随机数字(20),随机延迟(200))
    sleep(1000)
  }
  清除数据=textContains("清除数据").findOne(3000)
  while(1){

    if(清除数据){
      var x=清除数据.bounds().centerX()
      var y=清除数据.bounds().centerY()
      press(x+随机数字(20),y+随机数字(20),随机延迟(200))
      sleep(1000)
      break;
    }else{
      内部存储空间已使用=textContains("内部存储空间已使用").findOne(3000)
      if(内部存储空间已使用){
        var x=内部存储空间已使用.bounds().centerX()
        var y=内部存储空间已使用.bounds().centerY()
        press(x+随机数字(20),y+随机数字(20),随机延迟(200))
        sleep(1000)
        清除数据=textContains("清除数据").findOne(3000)
      }
    }

  }
  while(1){

    确定=text("确定").findOne(3000)
    if(确定){
      var x=确定.bounds().centerX()
      var y=确定.bounds().centerY()
      press(x+随机数字(20),y+随机数字(20),随机延迟(200))
      sleep(3000)
      break
    }else{
      清除数据=textContains("清除数据").findOne(3000)
      if(清除数据){
        var x=清除数据.bounds().centerX()
        var y=清除数据.bounds().centerY()
        press(x+随机数字(20),y+随机数字(20),随机延迟(200))
        sleep(1000)
      }
    }
  }

  sleep(5000)



}





var circle = {};
circle.登录app = 登录
module.exports = circle;

