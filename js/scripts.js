window.onscroll = function() {scrollFunction()};
		
		function scrollFunction(){
			if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35 ) {
				document.getElementById("name-header").style.height = "100px";
				document.getElementById("name-text").style.fontSize = "2vw";
			} else {
				document.getElementById("name-header").style.height = "200px";
				document.getElementById("name-text").style.fontSize = "5vw";
			}
			}
		
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}