function onLoad() {
	setMinDate()
}


function setMinDate() {
	let inputDate = document.getElementById('dateInput')
	let d = new Date()
	let datestring = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)
	inputDate.min = datestring
	inputDate.value = d
}

function onClick(opt) {

	if(opt === 'event') {
		alert("You created successfully event!");
	} else if (opt === 'update') {
		alert("You updated your profile successfully!");
	}
}