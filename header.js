function ShowMenu3() {
	if (document.querySelector("#openedMenu3").className == "openedMenu hidden") {
  		document.querySelector("#openedMenu3").className = "openedMenu";
	}
	else {
		document.querySelector("#openedMenu3").className = "openedMenu hidden";
	}
}

function HideMenu3() {
  document.querySelector("#openedMenu3").className = "openedMenu hidden";
}

function ShowMenu2() {
	if (document.querySelector("#openedMenu2").className == "openedMenu hidden") {
  		document.querySelector("#openedMenu2").className = "openedMenu";
	}
	else {
		document.querySelector("#openedMenu2").className = "openedMenu hidden";
	}
}

function HideMenu2() {
  document.querySelector("#openedMenu2").className = "openedMenu hidden";
}

function ShowMenu1() {
	if (document.querySelector("#openedMenu1").className == "openedMenu hidden") {
  		document.querySelector("#openedMenu1").className = "openedMenu";
	}
	else {
		document.querySelector("#openedMenu1").className = "openedMenu hidden";
	}
}

function HideMenu1() {
  document.querySelector("#openedMenu1").className = "openedMenu hidden";
}

document.querySelector("#menuButton3").addEventListener("click", ShowMenu3, false);
document.querySelector("#openedMenu3").addEventListener("mouseleave", HideMenu3, false);
document.querySelector("#menuButton2").addEventListener("click", ShowMenu2, false);
document.querySelector("#openedMenu2").addEventListener("mouseleave", HideMenu2, false);
document.querySelector("#menuButton1").addEventListener("click", ShowMenu1, false);
document.querySelector("#openedMenu1").addEventListener("mouseleave", HideMenu1, false);