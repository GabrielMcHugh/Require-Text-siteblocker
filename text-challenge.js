$(document).ready (jQueryMain);

var challengeString= '';

function jQueryMain () {

	$("#random-string").text(makeChallenge(3))
  $("#challenge-input").on("input", matches);
}

function matches(e) {
	if(e.target.value === challengeString) {
    console.log("Do something")
	}
}

function makeChallenge(length) {
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      challengeString += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return challengeString;
}

//Current problem is that the text-challenge file can't reference the facebook page
//It only runs the script on the challenge window.
//To unhide the facebook page I have to communicate to text-challenge-injector
// I need the challeng to communicate with the extension when there is a 
//match and communicate to the challenger to unblock
