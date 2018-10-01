



baseUrl='http://47.94.137.238/api/do.php'

// action=loginIn&name=API账号&password=密码

API账号名='api-113240-r1Z4PAQ'
密码='qq203118908'
res=http.post(baseUrl,{
  'action':'loginIn',
  'name':API账号名,
  'password':密码
},{

})

log(res.body.string())

// 1|bdc01e456860547211fd37bec6d401a3
