// window.onload = () => {
// }
function buildClock() {
  const date = new Date()

  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second

  document.querySelector('#clock-hour').textContent = hour
  document.querySelector('#clock-minute').textContent = minute
  document.querySelector('#clock-second').textContent = second

  setTimeout(buildClock, 1000)
}
buildClock()