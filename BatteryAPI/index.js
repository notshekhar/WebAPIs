let output = document.querySelector("#output")
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
  // // let deg = 350
  // if (deg <= 180) {
  //   progress.style.backgroundImage = 'linear-gradient(' + (90 + deg) + 'deg, transparent 50%, rgb(211, 210, 210) 50%), linear-gradient(90deg, ' + color +' 50%, transparent 50%)'
  // }
  // else {
  //   progress.style.backgroundImage = 'linear-gradient(' + (deg - 90) + 'deg, transparent 50%, rgb(211, 210, 210) 50%), linear-gradient(90deg, ' + color +' 50%, transparent 50%)'
  // }
}
navigator.getBattery().then(battery=>{
  update(battery)
  output.innerHTML = `Battery Status: ${battery.level*100}%`
  battery.addEventListener('chargingchange', () => {
    output.innerHTML += `<br>Charging: ${battery.charging ? 'YES' : 'NO'}`
    update(battery)
  })
  battery.addEventListener('levelchange', () => {
    output.innerHTML = `Battery Status: ${battery.level*100}%`
    output.innerHTML += `<br>Charging: ${battery.charging ? 'YES' : 'NO'}`  
    update(battery)  
  })
  battery.addEventListener('chargingtimechange', () => {
    output.innerHTML += "<br>Battery charging time: " + battery.chargingTime + " seconds"
    update(battery)
  })
  battery.addEventListener('dischargingtimechange', () => {
    output.innerHTML += "<br>Battery discharging time: " + battery.chargingTime + " seconds"
    update(battery)
  })
  
})