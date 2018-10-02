function 杀掉app(appName){
  home()
  sleep(1000)
  home()
  sleep(1000)
  var packageName=app.getPackageName(appName)
  log(packageName,appName)
  app.openAppSetting(packageName)
  sleep(3000)
  //可能是存储界面,而不是强行停止界面
  var 存储界面=text('存储').findOne(3000) &&　text(appName).findOne(300)　&& text('清除数据').findOne(300) && id('entity_header_icon').findOne(300)

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
  var 内部存储空间已使用=textContains("内部存储空间已使用").findOne(3000)
  if(内部存储空间已使用){
    var x=内部存储空间已使用.bounds().centerX()
    var y=内部存储空间已使用.bounds().centerY()
    press(x+随机数字(10,30),y+随机数字(15,25),随机数字(100,250))
    sleep(1000)
  }
  var 清除数据=textContains("清除数据").findOne(3000)
  while(1){
    if(清除数据){
      var x=清除数据.bounds().centerX()
      var y=清除数据.bounds().centerY()
      press(x+随机数字(10,30),y+随机数字(15,25),随机数字(100,250))

      sleep(1000)
      break;
    }else{
      内部存储空间已使用=textContains("内部存储空间已使用").findOne(3000)
      if(内部存储空间已使用){
        var x=内部存储空间已使用.bounds().centerX()
        var y=内部存储空间已使用.bounds().centerY()
        press(x+随机数字(10,30),y+随机数字(15,25),随机数字(100,250))

        sleep(1000)
        清除数据=textContains("清除数据").findOne(3000)
      }
    }

  }
  while(1){

    var 确定=text("确定").findOne(3000)
    if(确定){
      var x=确定.bounds().centerX()
      var y=确定.bounds().centerY()
      press(x+随机数字(10,30),y+随机数字(15,25),随机数字(100,250))

      sleep(3000)
      break
    }else{
      var 清除数据=textContains("清除数据").findOne(3000)
      if(清除数据){
        var x=清除数据.bounds().centerX()
        var y=清除数据.bounds().centerY()
        press(x+随机数字(10,30),y+随机数字(15,25),随机数字(100,250))

        sleep(1000)
      }
    }
  }
  //给清空数据留的时间
  sleep(5000)
}




function 启动(appName){
  home()
  随机延迟(1000,2000)
  //如果不是桌面,就一直按Home回到桌面
  while(!(currentPackage()=='com.huawei.android.launcher')){
    home()
    随机延迟(1000,2000)

  }

  var appIsExist=text(appName).findOne(300)
  while(!appIsExist){
    Swipe(670,603, 250,693,333)
    随机延迟(1000,2000)
    appIsExist=text(appName).findOne(300)
    if(appIsExist){
      break;
    }
  }



  if(appIsExist){
    appIsExist.click()
    随机延迟(6000,10000)
    var 当前包名=currentPackage()
    var name = getAppName(当前包名); //返回"QQ"
    if(name==appName){
      return true
    }
  }
  return false
}


function 必须启动app(appName){
  杀掉app(appName)
  while(1){
    var 启动成功了吗=启动(appName)
    if(启动成功了吗){
      return true
    }
  }
}











function 随机延迟(min,max){
  var result= Math.floor(Math.random()*(max-min+1)+min);
  sleep(result)
}

function 随机数字(min,max){
  var result= Math.floor(Math.random()*(max-min+1)+min);
  return result
}



var circle = {};
circle.必须启动app = 必须启动app
module.exports = circle;
