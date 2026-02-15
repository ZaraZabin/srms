let students = JSON.parse(localStorage.getItem("students")) || [];

function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let studentClass = document.getElementById("class").value;
    let section = document.getElementById("section").value;

    if (roll === "" || name === "" || studentClass === "" || section === "") {
        alert("Please fill all fields!");
        return;
    }

    let student = { roll, name, studentClass, section };
    students.push(student);
    saveToLocalStorage();
    displayStudents();

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("class").value = "";
    document.getElementById("section").value = "";
}

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>${student.studentClass}</td>
                <td>${student.section}</td>
                <td><button onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    saveToLocalStorage();
    displayStudents();
}

displayStudents();
