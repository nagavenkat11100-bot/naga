function showDetails() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var dept = document.getElementById("dept").value;
    var year = document.getElementById("year").value;

    document.getElementById("output").innerHTML =
        "Student Name: " + name + "<br>" +
        "Roll Number: " + roll + "<br>" +
        "Department: " + dept + "<br>" +
        "Year: " + year;
}
