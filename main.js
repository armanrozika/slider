let wrapperWidth = document.querySelector('.slider-wrapper');
// let slideWidth = document.querySelectorAll('.slide');
let leftArrow  = document.querySelector('.arrow');
let rightArrow = document.querySelector('.right');

let left = 0;

rightArrow.addEventListener('click', function back(){
	if(left==-930){
		left = -930;
	} else{
		left-=310;
	}
	wrapperWidth.style.left = `${left}px`;
	console.log(left);
});

leftArrow.addEventListener('click', function(){
	
	if(left==0){
		left = 0;
	}else{
		left+=310;
	}
	wrapperWidth.style.left = `${left}px`;
	
});


/*_______js version, try to get it !!!!!!!_______*/
	// let timeout = setTimeout(function(){
	// 	back();
	// }, 1);

	// if(left<-300){
	// 	clearTimeout(timeout);
	// }