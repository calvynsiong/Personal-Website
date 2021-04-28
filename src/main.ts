let links = document.querySelectorAll(`.navlinks`) as NodeListOf<HTMLElement>

console.log(links);


links.forEach(function (item) {
  item.addEventListener(`click`, event => {
    document.getElementById("nav-toggle").checked = false;
  })
  
})

