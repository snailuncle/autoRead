//启动多线程,检查一些,权限申请,任务活动,等界面

//目标 输入手机号码登录app


// 登录结果=登录(未使用的号码)
验证码情况s=require("./流程图验证码情况.js")



function 登录(未使用的号码){
  appName='种子视频'
  var lock = threads.lock();
  threads.start(function(){
    log('多线程宝箱奖励开始')
    log('宝箱奖励检测开始')
    宝箱奖励=text('宝箱奖励').findOne(160000)
    if(宝箱奖励){
      var x=宝箱奖励.bounds().centerX()
      var y=宝箱奖励.bounds().centerY()
      lock.lock();
      press(x+随机数字(10,30),y+随机数字(10,30),随机数字(150,250))
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
      拒绝=text('拒绝').findOne(100)
      if(拒绝){

        var x=拒绝.bounds().centerX()
        var y=拒绝.bounds().centerY()
        lock.lock();
        press(x+随机数字(10,30),y+随机数字(10,30),随机数字(150,250))
        随机延迟(500,1500)
        lock.unlock();
      }

    }
    log('位置电话权限检测结束')
    log('多线程位置电话权限结束')
  }
});




threads.start(function(){
  //在新线程执行的代码
  log('多线程右上角跳过开始')
  log('右上角跳过检测开始')
  // bounds = (588,68,700,119)  112  51
  右上角跳过=text('跳过').id('guid_jump').findOne(160000)
  if(右上角跳过){
    var x=右上角跳过.bounds().centerX()
    var y=右上角跳过.bounds().centerY()
    lock.lock();
    press(x,y,随机数字(100,200))
    随机延迟(500,1500)
    log('点击了多线程找到的右上角跳过')
    lock.unlock();
  }else{
    log('没有找到右上角的跳过-多线程')
  }
  log('右上角跳过检测结束')
  log('多线程右上角跳过结束')
});

// text = 開
threads.start(function(){
  //在新线程执行的代码
  log('多线程开红包开始')
  log('开红包检测开始')
  var 开红包=text('開').findOne(160000)
  if(开红包){
    var x=开红包.bounds().centerX()
    var y=开红包.bounds().centerY()
    lock.lock();
    back()
    lock.unlock();
  }
  log('开红包检测结束')
  log('多线程开红包结束')
});





  //视频 赚钱 我的
  // id = main_tab_bar_tv
  视频=id('main_tab_bar_tv').text('视频').findOne(8000)
  赚钱=id('main_tab_bar_tv').text('赚钱').findOne(8000)
  我的=id('main_tab_bar_tv').text('我的').findOne(8000)
  if(视频 && 赚钱 && 我的){
    随机延迟(1000,2000)
  }else{
    log('找不到[视频/赚钱/我的],再次启动'+appName)
    launchApp(appName)
    随机延迟(5000,10000)
  }


  视频=id('main_tab_bar_tv').text('视频').findOne(8000)
  赚钱=id('main_tab_bar_tv').text('赚钱').findOne(8000)
  我的=id('main_tab_bar_tv').text('我的').findOne(8000)
  if(视频 && 赚钱 && 我的){
    随机延迟(6000,8000)
    if(!(我的.isSelected())){
      while(1){
        我的=id('main_tab_bar_tv').text('我的').findOne(8000)
        if(我的){
          x=我的.bounds().centerX()
          y=我的.bounds().centerY()
          press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
          随机延迟(2000,3000)
          if(我的.isSelected() && text("点此登录").findOne(1000)){
            break;
          }
        }
      }
    }
    点此登录=text("点此登录").findOne(1000)
    if(点此登录){

      x=点此登录.bounds().centerX()
      y=点此登录.bounds().centerY()
      press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))

    }
    随机延迟(2000,3000)
    切换至手机登录=text('切换至手机登录').findOne(1000)
    while(!切换至手机登录){
      点此登录=text("点此登录").findOne(1000)
      if(点此登录){
        x=点此登录.bounds().centerX()
        y=点此登录.bounds().centerY()
        press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
      }
      随机延迟(2000,3000)

      切换至手机登录=text('切换至手机登录').findOne(1000)

    }
    // text = 切换至手机登录
    切换至手机登录=text('切换至手机登录').findOne(2000)
    if(切换至手机登录){
      log('找到了切换至手机登录')
      x=切换至手机登录.bounds().centerX()
      y=切换至手机登录.bounds().centerY()
      press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
      随机延迟(2000,3000)
    }else{
      log('没有找到,切换至手机登录')
      return "没有找到,切换至手机登录"
    }
    // text = 请输入手机号  id = et_phone
    请输入手机号=id('et_phone').text('请输入手机号').findOne(3000)
    if(请输入手机号){
      x=请输入手机号.bounds().centerX()
      y=请输入手机号.bounds().centerY()
      press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
      随机延迟(2000,3000)
      手机号码=未使用的号码+""
      if(手机号码 && 手机号码.length==11){
        一个一个输入数字(手机号码,"请输入手机号",0)
        随机延迟(300,500)
      }else{
        log('获取手机号码失败')
        return "获取手机号码失败"
      }
    }else{
      log('没有找到请输入手机号码')
      return "没有找到请输入手机号码"
    }


    点击验证码=id('btn_send_auth_code').text('验证码').findOne(1000)
    if(点击验证码){
      log('找到,点击验证码')
      x=点击验证码.bounds().centerX()
      y=点击验证码.bounds().centerY()
      press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
      随机延迟(1000,2000)
    }else{
      log('没有找到,点击验证码')
      return "没有找到,点击验证码"
    }

    // 获取验证码
    验证码=验证码情况s.验证码情况(手机号码)
    //输入验证码
    if(验证码 && 验证码.length>3){
      log('接收验证码正常')
      log('手机号码=',手机号码,'验证码=',验证码)
    }else{
      log('接收验证码错误')
      return "接收验证码错误"
    }

    请输入验证码=id('et_auth_code').text('请输入验证码').findOne(1000)
    if(请输入验证码){
      // 请输入验证码.setText(验证码)
      x=请输入验证码.bounds().centerX()
      y=请输入验证码.bounds().centerY()
      press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
      随机延迟(1000,2000)
      一个一个输入数字(验证码,"请输入验证码",1)
      随机延迟(1000,2000)
    }else{
      log('没有找到,请输入验证码')
      return "没有找到,请输入验证码"
    }

    // 点击登录
    // id = btn_login
    // text = 登录
    登录按钮=id('btn_login').text('登录').findOne(1000)
    if(登录按钮){
      x=登录按钮.bounds().centerX()
      y=登录按钮.bounds().centerY()
      press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
      随机延迟(1000,2000)
      if(text('您的账号存在违规操作，请正确使用种子视频，如有疑问，请携邀请码到官方公众号进行反馈。').findOne(3000)){
        //杀掉app
        log( "您的账号存在违规操作，请正确使用种子视频，如有疑问，请携邀请码到官方公众号进行反馈。")
        return "您的账号存在违规操作"
      }else if(text('登录').findOne(5000)  && text('登录即代表你同意《种子视频服务协议》').findOne(5000)){
        log( 'app服务器异常,登录时便')
        return "app服务器异常"

      }
      else{
        log('登录正常')
        return '登录正常'
      }
    }else{
      log('没有找到,登录按钮')
      return "没有找到,登录按钮"
    }








  }else{
    log('没有找到[视频/赚钱/我的]')
    return "没有找到[视频/赚钱/我的]"
  }



  return false

}















function press(x,y,t){
  //改为滑动
  var x1=随机数字(-20,20)+x
  var y1=随机数字(-20,20)+y
  var x2=随机数字(-20,20)+x
  var y2=随机数字(-20,20)+y
  var x3=随机数字(-20,20)+x
  var y3=随机数字(-20,20)+y
  gesture(t, [x1,y1], [x2, y2], [x3, y3])
}




function 随机延迟(min,max){
  var result= Math.floor(Math.random()*(max-min+1)+min);
  sleep(result)
}

function 随机数字(min,max){
  var result= Math.floor(Math.random()*(max-min+1)+min);
  return result
}


function 一个一个输入数字(phoneNum,提示语,输入框序号){

  请输入手机号=text(提示语).findOne(300)
  请输入手机号.setText(phoneNum[0])
  随机延迟(300,500)
  if(phoneNum.length==11){

    for(let i=1;i<3;i++){
      input(输入框序号,phoneNum[i])
      随机延迟(150,250)

    }
    for(let i=3;i<7;i++){
      input(输入框序号,phoneNum[i])
      随机延迟(300,500)

    }
    for(let i=7;i<11;i++){
      input(输入框序号,phoneNum[i])
      随机延迟(200,400)

    }
  }else{




      for(let i=1;i<phoneNum.length;i++){
        input(输入框序号,phoneNum[i])
        随机延迟(200,400)

      }







  }

}


var circle = {};
circle.登录app = 登录
module.exports = circle;
