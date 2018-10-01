// xiaofanxiaoyu6|4b7ed34cc6867fce445771775bd95f06

酒链项目ID='51652'
// 获取手机号之后必须延迟两秒钟
baseUrl='http://api.jmyzm.com/http.do'

// http://api.jmyzm.com/http.do?action=getMobilenum&pid=项目ID&uid=用户名&token=登录时返回的令牌&mobile=&size=1


res=http.post(baseUrl,{
  'action':'getMobilenum',
  'uid':'xiaofanxiaoyu6',
  'token':'4b7ed34cc6867fce445771775bd95f06',
  'pid':酒链项目ID,
  'mobile':'',
  'size':'1'
},{

})

result=res.body.string()
mobileAndToken=result.split('|');
mobile=mobileAndToken[0]
log(mobile)
sleep(1000)




// 传入参数：
// 1. pid='51652'
// 2. uid='xiaofanxiaoyu6'
// 3. token=4b7ed34cc6867fce445771775bd95f06
// 4. mobile=指定号码获取(可以不填写该参数，如填入格式不正确则获取新号码)
// 5. size=获取号码数(可以不填，默认为1，1<=size<=10)
// 6. operator=运营商；可以不填，指定运营商只支持填单个，取值:CMCC(移动)|UNICOM(联通)|TELECOM(电信)
// 7. province=指定省份获取号码，只能填单个地区，不填为任意地区
// 8. notProvince=排除指定省份号码，只能填单个地区，不填为不排除任何地区
// 9. vno=指定或排除虚拟运营商； 可以不填 ， vno=0 表示排除过滤虚拟运营商 vno=1 表示指定只取虚拟运营商。
// 10. city=指定城市；可以不填，只能填单个市，筛选市时需先选择省，才能选省下的市 如选广州市 那么 province=广东 ，否则无效，city取值范围请参考下面城市列表取值；
// province/notProvince/city 参数为中文，传参时要经过URL转码, 例如 广东 编码后为 %E5%B9%BF%E4%B8%9C（java转码方式编码 java.net.URLEncoder.encode("广东","UTF-8")）。
// 使用 地区、运营商、虚拟运营商 筛选功能时需注意一个账号筛选时只选一个地区、运营商，不要一下筛选某地区，一下又筛选另一地区，否则返回的号码可能会混淆不一致。
