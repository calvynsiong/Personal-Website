const links = document.querySelectorAll(`.navlinks`) as NodeListOf<HTMLInputElement>
const header = document.querySelector(`header`) as HTMLElement



links.forEach(function (item:HTMLInputElement) {
  item.addEventListener(`click`, event => {
    const input: HTMLInputElement = document.getElementById("nav-toggle")
    input.checked = false;
  })
  
})

// let header=

let scrollPos = 0;

window.addEventListener('scroll', function(){
  // detects if it is scrolling up and makes it visible
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    header.style.opacity = "1"

  }
	else{
    header.style.opacity = "0"

  }
	// detects if its scrolling down then makes it invisible
	scrollPos = (document.body.getBoundingClientRect()).top;
});

