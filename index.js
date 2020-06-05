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
   await startExercise(exerciseAux)
   console.log("te amo")
}

function startExercise(time) {
   if (time > 0) {
      document.getElementById("clock").innerHTML = time
      setInterval(decrementTime(time), 1000)
   }
   else clearInterval()
}

function startBreak(time) {
   
}

function decrementTime(time) {
   time = time - 1
}




