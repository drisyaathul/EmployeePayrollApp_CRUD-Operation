let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

window.addEventListener('DOMContentLoaded', () => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
        "<th>Department</th><th>Salary</th><th>Start Date</th>" +
        "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    //let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img class="profile" alt="" src="${empPayrollData._profilePic}">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                ${getDeptHtml(empPayrollData._department)}
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._start_date}</td>
            <td>
        <img src="./assets/profile-images/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="./assets/profile-images/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
        </tr>`;
    }
        document.querySelector("#display").innerHTML = innerHtml;
    
};
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Drisya',
            _gender: 'Female',
            _department: [
                'Engineering'
            ],
            _salary: '250000',
            _start_date: '20 Oct 2022',
            _note: '',
            _profilePic: './assets/profile-images/img4.png'
        },
        {
            _name: 'Athul',
            _gender: 'male',
            _department: [
                'Engineering', 'HR'
            ],
            _salary: '500000',
            _start_date: '10 Sep 2023',
            _note: '',
            _profilePic: './assets/profile-images/img1.png'
        },
        {
            _name: 'Vishnu',
            _gender: 'male',
            _department: [
                 'HR'
            ],
            _salary: '450000',
            _start_date: '10 Nov 2022',
            _note: '',
            _profilePic: './assets/profile-images/img3.png'
        }
    ]
    return empPayrollListLocal;
}
//UC1:
const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node._id);
    if(!empPayrollData) return;
    const index = empPayrollList
                .map(empData => empData._id)
                .indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}