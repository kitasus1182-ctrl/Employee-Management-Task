// Task 7
// Add a new employee.
// Task 8
// Update an employee’s salary.
// Task 9
// Remove an employee.

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

//add a new employee
const newEmployee = {
    id: 1,
    name: "lalo",
    department: "development",
    salary: 25000,
}

employees.push(newEmployee);

console.log(employees);

//remove a new employee
employees.pop(newEmployee)

console.log(employees)

//update employee
const targerId = 1;

const updateEmployee = employees.map(emp => {
  if (emp.id === targetId) {
    return { ...emp, department: 'Development' };
  }

})