log(随机公司())
function 随机公司(){

  名字=("春信　貴豐　東弘　同富　飛慶　萬康　萬鼎　隆高　久協　德高　正祿  如通　公盈　春謙　皇貴  偉榮　旺利　輝聖　廣安　合亨　吉如　利如  公佳　華飛　元正　瑞豐　聚興　長福　元優　多乾  巨久　德祥　洪仁  乾富　隆安　鑫德　乾廣　偉復　久多　耀順　同福　東昌　洪亞　盛欣  元優  耀佳　昌益　欣豐　乾美　長隆　如福　聖耀　洪昇　合壽　宏祿  中輝　輝浩　裕順　偉匯　發富  茂宏　盈信　寶佳　東恒　中久　多德  百耀　欣茂　凱源　台盈　祥昇　滿昌　康泰　同富　高生  元晶　優謙  義康　進長　復優　華成　耀發　貴義　茂乾　寶高　優泰　益瑞　高福  優旺　謙源  長富　潤恒　吉乾　仁義　益聚　泰貴　鑫協　協多　隆康  欣鼎　源耀　貴昌　祿協　聖本　慶興  鑫協　正浩　仁益　高晶　如隆  凱進　泰公　多成　通發　同滿　乾昇　祿宏　偉裕　光貴　正飛  聚全  裕耀　百亞　乾福　乾安　偉捷　春祿　美厚　富泰　順義　益捷　中益  本洪　泰潤　凱佳  盈捷　厚榮　大福　耀協　潤美　鑫廣　如德　進源  滿謙　長公  進正　元康　榮協　久泰  昇順  鑫廣　如德  進源  滿謙")

  名字数组=名字.split(/ +|　+/)
  var maxNum=150
  var minNum=1
  var result=parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
  result=名字数组[result]+"网络"
  return result
  // log(名字数组.length)
  // for(let i=0;i<名字数组.length;i++){
  //   log(i)
  //   log(名字数组[i])
  // }

}
