登录apps=require('./1登陆种子视频分身.js')
                      // 作者qq 203118908

登录是否成功=登录apps.登录app()
log('循环开始')
while(1){


  if(登录是否成功){
    //记录成功手机号码
    记录成功手机号码(登录是否成功)
    注册成功()
    sleep(5000)
    倒计时(10)
    登录是否成功=登录apps.登录app()

    // break;
  }else{
    登录是否成功=登录apps.登录app()
  }
}


function 注册成功(){

  var w = floaty.rawWindow(
    <frame  gravity="center" bg="#6600FF00">
        <text  gravity="center" textSize="66sp" typeface="monospace" textStyle="bold" textColor="red"  id="text">注册成功</text>

    </frame>
  );

  w.setSize(-1, -1);


  sleep(2000)
  w.close();
}


function 倒计时(等待注册时长){

  var w = floaty.rawWindow(
    <frame  gravity="center" bg="#6600FF00">
        <text  gravity="center" textSize="66sp" typeface="monospace" textStyle="bold" textColor="red"  id="text">倒计时30秒后再注册</text>
    </frame>
  );

  w.setSize(-1, -1);
  var p=等待注册时长
  while(1){
    ui.run(function(){
      w.text.setText("倒计时"+String(p)+"秒后再注册")
    })
    sleep(1000)
    if(p==1){
      break;
    }
    p=p-1
  }
  sleep(2000)
  w.close();
}

function 记录成功手机号码(phone){
  path='/sdcard/电话号码/'
  files.ensureDir(path)
  sleep(100)
  var text = phone+'\n';
  var 号码存放路径=path+'注册成功的手机号码.txt'
  files.append(号码存放路径, text);
  //用其他应用查看文件
  // app.viewFile(号码存放路径);
}
