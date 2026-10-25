const students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 32 },
    { name: "Amit", marks: 67 },
    { name: "Sneha", marks: 90 },
    { name: "Kiran", marks: 28 }
    ];

    function accept(studentArr){
        const newStudents=studentArr.map(student =>{
            let newMarks=student.marks+5;
            if(newMarks>100){
                newMarks=100;
            }
            return {
                name: student.name,
                marks:newMarks
            };
        });
        const passStudent=newStudents.filter(student=>student.marks>=40);
        const totalpassMarks=passStudent.reduce((sum,student)=>sum+student.marks,0);
        const avgPassMarks=passStudent.length>0?totalpassMarks/passStudent.length:0;
    
        passStudent.forEach(student=>{
            console.log(`Pass Student Name=${student.name}, Marks=${student.marks}`);
        });
    }
    (function(){
        accept(students);
    })();
    