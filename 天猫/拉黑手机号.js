

// http://api.jmyzm.com/http.do?action=addIgnoreList&uid=用户名&token=登录时返回的令牌&mobiles=号码1,号码2,号码3&pid=项目ID

function 拉黑手机号码(mobile){

  天猫注册='3387'
  项目ID=天猫注册

  baseUrl='http://api.jmyzm.com/http.do'

  res=http.post(baseUrl,{
    'action':'addIgnoreList',
    'token':'bdc01e456860547211fd37bec6d401a3',
    'uid':'xiaofanxiaoyu',
    'pid':项目ID,
    'mobiles':mobile
  },{

  })
  result=res.body.string()
  log(result)
  return result
}


mobile='13285700814'
拉黑手机号码(mobile)
