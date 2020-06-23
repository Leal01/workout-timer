function initClock() {
   document.getElementById("clock").innerHTML = "00:00"
}

let clock

function getInput() {
   let exerciseTime = 0
   let breakTime = 0

   exerciseTime = document.getElementById("exercise-time").value
   breakTime = document.getElementById("break-time").value

   if (exerciseTime.length == 0 || breakTime.length == 0)
      alert("Please set times correctly")
   else {
      configClock(exerciseTime, breakTime)
   }
}



async function configClock(exerciseTime, breakTime) {
   await startClock(exerciseTime)
   workoutInfo([exerciseTime, 'workout'])
   await startClock(breakTime)
   workoutInfo([breakTime, 'break'])

   configClock(exerciseTime, breakTime)
}

function startClock(time) {
   return new Promise(resolve => {
      clock = setInterval(() => {
         if (time == 0) {
            clearInterval(clock)
            resolve(0)
         }
         document.getElementById('clock').innerHTML = time
         time = time - 1
      }, 1000)
   })
}


function workoutInfo(time) {
   let value = document.getElementById('total-time').innerHTML
   value = parseInt(value, 10)
   time[0] = parseInt(time[0], 10)
   document.getElementById('total-time').innerHTML = value + time[0]
   if (time[1] == 'workout') {
      let value = document.getElementById('workout-time').innerHTML
      value = parseInt(value, 10)
      document.getElementById('workout-time').innerHTML = value + time[0]
   }
}








