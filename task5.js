//employee management program
//task 10 search an employee by 
const inpVal = document.querySelector("#inpVal");
const search = document.querySelector("#btn");
const resultCont = document.querySelector("#result");

const employees = [
  {
    id: 1,
    name: "meet",
    department: "develpment",
    salary: 25000,
  },
  {
    id: 2,
    name: "ramesh",
    department: "QA",
    salary: 15000,
  },
  {
    id: 3,
    name: "suresh",
    department: "develpment",
    salary: 25000,
  },
];

    search.addEventListener('click', () => {
    const searchName = inpVal.value;

    //find emp
    const employee = employees.find(emp => emp.name === searchName);

    resultCont.textContent = `id: ${employee.name}`;
    });
