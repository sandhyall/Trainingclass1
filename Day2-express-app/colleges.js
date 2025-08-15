const express = require('express');
const router = express.Router();

//mysql connection
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sandhya2060",
    database:"sandhya",
    port:3306
});  
connection.connect((err)=>{
    if(err){
        console.log("error connecting to mysql", err);
    }else{
        console.log("connected to mysql");
    }
});


router.get("/", (req, res) => {
    connection.query("SELECT *FROM colleges",(err,results)=>{
    if(err){
        console.log("error quering colleges", err);
    }else{
        console.log("🚀colleges data",results);
    }
     res.send(results);
});
// Route to get a college by name



    
    

});

router.get("/search/:name", async (req, res) => {  
    const collegesName = req.params.name;
    const result = await new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM colleges where name = "${collegesName}"`,
            (err, results) => {
                if (err) reject(err);
                resolve(results);
            }
        );
    });

    res.send(result);   
});

router.post("/create", async (req, res) => {
    console.log("")
    const collegeName = req.body.name;
    const collegeAddress = req.body.address;

    if (!collegeName || !collegeAddress) {
        return res.status(400).send({ data: 'Name and address are required' });
    }

    const result = await new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO colleges (name, address) VALUES ('${collegeName}', '${collegeAddress}')`,
            (err, data) => {
                if (err) {
                    console.log('[❌] Error creating college:', err);
                    reject({ message: "Something went wrong", error: err.message });
                } else {
                    console.log('[✔️] College created successfully:', data);
                    resolve(`${data.affectedRows} row(s) created with id ${data.insertId}`);
                }
            }
        );
    });

    res.send({ message: result });
});


// Update college data
router.put('/update/:id', async (req, res) => {
    const collegeId = req.params.id;
    const collegeName = req.body.name;
    const collegeAddress = req.body.address;

    // Validation before update
    if (!collegeName || !collegeAddress) {
        return res.status(400).send({ data: "Name or address are required" });
    }

    const result = await new Promise((resolve, reject) => {
        connection.query(
            'UPDATE Colleges SET name = ?, address = ? WHERE id = ?',
            [collegeName, collegeAddress, collegeId],
            (err, results) => {
                if (err) {
                    console.error('(❌) Error executing query to colleges:', err);
                    reject(err);
                } else {
                    console.log('(✅) College updated successfully:', results);
                    resolve(results);
                }
            }
        );
    });

    res.status(200).send({ data: result });
});



//delete college


router.delete('/delete/:id', async (req, res) => {
    const collegeId = req.params.id;
    // const collegeName = req.body.name;
    // const collegeAddress = req.body.address;

    // Validation before delete
    if (!collegeId) {
        return res.status(400).send({ data: "college id is required" });
    }

    const result = await new Promise((resolve, reject) => {
        connection.query(
            `DELETE FROM Colleges WHERE id = ${collegeId}`,
            
            (err, results) => {
                if (err) {
                    console.error('(❌) Error executing query to colleges:', err);
                    reject(err);
                } else {
                    console.log('(✅) College delete successfully:', results);
                    resolve(results);
                }
            }
        );
    });

    res.status(200).send({ data: result });
});







module.exports = router;