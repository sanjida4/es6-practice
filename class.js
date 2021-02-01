class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "A. K High School"
    }
}

const student1 = new Student();
student1.id = 12;
student1.name = "shuvo";
const student2 = new Student(22, "promy");
const student3 = new Student(15, "mahi");
console.log(student1);