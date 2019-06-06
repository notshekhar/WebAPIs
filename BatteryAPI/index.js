let text_body = document.querySelector(".text_body")
let text = document.querySelector('.text')
let progress = document.querySelector('.progress')

function update(battery){
  text.innerText = `${Math.floor(battery.level*100)}`
  let color = 'blue'
  if (battery.charging) {
    text.classList.add('active_text')
    text_body.classList.add('active_text_body')
    color = 'green'
  } else {
    text.classList.remove('active_text')
    text_body.classList.remove('active_text_body')
  }
  let deg = battery.level*360
  progress.style.background = color
  
}
navigator.getBattery().then(battery=>{
  update(battery)
  battery.addEventListener('chargingchange', () => {
    update(battery)
  })
  battery.addEventListener('levelchange', () => {
    update(battery)  
  })
  battery.addEventListener('chargingtimechange', () => {
    update(battery)
  })
  battery.addEventListener('dischargingtimechange', () => {
    update(battery)
  })
  
})