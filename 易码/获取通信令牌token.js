
// 账号='xiaofanxiaoyu'
// 密码='qq203118908'

// 账号='猪八戒'
// 密码='GaoLaoZhuang'

// baseUrl='http://api.fxhyd.cn/UserInterface.aspx'
// res=http.post(baseUrl,{
//   'action':'login',
//   'username':账号,
//   'password':密码
// },{

// })

// log(res.body.string())


http://api.fxhyd.cn/UserInterface.aspx?action=login&username=你的账号&password=你的密码


var r = http.get("http://api.fxhyd.cn/UserInterface.aspx?action=login&username=xiaofanxiaoyu&password=qq203118908");
log("code = " + r.statusCode);
log("html = " + r.body.string());


html = success|00888865ec587af114605f2ffb53b6e89c023b29
