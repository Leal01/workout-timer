function initClock() {
   document.getElementById("clock").innerHTML = "00"
}

function getInput() {
   let exerciseTime = 0
   let breakTime = 0

   exerciseTime = document.getElementById("exercise-time").value
   breakTime = document.getElementById("break-time").value

   if (exerciseTime.length == 0 || breakTime.length == 0)
      alert("Please set times correctly")
   else
      configClock(exerciseTime, breakTime)
}

async function configClock(exerciseTime, breakTime) {
   exerciseAux = exerciseTime
   breakAux = breakTime
   await startClock(exerciseAux)  
   await startClock(breakAux)
   configClock(exerciseTime, breakTime)
}

function startClock(time) {
   return new Promise(resolve => {
      let clock = setInterval(() => {
         if (time == 0) {
            clearInterval(clock)
            resolve(0)
         }

         document.getElementById('clock').innerHTML = time
         time = time - 1
      }, 1000)
   })
}









