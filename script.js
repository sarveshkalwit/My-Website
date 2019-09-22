//show years when dropdown is clicked
function yearDropdown() {
	document.getElementById("dropdown").classList.toggle("show");
}

//close dropdown when user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.year-dropdown-btn')) {
		var dropdowns = document.getElementById("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDrowndown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
