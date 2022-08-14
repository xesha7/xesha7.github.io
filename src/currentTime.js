function dispCurrentTime () {
    const currentTime = new Date()
    const dispTime = document.querySelector ("#currentTime")
    
    dispTime.innerText = `현재 시간 : ${currentTime.toLocaleTimeString ()}`
}

dispCurrentTime()
setInterval (dispCurrentTime,1000)
