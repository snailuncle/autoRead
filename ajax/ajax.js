
var r = http.get("www.daduwuliu.com:8000/lmis/client.do?todayHallList&departId=4028e44260b495040160b51720f61a13&loadingPlace=&destination=&carType=&carLength=&_=1538205302180&callbackparam=json", {
  headers: {
      'Host': 'www.daduwuliu.com:8000',
      'Connection': 'keep-alive',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 7.0; BND-AL10 Build/HONORBND-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36 Appcan/3.1',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'zh-CN,en-US;q=0.9',
      'Cookie': 'JSESSIONID=A1C004A3D4C20DB719B06BDC6D52795A',
      'X-Requested-With': 'com.omhsz.ddwlcz'
  }
});



log(r.body)
