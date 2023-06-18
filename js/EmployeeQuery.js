window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
      if (name.value.length == 0) {
        nameError.textContent = "";
        return;
      }
      try {
        (new EmployeePayrollData()).name = name.value;
        nameError.textContent = "";
      } catch (e) {
        nameError.textContent = e;
      }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });
});

//UC3:On Save Create Emp Payroll Object
const save = () => {
  try{
      let EmployeePayrollData=createEmployeePayroll();
      // createAndUpdateStorage(EmployeePayrollData);
  }catch (e) {
      return;
      }
  }
  const createEmployeePayroll= () => {
      let employeePayrollData= new employeePayrollData();
      try{
          employeePayrollData.name = getInputValueById('#name');
      } catch (e) {
          setTextValue('.text-error',e);
          throw e;
      }
      employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
      employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
      employeePayrollData.department=getSelectedValues('[name=department]');
      employeePayrollData.salary=getInputValueById('#salary');
      employeePayrollData.note=getInputValueById('#notes');
      let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
                  getInputValueById('#year');
      employeePayrollData.date=Date.parse(date);  
      alert(employeePayrollData.toString());
      return employeePayrollData;
  }
  
  const getSelectedValues = (propertyValue) => {
      let allItems = document.querySelectorAll(propertyValue);
      let selItems = [];
      allItems.forEach(item => { 
          if(item.checked) selItems.push(item.value);
      });
      return selItems;
  }
  /*
  * Query Function is newer feature
  * The Query selector method can be used when selecting by element name, nesting, or class name.
  * Quer selector lets you find elements with rules that cant be expressed with getElementById
  */
  const getInputValueById= (id) => {
      let value = document.querySelector(id).value;
      return value;
  }
  /*
  * GetElementById is better supported than querySelector in older versions of the browsers. 
  * The thing with getElementById is that it only allows to select an element by its id.
  */
  const getInputElementValue = (id) => {
      let value = document.getElementById(id).value;
      return value;
  }

  //UC4: Saving Employee Payroll To Local Storage
  const save1 = () => {
    try{
        let EmployeePayrollData=createEmployeePayroll();
         createAndUpdateStorage(EmployeePayrollData);
    }catch (e) {
        return;
        }
    }

    function createAndUpdateStorage (employeePayrollData) {

      let employeePayrollList = JSON.parse(localStorage.getItem("Employee Payroll List"));
      if(employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
      }else {
        employeePayrollList = [employeePayrollData]
      }
      alert(employeePayrollList.toString());
      localStorage.setItem("Employee Payroll List", JSON.stringify(employeePayrollList))
    }

    //UC5:
    const resetForm = () => {
      setValue('#name',''); 
      unsetSelectedValues('[name=profile]'); 
      unsetSelectedValues('[name=gender]'); 
      unsetSelectedValues('[name=department]'); 
      setValue('#salary',''); 
      setValue('#notes',''); 
      setValue('#day','1'); 
      setValue( '#month', 'January'); 
      setValue('#year', '2020');}
  
  const unsetSelectedValues = (propertyValue) => {
      let allItems = document.querySelectorall(propertyValue); 
      allItems.forEach(item => {
      item. checked = false; 
      });
  }
  const setTextValue = (id, value) => {
      const element = document.querySelector(id); 
      element. textContent = value;
  }
  const setValue = (id, value) => {
      const element = document.querySelector(id);
      element.value = value;
  }




  
  