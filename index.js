document.addEventListener('DOMContentLoaded', async () => {
	const studentDiv = document.querySelector('#students');
	// studentDiv.innerHTML = 'Levy';
	// stduentDiv.textContent = 'Levy';

	// const fetchStudents = () => {
	// 	fetch('http://localhost:3000/students')
	// 		.then((response) => response.json())
	// 		.then((students) =>
	// 			{
	// 				for (let student of students) {
	// 					stdudentName = document.createElement('p');

	// 					stdudentName.innerHTML = student.firstName;

	// 					studentDiv.append(stdudentName);
	// 				}
	// 			}
	// 		);
	// };

	// fetchStudents();

	const asyncGetStudents = async () => {
		const res = await fetch('http://localhost:3000/students');
		const students = await res.json();
		return students;
	};

	const data = await asyncGetStudents();

	data.forEach(student => {
    studentParagraph = document.createElement('p')
    studentParagraph.innerHTML = student.firstName
    studentDiv.append(studentParagraph)
  })
});

// syncronous

// asyncronous

// deb.json link
// https://www.npmjs.com/package/json-server