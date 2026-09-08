// Employee management program
//task 3 display only employees from the devlopement department
//task 4 find the employee with highest salary
//task 5 calculate the average salary
//task 6 sort employees by salary

let employees = [
  {
    id: 1,
    name: "meet",
    department: "development",
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
    department: "development",
    salary: 20000,
  },
];

//for displaying only deverlopment department
const checkDepartment = employees.filter(emp => emp.department === "development");

console.log(checkDepartment);

//for finding the employee with highest salary
const Salary = Math.max(...employees.map(emp => emp.salary));

const highSalary = employees.filter(emp => emp.salary === Salary)
console.log(highSalary);

//calculate average salary
let sum = 0;
for(let employee of employees){
    sum += employee.salary;
}

const avgSlary = sum/employees.length;

console.log(avgSlary);

//sort employess by salary
sortSlary = employees.sort(emp => emp.salary)

console.log(sortSlary);