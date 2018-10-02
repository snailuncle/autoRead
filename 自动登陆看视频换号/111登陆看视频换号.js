




while(1){
  log('读取号码开始')
  phone=换号()
  log('读取号码结束')

  if(phone){
    log('登陆开始')
    登陆成功=登陆(phone)
    log('登陆结束')

    if(登陆成功 && 登陆成功.match(/1\d{10}/)){
      log('看视频开始')

      看三分钟视频=看视频()
      log('看视频结束')

    }else if(登陆成功 && 登陆成功.match(/登陆无效/)){
      log('登陆无效')
      // break;
    }

    else{
      log("登录账号失败")
      // exit()



    }
  }else{
    log("获取手机号码失败")
    exit()
  }

}



function 登陆(phone){
  登录apps=require('./1登陆种子视频分身.js')
  登录是否成功=登录apps.登录app(phone)
  return 登录是否成功
}

function 上滑(){
  var x1=随机数字(Math.floor(device.width/3))
  var y1=随机数字(Math.floor(device.height/3*2))
  var x2=随机数字(x1)
  var y2=随机数字(y1-Math.floor(device.height/2))
  var xMid=x1+随机数字(50)
  var yMid=y2+随机数字(50)
  gesture(1000+随机数字(300), [x1,y1], [xMid, yMid], [x2, y2])

}




function  看视频(){
  //找一个三分钟以上的视频
  回到视频界面()
  while(1){

    视频时长s=id('item_video_time').find()
    // text = 01:03
    if(视频时长s){

      视频时长s.forEach(element => {
        视频时长=element.text()
        if(视频时长){
          视频时长十位=视频时长[0]
          视频时长个位=视频时长[1]
          if(视频时长十位==0 && 视频时长个位>=3 && 视频时长个位<=5){
            x=element.bounds().centerX()
            y=element.bounds().centerY()
            press(x+随机数字(30),y+随机数字(20),随机延迟(200))
            for(let i=0;i<3*60+30;i++){
              sleep(1000)
            }
            log('视频观看完毕')
            return true
          }
        }
      });
    }else{
      log('找不到视频时长,应当在主页面,脚本结束')
    }
    上滑()
    sleep(2000)
  }
}

function 回到视频界面(){
  视频=id('main_tab_bar_tv').text('视频').findOne(8000)
  赚钱=id('main_tab_bar_tv').text('赚钱').findOne(8000)
  我的=id('main_tab_bar_tv').text('我的').findOne(8000)
  if(视频 && 赚钱 && 我的){
    随机延迟(1111)
    if(!(视频.isSelected())){

      视频=text('视频').findOne()
      while(1){
        视频=id('main_tab_bar_tv').text('视频').findOne(8000)
        if(视频){

          x=视频.bounds().centerX()
          y=视频.bounds().centerY()
          press(x+随机数字(30),y+随机数字(20),随机延迟(200))
        }
        随机延迟(2000)
        if(视频.isSelected() && text("推荐").findOne(1000)){
          break;
        }

      }
    }


  }else{
    log('不在主页,请先回到主页,再看视频,脚本结束')
    exit()
  }


}

function press(x,y,t){
  //改为滑动
  var x1=随机数字(10)+x
  var y1=随机数字(10)+y
  var x2=随机数字(10)+x
  var y2=随机数字(10)+y
  var x3=随机数字(10)+x
  var y3=随机数字(10)+y


  gesture(t, [x1,y1], [x2, y2], [x3, y3])



}

function 随机延迟(num){
  var max=num+100
  var min=num-50
  result= Math.floor(Math.random()*(max-min+1)+min);
  sleep(result)
  return result
}

function 随机数字(num){
  var max=num
  var min=-num
  result= Math.floor(Math.random()*(max-min+1)+min);
  return result
}



function 换号(){
  // 读取可以用的手机号,然后把读取过的手机号放入,已读取手机号文本中
    var 号码存放路径='/sdcard/电话号码/注册成功的手机号码.txt'
    phonesText=files.read(号码存放路径)
    phones=phonesText.match(/1\d{10}/g)
    // log(phones)

    var 登陆过的号码存放路径='/sdcard/电话号码/已登陆过的手机号码.txt'
    result=files.exists(登陆过的号码存放路径)
    if(result){
      phonesUsedText=files.read(登陆过的号码存放路径)
      phonesUsed=phonesUsedText.match(/1\d{10}/g)
    }else{
      phonesUsed=null
    }
    phoneGet=false
    for(let i=0;i<phones.length;i++){
      log(phones[i])
      if(phonesUsed){
        for(let j=0;j<phonesUsed.length;j++){
          if(phones[i]==phonesUsed[j]){
            phoneGet=true
            log(phones[i],"已登陆过了")
            break;
          }
        }
        if(phoneGet){

        }else{
          return phones[i]
        }
      }else{
        return phones[i]
      }
    }

    log('都登陆过了,结束脚本')
    exit()


  // 记录已登陆过的手机号码(phone)
}


function 记录已登陆过的手机号码(phone){
  path='/sdcard/电话号码/'
  files.ensureDir(path)
  sleep(100)
  var text = phone+'\n';
  var 号码存放路径=path+'已登陆过的手机号码.txt'
  files.append(号码存放路径, text);
  //用其他应用查看文件
  // app.viewFile(号码存放路径);
}




