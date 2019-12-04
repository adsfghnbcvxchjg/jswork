let nowtime = new Date();
let minutes = seconds = 0
minutes=59-nowtime.getMinutes()
seconds=59-nowtime.getSeconds()

let id1 = setInterval(seckill,1000)
function seckill() {
    seconds--
    if(seconds==-1){
        seconds=59
        minutes-=1
    }
    else if(minutes==-1){
        minutes=59
    }
    document.getElementById('minutes').innerHTML = minutes +'分'
    document.getElementById('seconds').innerHTML = seconds +'秒'
}