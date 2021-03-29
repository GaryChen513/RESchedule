const employeeLogout = async () => {
	const response = await fetch('/api/employee/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		document.location.replace('/');
	} else {
		alert(response.statusText);
	}
};

document.querySelector('#logout').addEventListener('click', employeeLogout);
