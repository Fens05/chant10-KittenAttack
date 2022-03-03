const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    expect(employee.name).toB('Fens05');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = 

    expect(employee.getName()).toEqual(expect.stringContaining());
});

test('gets employee id', () => {
    

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets the employee role', () => {
   const emplyoee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});