"use strict"

let up = "&#9650";
let down = "&#9660";


function sort(numbCol, button) {
	let tbody = document.getElementsByTagName('tbody')[0];
	let rows = [];

	console.log(numbCol);

	for (let i = tbody.children.length - 1; i >= 0; i--) {
		let child = tbody.removeChild(tbody.children[i]);
		rows.push(child);
	}

	if (numbCol < 3) {
		rows.sort(function (a, b) {
			console.log(a.innerHTML);
			console.log(b.innerHTML);
			a = a.children[numbCol];
			b = b.children[numbCol];
			a = a.innerHTML;
			b = b.innerHTML;
	    	return a.localeCompare(b);
		})
	}

	for (var i = 0; i < rows.length; i++) {
		tbody.appendChild(rows[i]);
	}
}


/*&#9650

&#9660*/

/*list.sort(function (a, b) {
    return ('' + a.attr).localeCompare(b.attr);
})*/