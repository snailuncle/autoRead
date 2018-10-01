

// 清空Via数据并启动s=require('./清除via所有数据并启动.js')
// 火云获取手机号码s=require('./火云获取手机号码.js')
// 清空Via数据并启动s.清除数据加启动app()
phoneNumber='13059747389'
isThere=text('关于').findOne(2000) || text('主页').findOne(2000)
if(isThere){
  log('找到了地址栏')
  // 邀请链接='http://tyututy.com/s/BdKvU?tm=e0dca2'
  邀请链接='http://nnjioko.com/s/iGttU?tm=b13c83'

  isThere.click()
  log('已经点击地址栏')
  sleep(333)
  isThere.setText(邀请链接)
  log('已经修改地址栏')
  sleep(333)
  desc('刷新').findOne(1000).click()
  log('已经点击转到某网址')
}else{
  log('没有找到地址栏')
}



isThere=bounds(159,1395,921,1530).findOne(10000);

// phoneNumber=火云获取手机号码s.获取手机号码()
if(isThere){
  isThere=text('请输入手机号 领福利').findOne(1000)
  if(isThere){
    isThere.setText(phoneNumber)
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
