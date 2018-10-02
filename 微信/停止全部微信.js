

appName="微信"
杀掉app(appName)
function 杀掉app(appName){
  packageName=app.getPackageName(appName)
  log(packageName)
  app.openAppSetting(packageName)
  sleep(3000)
  // exit()

  var 应用信息=text('存储').findOne(6000) &&　text(appName).findOne(300)　&& text('强行停止').findOne(300)
  if(应用信息){
    log('已打开应用信息界面')
  }else{
    log("没有正确打开应用信息界面")
    exit()
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

}
