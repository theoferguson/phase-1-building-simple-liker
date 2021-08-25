// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelector("#modal").className = "hidden"

const heartLiker = document.querySelectorAll(".like-glyph")


heartLiker.forEach(heart => {
  console.log(heart)
  heart.addEventListener("click", () => {
  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall()
    .then(() => {
      heart.className = "activated-heart"
      heart.textContent = FULL_HEART
    })
    .catch(() => {
      document.querySelector("#modal").classList.remove(".hidden")
      setTimeout(() => {
        document.querySelector("#modal").className = "hidden"
      }, 3000)
    })
  } else {
    heart.textContent = EMPTY_HEART
    heart.classList.remove("activated-heart")
  }
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
