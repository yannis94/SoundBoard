//variavles
 let stepOne = false;
 let stepTwo = false;
 let stepThree = false;
 let stepFour = false;

let clues = ["Eminem's famous title song", "First name", "South Park character", "Lee", "Teacher's first name"];
let i = -1;
let btn = document.getElementById('boutton');





window.addEventListener("keydown", function(e) {

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 	if(!audio) return;
 	key.classList.add("playing");
 	audio.currentTime = 0;
 	audio.play();

 	//enigma


 	function win() {

 		if (e.keyCode == 83) {
 			stepOne = true;
 		}

 		else if (stepOne == true && e.keyCode == 84) {
		 	stepTwo = true;
 		}

 		else if (stepOne == true && stepTwo == true && e.keyCode == 65) {
 			stepThree = true;
 		}

 		else if (stepOne == true && stepTwo == true && stepThree == true && e.keyCode == 78) {
 			stepFour = true;
 			document.getElementById('before').style.display = "none";
 			document.getElementById('after').style.display = "block";
 			document.getElementById('gg').classList.add("up");
 			document.getElementById('vdo').innerHTML = "<iframe id='naha' src='https://www.youtube.com/embed/2cvBigom3sg?rel=0&amp;autoplay=1;controls=0&amp;showinfo=0&amp;start=220' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
 			
 			setTimeout(function close() {
 				document.getElementById('vdo').innerHTML = "<button id='bouttonR'>Play again</button>"
 				document.getElementById('bouttonR').addEventListener("click", function reload() {
 					window.location.reload(true);
 				});
 			}, 35000);
 		}

 		else {
 			stepOne = false;
		 	stepTwo = false;
		 	stepThree = false;
		 	stepFour = false;
 		}
	}


 	win();


});

//CSS keys

const keys = document.querySelectorAll('.key');

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
	if(e.propertyName!=="transform")
		return;
	e.currentTarget.classList.remove("playing");
};



//clues

btn.addEventListener("click", function help(){
	i ++;

	if (i < 5) {
		let ul = document.getElementById("list");
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(clues[i]));
	 	ul.appendChild(li);		
	}

 	else {
 		alert('no more clues');
 		i--;
 	}

});	

