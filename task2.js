//employee management program
//task 2 find an employee by id
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
    const searchId = Number(inpVal?.value);

    //find emp
    const employee = employees.find(emp => emp.id === searchId);

    resultCont.textContent = `id: ${employee.name}`;
    });
