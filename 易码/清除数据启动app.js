
杀掉app("种子视频")
启动('种子视频')
function 杀掉app(appName){
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
    press(x,y,1)
    sleep(1000)
  }
  清除数据=textContains("清除数据").findOne(3000)
  if(清除数据){
    var x=清除数据.bounds().centerX()
    var y=清除数据.bounds().centerY()
    press(x,y,1)
    sleep(1000)
  }
  确定=text("确定").findOne(3000)
  if(确定){
    var x=确定.bounds().centerX()
    var y=确定.bounds().centerY()
    press(x,y,1)
    sleep(3000)
  }

}



function 启动(appName){
  // packageName = com.huawei.android.launcher

  home()
  sleep(1000)
  while(!(currentPackage()=='com.huawei.android.launcher')){
    home()
    sleep(1000)
  }

  var appIsExist=text(appName).findOne(300)
  while(!appIsExist){
    Swipe(670,603, 250,693,333)
    sleep(1000)
    appIsExist=text(appName).findOne(300)
  }

  if(appIsExist){
    appIsExist.click()
    sleep(1000)

  }

}
15073856954
