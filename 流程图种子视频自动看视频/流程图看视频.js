



function 回到视频界面(){




  视频=id('main_tab_bar_tv').text('视频').findOne(8000)
  赚钱=id('main_tab_bar_tv').text('赚钱').findOne(8000)
  我的=id('main_tab_bar_tv').text('我的').findOne(8000)
  if(视频 && 赚钱 && 我的){
    随机延迟(2000,4000)
    if(!(视频.isSelected())){
      log('视频没有被选中')
      while(1){
        视频=id('main_tab_bar_tv').text('视频').findOne(3000)
        if(视频){
          x=视频.bounds().centerX()
          y=视频.bounds().centerY()

          press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
          随机延迟(2000,3000)
          if(视频.isSelected() && text("推荐").findOne(1000)){
            break;
          }

        }
      }
    }

    // for(let i=0;i<1;i++){
    //   视频=id('main_tab_bar_tv').text('视频').findOne(3000)
    //   if(视频){
    //     x=视频.bounds().centerX()
    //     y=视频.bounds().centerY()
    //     press(x+随机数字(20,30),y+随机数字(10,20),随机数字(100,200))
    //     随机延迟(2000,3000)
    //   }
    //   sleep(1000)
    // }


    if(视频.isSelected()){
      log('视频被选中了')
    }else{
      log('视频没有被选中,应该被选中的,停止脚本检查')
      exit()
    }





  }

















}















function  看视频(){
  log('开始看视频操作')
  //找一个三分钟以上的视频
  回到视频界面()
  while(1){
    视频时长s=id('item_video_time').find()
    if(视频时长s){

      for(let i=0;i<视频时长s.length;i++){
        element=视频时长s[i]
        视频时长=element.text()
        if(视频时长){
          视频时长十位=视频时长[0]
          视频时长个位=视频时长[1]
          if(视频时长十位==0 && 视频时长个位>=3 && 视频时长个位<=5){
            x=element.bounds().centerX()
            y=element.bounds().centerY()
            if(y<(Math.floor(device.height/4*3))){
              press(x+随机数字(20,40),y+随机数字(10,30),随机数字(100,300))
              看视频倒计时(20)
              log('看视频函数内打印视频观看完毕')
              return "看视频返回值======观看视频完毕"
              log('return之后打印东西')
            }





          }
        }

      }






    }else{
      log('找不到视频时长,应当在主页面,脚本结束')
    }
    上滑()
    sleep(2000)
  }
}


function 随机延迟(min,max){
  var result= Math.floor(Math.random()*(max-min+1)+min);
  sleep(result)
}

function 随机数字(min,max){
  var result= Math.floor(Math.random()*(max-min+1)+min);
  return result
}

function 上滑(){
  var x1=随机数字(Math.floor(device.width/3),Math.floor(device.width/3)+30)
  var y1=随机数字(Math.floor(device.height/3*2),Math.floor(device.height/3*2)+30)
  var x2=随机数字(x1,x1+30)
  var y2=随机数字(y1-Math.floor(device.height/2),y1-Math.floor(device.height/2)+30)
  var xMid=x1+随机数字(30,60)
  var yMid=y2+随机数字(30,60)
  gesture(1000+随机数字(200,400), [x1,y1], [xMid, yMid], [x2, y2])

}




function 看视频倒计时(看视频时长){

  var w = floaty.rawWindow(
    <frame  gravity="center" bg="#6600FF00">
        <text  gravity="center" textSize="66sp" typeface="monospace" textStyle="bold" textColor="red"  id="text">看视频倒计时{看视频时长}秒</text>
    </frame>
  );

  w.setSize(-1, -1);
  var p=看视频时长
  while(1){
    ui.run(function(){
      w.text.setText("看视频倒计时"+String(p)+"秒")
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











var circle = {};
circle.看视频 = 看视频
module.exports = circle;
