class EmployeePayrollData{

//getter and setter method
    get id(){ 
        return this._id;
    }
    set id(id){
        this._id=id;
    }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}{a-z}{2,}$')
        if(nameRegex.test(name)){
            this._name=name;
        }
        else{
            throw 'name is incorrect! Please check your name';
        }
    }

    get profilepic(){
        return this._profilepic;
    }
    set profilepic(profilepic){
        this._profilepic=profilepic;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender=gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department=department;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }

    get note(){
        return this._note;
    }
    set note(note){
        this._note=note;
    }

    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
    // Check if the input is a valid date
    const inputDate = new Date(startDate);
    if (isNaN(inputDate.getTime())) {
        throw new Error("Invalid date format. Please use yyyy-mm-dd format.");
    }
        // Check if the date is not in the future
    const currentDate = new Date();
    if (inputDate > currentDate) {
        throw new Error("Start date cannot be in the future.");
    }

    // Check if the date is within 30 days of joining
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(currentDate.getDate() - 30);
    if (inputDate < this._joinDate || inputDate > currentDate) {
        throw new Error("Start date should be within 30 days of joining.");
    }
    // Set the start date if all validation checks pass
    this._startDate = inputDate;
    }

    //method
    toString(){
    const options ={year :'numeric',month:'long',day:'numeric'}
    const empDate= !this.startDate ? "undefined": 
                    this.startDate.toLocaleDateString("en-US",options);
    return "id=" +this.id+"name= "+this.name+", gender="+this.gender + ", profilePic=" +this.profilepic + 
    ", department="+ this.department + ", salary="+this.salary+ ", startDate=" +empDate+", note="+this.note;
}
}