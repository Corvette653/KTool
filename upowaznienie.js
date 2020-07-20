function formatting(target) {
  return target < 10 ? '0' + target : target;
}

date = new Date();
var y = date.getFullYear();
var m = date.getMonth() + 1;
var d = date.getDate();
m = formatting(m);
d = formatting(d);

document.querySelector("#upowaznienie div:nth-child(3) input:nth-child(3)").value = y + "-" + m + "-" + d;
document.querySelector("#upowaznienie div:nth-child(7) input:nth-child(3)").value = y + "-" + m + "-" + d;

function StanowiskoChanged(){
	document.querySelector("select")[(this.parentElement.parentElement.rowIndex-4)/10].text = this.value;
}

document.querySelector("#myTable tr:nth-child(5) th textarea").addEventListener("change", StanowiskoChanged, false);