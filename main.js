// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartState = {
  [EMPTY_HEART]:  FULL_HEART,
  [FULL_HEART]: EMPTY_HEART

};



document.querySelector('#modal').classList.add('hidden');
let errorMessageElement = document.querySelector('#modal')
const heartButton = document.querySelector('.like-glyph');

heartButton.addEventListener('click', changeHeart);



function changeHeart(e) {
  mimicServerCall()
    .then(function() {
      if (heartButton.innerText === EMPTY_HEART){
        heartButton.innerText = FULL_HEART;
        heartButton.classList.add('activated-heart');
      } else {
        heartButton.innerText = EMPTY_HEART;
        heartButton.classList.remove('activated-heart')
      }
    })
    .catch(function(error) {
      // Show the error message and log it
      errorMessageElement.classList.remove('hidden');
      errorMessageElement.innerText = error;
      setTimeout(function(){ 
        errorMessageElement.classList.add('hidden');
    }, 3000);
});

}


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
