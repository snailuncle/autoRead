function 获取手机号码(){
  项目编号='16518'
  TOKEN='00888865ec587af114605f2ffb53b6e89c023b29'
  baseUrl='http://api.fxhyd.cn/UserInterface.aspx?action=getmobile&token='+TOKEN+'&itemid='+项目编号+'&&excludeno=170.171.180'
  var r = http.get(baseUrl);
  log("code = " + r.statusCode);
  result=r.body.string()
  log("html = " + result);
  result=result.split('|');
  手机号码=result[1]
  log('手机号码=',手机号码)
  return 手机号码
}
var circle = {};
circle.获取手机号码 = 获取手机号码
module.exports = circle;

