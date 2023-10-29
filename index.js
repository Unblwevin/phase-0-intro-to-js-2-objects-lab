const employee = {
    name: "Sam",
    streetAddress: '11 Broadway',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function updateEmployeeWithKeyAndValue2(employee, key, value) {
    const clone = { ...employee };
  
    clone[key] = value;
  
    return clone;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const clone = { ...employee };
  
    delete clone[key];
  
    return clone;
  }

