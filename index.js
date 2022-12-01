document.addEventListener('DOMContentLoaded', () => {
	const studentDiv = document.querySelector('#students');
	// studentDiv.innerHTML = 'Levy';
	// stduentDiv.textContent = 'Levy';

	const fetchStudents = () => {
		fetch('http://localhost:3000/students')
			.then((response) => response.json())
			.then((students) =>
				// students.forEach((item) => (studentDiv.innerHTML = item.firstName))
				{
					for (let student of students) {
						stdudentName = document.createElement('p');

						stdudentName.innerHTML = student.firstName;

						studentDiv.append(stdudentName);
					}
				}
			);
	};

	fetchStudents();
});
