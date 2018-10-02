数字 = [1, 2, 3, 4, 5, 6]

function 打印数字() {
  while (1) {
    数字.forEach(element => {
      log('element=',element+"")
      return '第一个就结束'
      log('return 之后打印的内容')
    });
    sleep(1000)
  }
  log('while之后打印的内容')
  sleep(1000)
}

log('我猜中了开头')
打印数字()
log('没有猜中结局')






// var circle = {};
// circle.看视频 = 看视频
// module.exports = circle;
