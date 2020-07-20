var tbl = document.getElementById("myTable");

function DodajCzynnosc(){
	var proces = prompt("Nazwa procesu do którego dodać czynność:");
	var nrProcesu = -1;
	var nrCzynnosci = 0;

	if (proces == null){ // Użytkownik w komunikacie kliknął anuluj
		return;
	}

	for (var i=1; i<tbl.rows[0].cells.length; i++){
		if (tbl.rows[0].cells[i].querySelector("textarea").value == proces){ // Szukanie procesu
			nrProcesu = i;
			for (var j = i; j > 0; j--){
				nrCzynnosci += tbl.rows[0].cells[j].colSpan/7;
			}
			break;
		}
	}

	if (nrProcesu == -1){
		alert("Nie znaleziono procesu!");
		return;
	}

	var komorka = {czynnosc: 0, wp: 0, ns: 0, rc: 0, rc1: 0, rc2: 0, rc3: 0, rc4: 0, rc5: 0};
	for (var i in komorka) {
		komorka[i] = document.createElement("th");
		komorka[i].innerHTML = "<textarea></textarea>";
	}

	komorka.czynnosc.colSpan = 7;
	komorka.czynnosc.querySelector("textarea").className = "Czynnosc";
	komorka.czynnosc.querySelector("textarea").value = "Czynność";
	komorka.wp.rowSpan = 2;
	komorka.wp.querySelector("textarea").className = "h2 WP";
	komorka.wp.querySelector("textarea").value = "Wersja Papierowa";
	komorka.ns.rowSpan = 2;
	komorka.ns.querySelector("textarea").className = "h2 NS";
	komorka.ns.querySelector("textarea").value = "Nazwa" + String.fromCharCode(13, 10) + "Systemu"; // Tworzenie komórek do nagłówka
	komorka.rc.colSpan = 5;
	komorka.rc.querySelector("textarea").className = "h1_5";
	komorka.rc.querySelector("textarea").value = "Rodzaje czynności wykonywanych na danych";
	komorka.rc1.querySelector("textarea").value = "Wgląd";
	komorka.rc2.querySelector("textarea").value = "Wprowadzanie";
	komorka.rc3.querySelector("textarea").value = "Modyfikowanie";
	komorka.rc4.querySelector("textarea").value = "Udostępnianie";
	komorka.rc5.querySelector("textarea").value = "Ususwanie";
	komorka.rc1.querySelector("textarea").className = "RC";
	komorka.rc2.querySelector("textarea").className = "RC";
	komorka.rc3.querySelector("textarea").className = "RC";
	komorka.rc4.querySelector("textarea").className = "RC";
	komorka.rc5.querySelector("textarea").className = "RC";

	tbl.rows[0].cells[nrProcesu].colSpan += 7;// Rozciągnięcie Nazwy procesu
	tbl.rows[1].insertBefore(komorka.czynnosc, tbl.rows[1].cells[nrCzynnosci]);
	tbl.rows[2].insertBefore(komorka.rc, tbl.rows[2].cells[nrCzynnosci*3]);
	tbl.rows[2].insertBefore(komorka.ns, tbl.rows[2].cells[nrCzynnosci*3]);
	tbl.rows[2].insertBefore(komorka.wp, tbl.rows[2].cells[nrCzynnosci*3]);
	tbl.rows[3].insertBefore(komorka.rc5, tbl.rows[3].cells[nrCzynnosci*5]);
	tbl.rows[3].insertBefore(komorka.rc4, tbl.rows[3].cells[nrCzynnosci*5]); // Dodawanie nagłówka
	tbl.rows[3].insertBefore(komorka.rc3, tbl.rows[3].cells[nrCzynnosci*5]);
	tbl.rows[3].insertBefore(komorka.rc2, tbl.rows[3].cells[nrCzynnosci*5]);
	tbl.rows[3].insertBefore(komorka.rc1, tbl.rows[3].cells[nrCzynnosci*5]);

	for (var i=4; i<tbl.rows.length; i++){

		for (var j=2; j<8; j++){
			if ((i-4) % 10 == 0){
				tbl.rows[i].insertCell(nrCzynnosci*7 + 1).innerHTML = '<textarea></textarea>'; // Dodanie komórek na rodzaje czynności
			}
			else{
				tbl.rows[i].insertCell(nrCzynnosci*6).innerHTML = '<textarea></textarea>';
			}
		}

		if ((i-4) % 10 == 0){
			var cell = tbl.rows[i].insertCell(nrCzynnosci*7 + 1);
			cell.innerHTML = '<textarea></textarea>';
			cell.rowSpan = 10;
			cell.querySelector("textarea").className = "h10";// Dodanie wersji papierowej
		}
	}
}

function DodajProces() {

	var komorka = {proces: 0, czynnosc: 0, wp: 0, ns: 0, rc: 0, rc1: 0, rc2: 0, rc3: 0, rc4: 0, rc5: 0};
	for (var i in komorka) {
		komorka[i] = document.createElement("th");
		komorka[i].innerHTML = "<textarea></textarea>";
	}

	komorka.proces.colSpan = 7;
	komorka.proces.querySelector("textarea").value = "Proces";
	komorka.czynnosc.colSpan = 7;
	komorka.czynnosc.querySelector("textarea").className = "Czynnosc";
	komorka.czynnosc.querySelector("textarea").value = "Czynność";
	komorka.wp.rowSpan = 2;
	komorka.wp.querySelector("textarea").className = "h2 WP";
	komorka.wp.querySelector("textarea").value = "Wersja Papierowa";
	komorka.ns.rowSpan = 2;
	komorka.ns.querySelector("textarea").className = "h2 NS";
	komorka.ns.querySelector("textarea").value = "Nazwa" + String.fromCharCode(13, 10) + "Systemu"; // Tworzenie komórek do nagłówka
	komorka.rc.colSpan = 5;
	komorka.rc.querySelector("textarea").className = "h1_5";
	komorka.rc.querySelector("textarea").value = "Rodzaje czynności wykonywanych na danych";
	komorka.rc1.querySelector("textarea").value = "Wgląd";
	komorka.rc2.querySelector("textarea").value = "Wprowadzanie";
	komorka.rc3.querySelector("textarea").value = "Modyfikowanie";
	komorka.rc4.querySelector("textarea").value = "Udostępnianie";
	komorka.rc5.querySelector("textarea").value = "Ususwanie";
	komorka.rc1.querySelector("textarea").className = "RC";
	komorka.rc2.querySelector("textarea").className = "RC";
	komorka.rc3.querySelector("textarea").className = "RC";
	komorka.rc4.querySelector("textarea").className = "RC";
	komorka.rc5.querySelector("textarea").className = "RC";

	tbl.rows[0].appendChild(komorka.proces);
	tbl.rows[1].appendChild(komorka.czynnosc);
	tbl.rows[2].appendChild(komorka.wp);
	tbl.rows[2].appendChild(komorka.ns);
	tbl.rows[2].appendChild(komorka.rc);
	tbl.rows[3].appendChild(komorka.rc1);
	tbl.rows[3].appendChild(komorka.rc2); // Dodawanie nagłówka
	tbl.rows[3].appendChild(komorka.rc3);
	tbl.rows[3].appendChild(komorka.rc4);
	tbl.rows[3].appendChild(komorka.rc5);

	for (var i=4; i<tbl.rows.length; i++){

		if ((i-4) % 10 == 0){
			var cell = tbl.rows[i].insertCell();
			cell.innerHTML = '<textarea></textarea>';
			cell.rowSpan = 10;
			cell.querySelector("textarea").className = "h10";// Dodanie wersji papierowej
		}

		for (var j=2; j<8; j++){
			tbl.rows[i].insertCell().innerHTML = '<textarea></textarea>'; // Dodanie komórek na rodzaje czynności
		}
	}
}

function DodajStanowisko() {
	var querySelector = "#myTable tr:nth-child(" + (tbl.rows.length + 1).toString() + ") th textarea";

	var position = document.createElement("option");
	position.text = "Stanowisko";
	document.querySelector("select").add(position);

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
	
	document.querySelector(querySelector).addEventListener("change", StanowiskoChanged, false);
}

function KopiujStanowisko() {
	var stanowisko = prompt("Nazwa stanowiska do skopiowania");
	var wiersz = 0;

	if (stanowisko == null){ // Użytkownik w komunikacie kliknął anuluj
		return;
	}

	for (var i=4; i<tbl.rows.length; i += 10){
		if (tbl.rows[i].cells[0].querySelector("textarea").value == stanowisko){ // Szukanie stanowiska do skopiowania
			wiersz = i;
			break;
		}
	}

	if (wiersz == 0){
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

function UsuwanieCzynnosci(nrCzynnosci){
	var nrProcesu = 0;

	if (nrCzynnosci == -1){
		alert("Nie znaleziono czynnosci!");
		return;
	}

	for (var i=1; i<tbl.rows[0].cells.length; i++){
		nrProcesu += tbl.rows[0].cells[i].colSpan/7;
		if (nrProcesu >= nrCzynnosci + 1){
			if (tbl.rows[0].cells[i].colSpan == 7){ // Zmniejszenie Nazwy procesu
				tbl.rows[0].deleteCell(i);
			}
			else{
				tbl.rows[0].cells[i].colSpan -= 7;
			}
			break;
		}
	}

	tbl.rows[1].deleteCell(nrCzynnosci);
	for (var i = 0; i < 3; i++){
		tbl.rows[2].deleteCell(nrCzynnosci*3);
	}
	for (var i = 0; i < 5; i++){
		tbl.rows[3].deleteCell(nrCzynnosci*5);
	}
	for (var j = 0; j + 14 <= tbl.rows.length; j+=10){
		for (var i = 0; i < 7; i++){
			tbl.rows[j + 4].deleteCell(nrCzynnosci*7 + 1);
		}
		for (var k = 5; k < 14; k++){
			for (var i = 0; i < 6; i++){
				tbl.rows[j + k].deleteCell(nrCzynnosci*6);
			}
		}
	}
}

function UsunCzynnosc() {
	var czynnosc = prompt("Nazwa czynności do usunięcia:");
	var nrCzynnosci = -1;

	if (czynnosc == null){ // Użytkownik w komunikacie kliknął anuluj
		return;
	}

	for (var i=0; i<tbl.rows[1].cells.length; i++){
		if (tbl.rows[1].cells[i].querySelector("textarea").value == czynnosc){ // Szukanie czynności
			nrCzynnosci = i;
			break;
		}
	}

	UsuwanieCzynnosci(nrCzynnosci);
}

function UsunProces() {
	var proces = prompt("Nazwa procesu do usunięcia:");
	var nrProcesu = -1;
	var nrCzynnosci = 0;
	var liczbaCzynnosci = 0;

	if (proces == null){ // Użytkownik w komunikacie kliknął anuluj
		return;
	}

	for (var i=1; i<tbl.rows[0].cells.length; i++){
		if (tbl.rows[0].cells[i].querySelector("textarea").value == proces){ // Szukanie procesu
			nrProcesu = i;
			for (var j = i-1; j > 0; j--){
				nrCzynnosci += tbl.rows[0].cells[j].colSpan/7;
			}
			break;
		}
	}

	if (nrProcesu == -1){
		alert("Nie znaleziono procesu!");
		return;
	}

	liczbaCzynnosci = tbl.rows[0].cells[nrProcesu].colSpan/7;

	for (var i = 0; i < liczbaCzynnosci; i++){
		UsuwanieCzynnosci(nrCzynnosci);
	}	
}

function UsunStanowisko() {
	var stanowisko = prompt("Nazwa stanowiska do usunięcia:");
	var wiersz = 0;

	if (stanowisko == null){ // Użytkownik w komunikacie kliknął anuluj
		return;
	}

	for (var i=4; i<tbl.rows.length; i += 10){
		if (tbl.rows[i].cells[0].querySelector("textarea").value == stanowisko){ // Szukanie stanowiska do susunięcia
			wiersz = i;
			break;
		}
	}

	if (wiersz == 0){
		alert("Nie znaleziono stanowiska!");
		return;
	}

	for (var i = 0; i < 10; i++) {
		tbl.deleteRow(wiersz);
	}
	document.querySelector("select").remove((wiersz-4)/10);
}

document.querySelector("#openedMenu3 div:nth-child(1)").addEventListener("click", DodajCzynnosc, false); // Działa
document.querySelector("#openedMenu2 div:nth-child(1)").addEventListener("click", DodajProces, false); // Działa
document.querySelector("#openedMenu1 div:nth-child(1)").addEventListener("click", DodajStanowisko, false); // Działa

document.querySelector("#openedMenu1 div:nth-child(5)").addEventListener("click", KopiujStanowisko, false); // Działa

document.querySelector("#openedMenu3 div:nth-child(3)").addEventListener("click", UsunCzynnosc, false); // Działa
document.querySelector("#openedMenu2 div:nth-child(3)").addEventListener("click", UsunProces, false); // Działa
document.querySelector("#openedMenu1 div:nth-child(3)").addEventListener("click", UsunStanowisko, false); // Działa