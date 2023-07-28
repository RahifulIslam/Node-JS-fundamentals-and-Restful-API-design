const db = require('../server')

module.exports.createStudent = async(req, res) => {
    const student = req.body;
    try{
    const insertQuery = `INSERT INTO student (student_id, name, email, address) VALUES (?, ?, ?, ?)`;
    db.query(insertQuery,
        [student.student_id, student.name, student.email, student.address],
        (err, result) => {
            if (err) throw err;
           return  res.status(201).send({
                "message": "Studet created successfully",
                "result": req.body
            })
        });
    } catch(err){
        return res.status(400).send({
            "message": "Something went wrong",
            error: err.message
        })
    }
}

module.exports.updateStudent = (req, res) => {
    const studentId = req.params.id;
    const studentData = req.body;

    try{
    const updateQuery = `UPDATE student SET name = ?, email= ?, address= ? WHERE student_id= ?`;
    db.query(updateQuery,
        [studentData.name, studentData.email, studentData.address, studentId],
        (err, result) => {
            if (err) throw err;
            res.status(200).send({
                "message": "Student updated successfully",
                "result": req.body
            });
        });

    } catch(err){
        return res.status(400).send({
            "message": "Something went wrong",
            error: err.message
        })
    }
}

module.exports.getStudent = (req, res) => {
    const student_name = req.body.name;
    const limit = req.body.limit;
    const offset = req.body.offset;

    try{
    const selectQuery = ` SELECT * FROM student WHERE name LIKE ? ORDER BY student_id ASC limit ? offset ?`;
    db.query(selectQuery, [`%${student_name}%`, limit, offset], (err, result) => {
        if (err) {
            throw err;
        }
        console.log("Result:", result)
        res.send(result)
    });

}catch(err){
    return res.status(400).send({
        "message": "Something went wrong",
        error: err.message
    })
}
}

module.exports.deleteStudent = (req, res) => {
    const student_id = req.params.id;

    try{
    const deleteQuery = `DELETE FROM student WHERE student_id= ?`;
    db.query(deleteQuery, student_id, (err, result) => {
        if (err) throw err;
        res.status(200).send({
            "message": "Student deleted successfully",
        });
    });

} catch(err){
    return res.status(400).send({
        "message": "Something went wrong",
        error: err.message
    })
}
}



