// API统一接口前缀地址： http://api.jmyzm.com/http.do
// 编码：UTF-8
// 支持Get、post方法请求
// 统一参数调用postUrl地址： http://api.jmyzm.com/http.do
// post数据： action=方法名&参数名1=值1....
// 如调下用登录方法：
// postUrl： http://api.jmyzm.com/http.do
// post数据：action=loginIn&uid=用户名&pwd=密码
// 除loginIn外所有API都要传入参数uid=用户名,token=登录时返回的token
// action_parameter_error：方法名不存在，请填写正确的方法名

// 短租  xiaofanxiaoyu6  qq203118908   aaaa1111

// xiaofanxiaoyu6|4b7ed34cc6867fce445771775bd95f06



baseUrl='http://api.jmyzm.com/http.do'

res=http.post(baseUrl,{
  'action':'loginIn',
  'uid':'账号',
  'pwd':'密码'
},{

})

log(res.body.string())
