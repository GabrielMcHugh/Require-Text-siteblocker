$(document).ready (jQueryMain);

var challengeString= '';

function jQueryMain () {
	$("#random-string").text(makeChallenge(3))
    $("#challenge-input").on("input", matches);
}

function matches(e) {
	if(e.target.value === challengeString) {
		console.log("neat")
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


