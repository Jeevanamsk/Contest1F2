let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  function PrintDeveloperswithMap() {
    const professions = arr.map(employee => {
        if (employee.profession === 'developer') {
            return employee.profession;
        }
    });
    console.log(professions);
  }
  
  function PrintDeveloperbyForEach(){
    arr.forEach(employee => {
        if (employee.profession === 'developer') {
          console.log(employee);
        }
        
      });
    
  }
  
  function addData() {
    const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    const updatedEmployees = arr.filter(employee => employee.profession !== 'admin');
    console.log(updatedEmployees);
  }
  
  function concatenateArray() {
    const newData = [{id:5,name:"Jeevana",age:"20",profession:"designer"},
                    {id:5,name:"Meghana",age:"22",profession:"developer"},
                    {id:5,name:"karthik",age:"24",profession:"tester"}];
    const combinedData = arr.concat(newData);
    console.log(combinedData);
  }
  
