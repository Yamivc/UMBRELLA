function ValidateForm() {
    let email = document.getElementById('InputEmail').value;
    let name = document.getElementById('InputName').value;
    let suggestions = document.getElementById('InputText').value;

    if (email == "") {
        alert('Please enter your email');
        return false;
    } else if (!email.includes('@')) {
        alert('Please enter a valid email');
        return false;
    }

    if (name == "") {
        alert('Please enter your name');
        return false;
    }

    if (suggestions == "") {
        alert('Please enter your suggestion');
        return false;
    }

    return true;
}

function ReadData() {
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    var html = "";

    listPeople.forEach(function (element, index) {
        html += "<tr>"
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.suggestions + "</td>";
        html += '<td><button class="btn btn-danger" onclick="deleteData(' + index + ')">Delete Data</button><button class="btn btn-warning" onclick="editData(' + index + ')">Edit Data</button></td>';
        html += "</tr>"
    });

    document.querySelector("#tableData").innerHTML = html;
}

document.onload = ReadData();

function AddData() {
    if (ValidateForm() == true) {
        let email = document.getElementById("InputEmail").value;
        let name = document.getElementById("InputName").value;
        let suggestions = document.getElementById("InputText").value;

        var listPeople;

        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }

        listPeople.push({
            email: email,
            name: name,
            suggestions: suggestions
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData();

        document.getElementById('InputEmail').value = "";
        document.getElementById('InputName').value = "";
        document.getElementById('InputText').value = "";
    }
}

function deleteData(index) {
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    ReadData();
}

function editData(index) {
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';

    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    document.getElementById('InputEmail').value = listPeople[index].email;
    document.getElementById('InputName').value = listPeople[index].name;
    document.getElementById('InputText').value = listPeople[index].suggestions;

    document.querySelector('#btnUpdate').onclick = function () {
        if (ValidateForm() == true) {
            listPeople[index].email = document.getElementById('InputEmail').value;
            listPeople[index].name = document.getElementById('InputName').value;
            listPeople[index].suggestions = document.getElementById('InputText').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            ReadData();

            document.getElementById('InputEmail').value = "";
            document.getElementById('InputName').value = "";
            document.getElementById('InputText').value = "";

            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnUpdate').style.display = 'none';
        }
    }
}
