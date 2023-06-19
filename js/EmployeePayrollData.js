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
    set startDate(startDate) {
        let now = new Date();
        if (startDate > now) throw 'Start date is a Future date!';
        var diff = Math.abs(now.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30)
            throw 'Start date is beyond 30 Days';
        this._startDate = startDate;    
    }
    //method
    toString()
    {
        const format = {year:'numeric', month:'long', day:'numeric'};
        const date = this.startDate === undefined ? "undefined" :
                     this.startDate.toLocaleDateString("en-US",format);
        return "Id = "+this.id+", Name = "+this.name+", Gender = "+this.gender+", ProfilePic = "+this.profilePic+", Department = "+this.department+", Salary = "+this.salary+
                ", StartDate = "+date+", Note = "+this.note;
    }

}