const closeBtn = document.querySelector('.modal__close-btn')
const overlay = document.querySelector('.overlay')
const timer = document.querySelector('.modal__timer')
const modal = document.querySelector('.modal')



const minutesToSubscribe = 30

closeBtn.addEventListener('click', () => { 
    overlay.classList.remove('show')
    modal.classList.remove('show')
})


setTimeout(() => {
    overlay.classList.add('show')
    modal.classList.add('show')
    setTimer()
}, 2000);



let setTimer = () => {
    if (modal.classList.contains('show')) {   
        let mainDate =  new Date()
        let timerEnd = (Date.now() - mainDate.getMinutes() * 60000) + (minutesToSubscribe * 60000 - mainDate.getSeconds() * 1000)
        let start = Date.now() - (mainDate.getSeconds() * 1000 + mainDate.getMinutes() * 60000)

        let intervalId = setInterval(() => {
            let date = new Date(timerEnd)         
            
            if (timerEnd !== start) {
                timer.innerHTML = `00:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`
                timerEnd -= 1000
            } else {
                // timer.innerHTML = 'Время вышло'
                console.log('done')
                clearInterval(intervalId)
            }
        }, 1000)
    }
}
