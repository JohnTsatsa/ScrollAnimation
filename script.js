
const boxes=document.querySelectorAll(".box")

/*      ---------- 	Explanation of code  ------------
	when the pages scrolls perform the following function
	set the trigger point that you want the box to show up
	for every box, put in a constant (boxTop) the distance between the top of the box and the top of the page
	compare the trigger value and the boxTop value 
	if the boxTop exceeds the trigger point, show the box by moving it to the center */


window.addEventListener("scroll",checkboxes)

// -----   on refresh, go scrollbar to top  ----//
window.onbeforeunload = function () {
    window.scrollTo(0,0);
}


function checkboxes() {
	
	const trigger=window.innerHeight/1.1  // you can put just "window.innerHeight" and the box will appear exactly when its top reaches the bottom of the web pagedevide it by a number a little bigger than 1 so it will appear a little later 
	
	boxes.forEach(box=>{
		const boxTop=box.getBoundingClientRect().top  // the distance of the top of the box from the top of the page
		
		if(boxTop<trigger){ 
			box.classList.add("show")
		} else{
			box.classList.remove("show")
		}
	})
}