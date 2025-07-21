class Student{
    stdId
    stdName
    stdGrade
    stdMark

    constructor(id,name,grade,mark){
        this.stdId = id
        this.stdName = name
        this.stdGrade = grade
        this.stdMark = mark
    }
    display(txt){
        console.log(txt);
        console.log(`syudent name is ${this.stdName} and scroe ${this.stdMark} mark` );
        
    }
}
const std1 = new Student(1,'anu','VI',200)
std1.display('score') 

