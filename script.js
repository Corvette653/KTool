// var tbl = document.getElementById("myTable");
// for (var i=1; i<tbl.rows.length; i++){
//   tbl.rows[i].cells[2].addEventListener("click",RemoveRow,false);
// }

// function AddRow(){
//   var row = tbl.insertRow(tbl.rows.length);
//   row.insertCell(0).innerHTML = tbl.rows.length-1;
//   row.insertCell(1).innerHTML = "Wartość "+Math.floor(Math.random()*1000);
//   cell3 = row.insertCell(2);
//   cell3.innerHTML = "Usuń";
//   cell3.className = "Clickable";
//   cell3.addEventListener("click",RemoveRow,false);
// }
// function RemoveRow(e){
//   var rowID=parseInt(this.parentNode.cells[0].innerHTML);
//   tbl.deleteRow(rowID);
//   ApplyNumeration();
// }
// function ApplyNumeration(){
//   for (var i=1; i<tbl.rows.length; i++){
//     tbl.rows[i].cells[0].innerHTML = i;
//   }
// }

// function AddCol(){
  // for (var i=0; i<tbl.rows.length; i++){
  //   tbl.rows[i].insertCell().innerHTML = "Dodana komórka";
  // }
// }

// function download(data, filename, type) {
//     var file = new Blob([data], {type: type});
//     if (window.navigator.msSaveOrOpenBlob) // IE10+
//         window.navigator.msSaveOrOpenBlob(file, filename);
//     else { // Others
//         var a = document.createElement("a"),
//                 url = URL.createObjectURL(file);
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         setTimeout(function() {
//             document.body.removeChild(a);
//             window.URL.revokeObjectURL(url);  
//         }, 0); 
//     }
// }

var tbl = document.getElementById("myTable");

// Pokazywanie i ukrywanie przycisków 
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

//Obsługa przycisków dodaj, usuń, kopiuj
function DodajCzynnosc(){
	tbl.rows[0].cells[tbl.rows[0].cells.length-1].colSpan += 7;// Rozciągnięcie Nazwy procesu
	tbl.rows[1].innerHTML += '<th colspan="7"><textarea class="Czynnosc">Czynność</textarea></th>'; // Dodanie nagłówka
	tbl.rows[2].innerHTML += '<th rowspan="2"><textarea class="h2 WP">Wersja Papierowa</textarea></th><th rowspan="2"><textarea class="h2 NS">Nazwa&#10Systemu</textarea></th><th colspan="5"><textarea class="h1_5">Rodzaje czynności wykonywanych na danych</textarea></th>';
	tbl.rows[3].innerHTML += '<th><textarea class="RC">Wgląd</textarea></th><th><textarea class="RC">Wprowadzanie</textarea></th><th><textarea class="RC">Modyfikowanie</textarea></th><th><textarea class="RC">Udostępnianie</textarea></th><th><textarea class="RC">Ususwanie</textarea></th>';
	for (var i=4; i<tbl.rows.length; i++){
		if ((i-4) % 10 == 0){
			tbl.rows[i].innerHTML += '<td rowspan="10"><textarea class="h10"></textarea></td>'; // Dodanie wersji papierowej
		}
		for (var j=0; j<6; j++){
			tbl.rows[i].insertCell().innerHTML = '<textarea></textarea>'; // Dodanie komórek na rodzaje czynności
		}
	}
}

function DodajProces() {
	tbl.rows[0].innerHTML += '<th colspan="7"><textarea>Proces</textarea></th>'; // Dodanie nagłówka
	tbl.rows[1].innerHTML += '<th colspan="7"><textarea class="Czynnosc">Czynność</textarea></th>';
	tbl.rows[2].innerHTML += '<th rowspan="2"><textarea class="h2 WP">Wersja Papierowa</textarea></th><th rowspan="2"><textarea class="h2 NS">Nazwa&#10Systemu</textarea></th><th colspan="5"><textarea class="h1_5">Rodzaje czynności wykonywanych na danych</textarea></th>';
	tbl.rows[3].innerHTML += '<th><textarea class="RC">Wgląd</textarea></th><th><textarea class="RC">Wprowadzanie</textarea></th><th><textarea class="RC">Modyfikowanie</textarea></th><th><textarea class="RC">Udostępnianie</textarea></th><th><textarea class="RC">Ususwanie</textarea></th>';
	for (var i=4; i<tbl.rows.length; i++){
		if ((i-4) % 10 == 0){
			tbl.rows[i].innerHTML += '<td rowspan="10"><textarea class="h10"></textarea></td>'; // Dodanie wersji papierowej
		}
		for (var j=0; j<6; j++){
			tbl.rows[i].insertCell().innerHTML = '<textarea></textarea>'; // Dodanie komórek na rodzaje czynności
		}
	}
}

function DodajStanowisko() {
	var cell;
	var row = tbl.insertRow();
	row.innerHTML += '<th rowspan="10"><textarea class="h10">Stanowisko</textarea></th>'; // Dodanie nagłówka z nazwą stanowiska

	for (var i=0; i<10; i++){
		if (i > 0){
			row = tbl.insertRow(); // Dodanie nowego wiersza (1 wiersz dodany przed pętlą - pomijamy)
		}
		for (var j=1; j<tbl.rows[4].cells.length-(tbl.rows[4].cells.length-1)/7; j++){
			if ((j-1) % 6 == 0 && i == 0){
				row.innerHTML += '<td rowspan="10"><textarea class="h10"></textarea></td>'; // Dodanie wersji papierowej
			}
			cell = row.insertCell();
			cell.innerHTML = '<textarea></textarea>'; // Dodanie komórek na rodzaje czynności
		}
	}
}

function KopiujStanowisko() {
	var stanowisko = prompt("Nazwa stanowiska do skopiowania");
	var znaleziono = 0;
	var wiersz = -1;

	if (stanowisko == null){ // Użytkownik w komunikacie kliknął anuluj
		return;
	}

	for (var i=4; i<tbl.rows.length; i += 10){
		if (tbl.rows[i].cells[0].querySelector("textarea").value == stanowisko){ // Szukanie stanowiska do skopiowania
			wiersz = i;
			break;
		}
	}

	if (wiersz == -1){
		alert("Nie znaleziono stanowiska!");
		return;
	}

	DodajStanowisko();

	for (var i = 2; i < tbl.rows[tbl.rows.length-10].cells.length; i += 7){ // kopiowanie 1 wiersza
		tbl.rows[tbl.rows.length-10].cells[i].querySelector("textarea").value = tbl.rows[wiersz].cells[i].querySelector("textarea").value;
	}

	wiersz++;

	for (var i = tbl.rows.length-9; i < tbl.rows.length; i++, wiersz++){ // kopiowanie pozostałych 9 wierszy
		for (var j = 0; j < tbl.rows[i].cells.length; j += 6) {
			tbl.rows[i].cells[j].querySelector("textarea").value = tbl.rows[wiersz].cells[j].querySelector("textarea").value;
		}
	}
}

document.querySelector("#openedMenu3 div:nth-child(1)").addEventListener("click", DodajCzynnosc, false); // Dodaj pytanie do którego Procesu dodać czynność!
document.querySelector("#openedMenu2 div:nth-child(1)").addEventListener("click", DodajProces, false); // Działa
document.querySelector("#openedMenu1 div:nth-child(1)").addEventListener("click", DodajStanowisko, false); // Działa

document.querySelector("#openedMenu1 div:nth-child(5)").addEventListener("click", KopiujStanowisko, false); // Działa
