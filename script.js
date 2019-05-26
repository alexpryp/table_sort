"use strict"

let theadTr = document.querySelector('#table-wrapper thead tr');


function sort(event) {
	let target = event.target;
	let listHeadTh = theadTr.getElementsByTagName('th');
	let numOfChildTh = 0;
	let tbody = document.querySelector('#table-wrapper tbody');
	let arrTr = [].slice.call(tbody.querySelectorAll('tr'));
	let tHspan;

	if (target.tagName == "SPAN") {
		target = target.closest("th");
	};

	for (let i = 0; i < listHeadTh.length; i++) {
		if (listHeadTh[i] == target) {
			numOfChildTh = i;
		}
	}

	tHspan = listHeadTh[numOfChildTh].children[0];

	for(let k = 0; k < listHeadTh.length; k++) {
		if (k == numOfChildTh) {
			continue;
		}
		listHeadTh[k].querySelector('span').innerHTML = "";
	}

	if (tHspan.innerHTML == "" || tHspan.innerHTML == "▼") {
		tHspan.innerHTML = "&#9650"

		if (target.dataset.type == "number") {
			arrTr.sort(function(a, b) {
				return a.children[numOfChildTh].innerHTML - b.children[numOfChildTh].innerHTML;
			});
		} else if (target.dataset.type == "string") {
			arrTr.sort(function(a, b) {
				return a.children[numOfChildTh].innerHTML.localeCompare(b.children[numOfChildTh].innerHTML);
			});
		}
	} else if (tHspan.innerHTML == "▲") {
		tHspan.innerHTML = "&#9660";

		if (target.dataset.type == "number") {
			arrTr.sort(function(a, b) {
				return b.children[numOfChildTh].innerHTML - a.children[numOfChildTh].innerHTML;
			});
		} else if (target.dataset.type == "string") {
			arrTr.sort(function(a, b) {
				return b.children[numOfChildTh].innerHTML.localeCompare(a.children[numOfChildTh].innerHTML);
			});
		}
	}

	for (let j = 0; j < arrTr.length; j++) {
		tbody.appendChild(arrTr[j]);
	}
}


theadTr.addEventListener("click", sort);
