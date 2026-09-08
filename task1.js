// Employee management program
//Task 1 list all employees
let listItems = document.querySelector(".list")
let employees = [
    {
        id: 1,
        name :   "meet",
        department :     "develpment",
        salary :     25000
    },
     {
        id: 2,
        name :   "ramesh",
        department :     "QA",
        salary :     15000
    },
     {
        id: 3,
        name :   "suresh",
        department :     "develpment",
        salary :     25000
    },
]

listItems.innerHTML = employees.map(employee => {
 return `<li>${employee.id}
 ${employee.name}
 ${employee.department}
 ${employee.salary}
 </li>`;
})