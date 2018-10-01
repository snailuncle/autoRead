内部存储空间已使用=textContains("内部存储空间已使用").findOne(3000)
if(内部存储空间已使用){
  var x=内部存储空间已使用.bounds().centerX()
  var y=内部存储空间已使用.bounds().centerY()
  press(x,y,1)
  sleep(1000)
}
清除缓存=textContains("清除缓存").findOne(3000)
if(清除缓存){
  var x=清除缓存.bounds().centerX()
  var y=清除缓存.bounds().centerY()
  press(x,y,1)
  sleep(1000)
}
