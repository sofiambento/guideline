// JavaScript Document

//-------------------------------
// Credits & info
// SofiaMBento 03-10-2021

//-------------------------------
// INÍCIO

// CURSOR
let mouseCursor = document.querySelector(".cursor")

window.addEventListener("mousemove", cursor)

function cursor(e) {
	mouseCursor.style.top = e.pageY + "px"
	mouseCursor.style.left = e.pageX + "px"
}


// CLOSE BOX
function closeBox() {
	document.getElementById("box").style.display = "none";
}


// MUDAR "TEMA" DO CSS
// PRIVACY
function changeRoot() {
	document.querySelector(":root").style.setProperty('--background-color', '#1A2D5E');
	document.querySelector(":root").style.setProperty('--text-color', '#FFFBE4');
	document.querySelector(".cursor").style.setProperty('--blue', '#FF8D33');
}

// TRANSPARENCY
function changeRootback() {
	document.querySelector(":root").style.setProperty('--background-color', '#FFFBE4');
	document.querySelector(":root").style.setProperty('--text-color', '#1B1B1B');
	document.querySelector(".cursor").style.setProperty('--blue', '#1A2D5E');
}


// REMOVE POPUPS ON "HOVER"
// POPUP


	function mouseEnter() {
		document.getElementById("popup").style.display = "none";
	  }
	  
	function mouseLeave() {
		document.getElementById("popup").style.display = "none";
	  }
	
	// POPUP 1
	function mouseEnter1() {
		document.getElementById("popup-1").style.display = "none";
	  }
	  
	function mouseLeave1() {
		document.getElementById("popup-1").style.display = "none";
	  }
	
	// POPUP 2
	function mouseEnter2() {
		document.getElementById("popup-2").style.display = "none";
	  }
	  
	function mouseLeave2() {
		document.getElementById("popup-2").style.display = "none";
	  }
	
	// POPUP 3
	function mouseEnter3() {
		document.getElementById("popup-3").style.display = "none";
	  }
	  
	function mouseLeave3() {
		document.getElementById("popup-3").style.display = "none";
	  }
	
	// POPUP 4
	function mouseEnter4() {
		document.getElementById("popup-4").style.display = "none";
	  }
	  
	function mouseLeave4() {
		document.getElementById("popup-4").style.display = "none";
	  }
	
	// POPUP 5
	function mouseEnter5() {
		document.getElementById("popup-5").style.display = "none";
	  }
	  
	function mouseLeave5() {
		document.getElementById("popup-5").style.display = "none";
	  }
	
	// POPUP 6
	function mouseEnter6() {
		document.getElementById("popup-6").style.display = "none";
	  }
	  
	function mouseLeave6() {
		document.getElementById("popup-6").style.display = "none";
	  }
	
	// POPUP 7
	function mouseEnter7() {
		document.getElementById("popup-7").style.display = "none";
	  }
	  
	function mouseLeave7() {
		document.getElementById("popup-7").style.display = "none";
	  }
	
	// POPUP 8
	function mouseEnter8() {
		document.getElementById("popup-8").style.display = "none";
	  }
	  
	function mouseLeave8() {
		document.getElementById("popup-8").style.display = "none";
	  }
	
	// POPUP 9
	function mouseEnter9() {
		document.getElementById("popup-9").style.display = "none";
	  }
	  
	function mouseLeave9() {
		document.getElementById("popup-9").style.display = "none";
	  }
	
	// POPUP 10
	function mouseEnter10() {
		document.getElementById("popup-10").style.display = "none";
	  }
	  
	function mouseLeave10() {
		document.getElementById("popup-10").style.display = "none";
	  }




/* let myTimer = setTimeout(appearPopups, 1000);
  
function appearPopups() {

	mouseEnter();
	mouseLeave();

	function mouseEnter() {
		document.getElementById("popup").style.display = "none";
	  }
	  
	function mouseLeave() {
		document.getElementById("popup").style.display = "none";
	  }
}

let myPopups = document.getElementById("alerts");

for (let i=0 ; i < myPopups.length; i++) {
	myPopups[i].addEventListener('over', function() {
		let r = math.Random()*1000;
		setTimeout(appearPopups, r);
	})
}; */



/* if (document.getElementById("popup").style.display = "none") {
	appearPopups();
};
	
let r = math.Random()*1000;
setInterval(appearPopups, r); */






// BUILD TRUST INTERACTION

// primeiro mouse event - quando o rato se move dentro do elemento
$('.rectangle').on('mousemove', function(ev){

	// the event.pageY property returns the position of the mouse pointer, relative to the top edge of the document
	// offset.top returns the offset top coordinates for the selected elements, relative to the document
		var by = ev.pageY - $(this).offset().top; // by = coordenadas y do rato relativamente ao topo do rectangle
		var $bdRectangle = $('.box'); // bdRectangle = box das letras
	
	// $(this) selects the current HTML element (neste caso, ".rectangle")
		rectangleHeight = $(this).height(); // rectangleHeight = .rectangle height
		

		$bdRectangle.height(rectangleHeight - by); // a altura das letras é a altura do rectangle menos a posição y do rato (o rato controla o topo das letras, baseline fixa)
		
		stretchLetter1(false); // não invocar a função da animação enquanto esta não calcular os valores de width e height
	});
	
		stretchLetter1(false);
	
	// segundo mouse event - quando o rato sai do elemento
	$('.rectangle').on('mouseleave', function(){
	// a altura do box (das letras) fica a altura onde o rato estava a última vez que passou por cima do elemento
		$('.box').height('$bdRectangle.height(rectangleHeight - by)');
		$('.letter-1').css('transform', '');
		stretchLetter1(false);
	});
	
	// a altura (e largura) do box é calculada mediante os valores x e y da letter1, que é controlada pelo rato
	function stretchLetter1(animation){
		$('.letter-1').each(function(){ // para cada letra
			var parentWidth1 = $(this).parent().width(); // parentWidth = width de box
			var parentHeight1 = $(this).parent().height(); // parentHeight = height de box			
			var thisWidth1 = $(this).width(); // thisWidth = width de letter1
			var thisHeight1 = $(this).height(); // thisHeight = height de letter1

			var widthPercent1 = parentWidth1/thisWidth1; // widthPercent = width de box/width de letter1
			var heightPercent1 = parentHeight1/thisHeight1; // heightPercent = height de box/height de letter1
			
			var timing1 = animation == true ? .5 : 0;
	
	// transforma os valores de width e height de acordo com a posição x e y do rato
			$(this).css('transform', 'scalex('+ widthPercent1 +') scaley('+ heightPercent1 +')');
		});
	}
	


// GREATER TRANSPARENCY ANIMATION

$(".greater").hover(
	function() {
	  $(this).css("animation-play-state", "running");
	},
	function() {
	  $(this).css("animation-play-state", "paused");
	}
  );



// PRIVACY/SPECIAL INTERACTION

// primeiro mouse event - quando o rato se move dentro do elemento
$('.square').on('mousemove', function(e){
	var y = e.pageY - $(this).offset().top; // y = coordenadas y do rato relativamente ao topo do square
	var $topSquare = $('.division--top'); // topSquare = letras de cima
	var $bottomSquare = $('.division--bottom'); // bottomSquare = letras de baixo
	
	// $(this) selects the current HTML element (neste caso, ".square")
	squareHeight = $(this).height(); // squareHeight = .square height
	
	$topSquare.height(y); // a altura das letras de cima é relativa à posição y do rato (as palavras transformam-se de cima para baixo, topo fixo, o rato controla a baselina das letras)
	$bottomSquare.height(squareHeight - y); // a altura das letras de baixo é a altura do square menos a posição y do rato (o rato controla o topo das letras, baseline fixa)
	
	stretchLetter(false); // não invocar a função da animação enquanto esta não calcular os valores de width e height
});

	stretchLetter(false);

// segundo mouse event - quando o rato sai do elemento
$('.square').on('mouseleave', function(){
// // a altura do division (das palavras) fica a altura onde o rato estava a última vez que passou por cima do elemento
	$('.division').height('$topSquare.height(y)', '$bottomSquare.height(squareHeight - y)');
	$('.letter').css('transform', '');
	stretchLetter(false);
});

// a altura (e largura) do division é calculada mediante os valores x e y da letter, que é controlada pelo rato
function stretchLetter(animation){
	$('.letter').each(function(){ 	// para cada letra
		var parentWidth = $(this).parent().width(); // parentWidth = width de division
		var parentHeight = $(this).parent().height(); // parentHeight = height de division
		var thisWidth = $(this).width(); // thisWidth = width de letter
		var thisHeight = $(this).height(); // thisHeight = height de letter

		var widthPercent = parentWidth/thisWidth; // widthPercent = width de division/width de letter
		var heightPercent = parentHeight/thisHeight; // heightPercent = height de division/height de letter
		
		var timing = animation == true ? .5 : 0;

	// transforma os valores de width e height de acordo com a posição x e y do rato
		$(this).css('transform', 'scalex('+ widthPercent +') scaley('+ heightPercent +')');
	});
}



// ASK FOR FORGIVENESS/PERMISSION INTERACTION

function displayResult() {
	document.getElementById("replace1").innerHTML = "permission";
	document.getElementById("replace1").style.color = "#9FD692";
	document.getElementById("replace1").style.animation = "none";
	document.getElementsByClassName("arrow-left").removeClass();
}

// CHOOSE/GIVE CONTROL INTERACTION

function displayResult2() {
	document.getElementById("replace2").innerHTML = "give";
	document.getElementById("replace2").style.color = "#9FD692";
	document.getElementById("replace2").style.animation = "none";
	document.getElementById("change-img").src = "Images/certified-stamp-green.png";
}




