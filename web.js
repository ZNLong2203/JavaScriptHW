document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var editIndex = document.getElementById("editIndex").value;
    var studentID = document.getElementById("studentID").value;
    var fullName = document.getElementById("fullName").value;
    var dob = document.getElementById("dob").value;
    var classValue = document.getElementById("class").value;
    var gpa = document.getElementById("gpa").value;

    if (editIndex == "-1") {
        var newRow = document.getElementById("studentTableBody").insertRow();
        newRow.innerHTML = "<td>" + studentID + "</td><td>" + fullName + "</td><td>" + dob + "</td><td>" + classValue + "</td><td>" + gpa + "</td><td><input type='button' value='Chỉnh sửa' onclick='editRow(this)'></td>";
    } else {
        var table = document.getElementById("studentTable");
        var row = table.rows[parseInt(editIndex) + 1];
        row.cells[0].innerHTML = studentID;
        row.cells[1].innerHTML = fullName;
        row.cells[2].innerHTML = dob;
        row.cells[3].innerHTML = classValue;
        row.cells[4].innerHTML = gpa;
        row.cells[5].innerHTML = "<input type='button' value='Chỉnh sửa' onclick='editRow(this)'>";
        document.getElementById("editIndex").value = "-1";
    }
    
    document.getElementById("studentForm").reset();
});

function editRow(btn) {
    var row = btn.parentNode.parentNode;
    var cells = row.cells;
    document.getElementById("studentID").value = cells[0].innerHTML;
    document.getElementById("fullName").value = cells[1].innerHTML;
    document.getElementById("dob").value = cells[2].innerHTML;
    document.getElementById("class").value = cells[3].innerHTML;
    document.getElementById("gpa").value = cells[4].innerHTML;
    document.getElementById("editIndex").value = row.rowIndex - 1;
}
