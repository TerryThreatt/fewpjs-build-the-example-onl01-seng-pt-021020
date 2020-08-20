// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (e) => {
  //nodes
  const modal = document.querySelector('#modal');
  const likes = document.querySelectorAll('.like-glyph');
  const errMessage = document.querySelector('#modal-message');

  // click
  likes.forEach((like) => {
    like.addEventListener('click', (e) => {
      mimicServerCall('url')
        .then(() => {
          if (e.target.innerHTML == EMPTY_HEART) {
            e.target.innerHTML = FULL_HEART
            e.target.classList.add('activated-heart')
          }
          else {
            e.target.innerHTML = EMPTY_HEART
            e.target.classList.remove('activated-heart')
          }
        })
      .catch((error) => {

        setTimeout(() => {
          errMessage.textContent = error.message
          modal.classList.remove('hidden')
        }, 5000)

        modal.className = 'hidden'
      })
    })
  })



})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
