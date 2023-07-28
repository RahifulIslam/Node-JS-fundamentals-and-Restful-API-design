const Student = require('../model/studentModel')
console.log("Student:", Student)

module.exports.createStudent = async (req, res) => {
    const data = req.body;
    console.log("Data are:", data)
    const student = new Student({
        student_id: data.student_id,
        name: data.name,
        email: data.email,
        address: data.address
    });

    try{
    const newStudent = await student.save();
    res.status(201).send({
        "message": "Student Created Successfully",
        student: student
    });
    } catch(err){
        res.status(404).send("Something went wrong");
    }
}

module.exports.updateStudent = async (req, res) => {
    const studentId = req.params.id;
    const data = req.body;
    try{
        const updateStudent = await Student.updateOne({studentId}, {
            name: data.name,
            email: data.email,
            address: data.address,
        }, { new: true, });
        
        return res.status(200).send({
            "message": "Student updated successfully",
            student: data
        })
    } catch(err){
     res.status(404).send({
        "message": "Something went wrong",
        error: err.message
    });
    }
}

module.exports.getStudent = async (req, res) => {
    const student_name = req.body.name;
    const limit = req.body.limit;
    const offset = req.body.offset;
    try {
        const data = await Student.find({})
        // name: { $regex: 'student_name' }
        .sort({ student_name: 1 })
        .skip(offset)
        .limit(limit)
        .exec()
    // console.log("Student data:", data)
    res.status(200).json({
        "message": "Student showed successfully",
        data: data
    });
    } catch(err) {
        res.status(404).send("Something went wrong");
    }
    
}

module.exports.deleteStudent = async (req, res) => {
    const student_id = req.params.id;
    console.log("Id:", student_id)
    try{
        const deleteStudent = await Student.deleteOne({student_id: student_id});
    res.status(200).send({
        "message": "User deleted successfully"
    })
    } catch(err){
        res.status(404).send("Something went wrong");
    }
    
}



