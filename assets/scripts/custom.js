



let crossBtn = document.querySelector(".bi-x-circle");
let toggleBtn = document.querySelector(".toggle-icon");
let leftPanel = document.querySelector(".cv-left-column");

// Toggle btn
toggleBtn.addEventListener("click",()=> {
    leftPanel.classList.toggle("show-left-column");
    toggleBtn.firstElementChild.classList.toggle("bi-list");
    toggleBtn.lastElementChild.classList.toggle("bi-x-circle");
});


window.setTimeout(() => {
        leftPanel.classList.toggle("show-left-column");
        toggleBtn.firstElementChild.classList.toggle("bi-list");
        toggleBtn.lastElementChild.classList.toggle("bi-x-circle");
    
    
}, 4000);



// Tabs
window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    function myTabClicks(tabClickEvent) {

		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}

		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");

		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}

		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});
