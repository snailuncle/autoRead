

function 清除via所有数据(){
  appName="Via"
  packageName=app.getPackageName(appName)
  log('Via包名='+packageName)

  app.openAppSetting(packageName)
  // 这是停止app的部分
  if(textMatches(/流量使用情况/).findOne(2000)){
    log('到了应用信息主界面')
    // 包含某文本控件是否存在(某文本,搜寻时间)
    isThere=包含某文本控件是否存在('强行停止')
    if(isThere){
      click("强行停止")
      isThere=包含某文本控件是否存在('确定')
      if(isThere){
        click("确定")
      }
    }
    sleep(1222)


    // 这是清除数据部分
    isThere=包含某文本控件是否存在('存储')
    if(isThere){
      id('android:id/title').text('存储').findOne(500).parent().parent().click()
    }
  }
  sleep(1000)
  isThere=包含某文本控件是否存在('清除数据')
  if(isThere){
    click("清除数据")
    isThere=包含某文本控件是否存在('确定')
    if(isThere){
      click("确定")
    }
  }
  sleep(1000)

  app.launch(packageName)
  log('已经启动app')
  sleep(2000)
  if(currentPackage()==packageName){
    app.launch(packageName)
    log('已经启动app')
    sleep(2000)
  }
  if(currentPackage()==packageName){
    app.launch(packageName)
    log('已经启动app')
    sleep(2000)
  }
  isThere1=包含某文本控件是否存在('提示')
  isThere2=包含某文本控件是否存在('确认')
  if(isThere1 && isThere2){
    click("确认")
  }else{
    sleep(5000)
  }


isThere1=包含某文本控件是否存在('提示')
isThere2=包含某文本控件是否存在('确认')
if(isThere1 && isThere2){
  click("确认")
}
sleep(1000)
isThere1=包含某文本控件是否存在('允许')
isThere2=包含某文本控件是否存在('拒绝')
if(isThere1 && isThere2){
  click("拒绝")
}
sleep(1000)
isThere1=包含某文本控件是否存在('允许')
isThere2=包含某文本控件是否存在('拒绝')
if(isThere1 && isThere2){
  click("拒绝")
}


}

function 包含某文本控件是否存在(某文本,搜寻时间){
  var t= 搜寻时间 || 1000
  var v = 某文本;
  var re =new RegExp(某文本);

  var w = textMatches(re).findOne(t);
  if(w != null){
    log("找到了"+某文本)
    return true
  }else{
      log("没有找到"+某文本);
      return false
  }
}




var circle = {};

circle.清除数据加启动app = 清除via所有数据

module.exports = circle;
