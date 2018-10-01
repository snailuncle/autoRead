





function 拉黑手机号(phone){

  项目编号='16518'
  TOKEN='00888865ec587af114605f2ffb53b6e89c023b29'
  手机号码=phone
  baseUrl='http://api.fxhyd.cn/UserInterface.aspx?action=addignore&token='+TOKEN+'&itemid='+项目编号+'&mobile='+手机号码
  var r = http.get(baseUrl);
  log("code = " + r.statusCode);
  result=r.body.string()
  log("html = " + result);
}
