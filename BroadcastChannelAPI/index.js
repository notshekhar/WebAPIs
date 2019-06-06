let b1 = new BroadcastChannel('testing_channel')
let b2 = new BroadcastChannel("channel2")
b1.postMessage("hello world")
b1.onmessage = e => {
  console.log(e)
  b2.postMessage(true)
}
b2.onmessage = e => {
  console.log(e)
  if(e.data){
    document.body.innerHTML = "This Window is already opened in another Tab"
  }
}