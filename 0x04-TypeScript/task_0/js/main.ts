interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Chris',
    lastName: 'Effah',
    age: 25,
    location: 'Gbawe'
};

const student2: Student = {
    firstName: 'Esther',
    lastName: 'Serwaa',
    age: 18,
    location: 'Weija'
};

const studentsList: Student[] = [student1, student2];
function renderTable() {
    const table = document.createElement('table');
    studentsList.forEach(student => {
	const row = table.insertRow();
	const cell1 = row.insertCell();
	const cell2 = row.insertCell();
	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
});

document.body.appendChild(table);
}

renderTable(studentsList);
