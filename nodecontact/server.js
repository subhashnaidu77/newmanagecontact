const express = require('express');
const mysql =  require('mysql2/promise');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use((bodyparser.json()));
app.use(cors());

const db = mysql.createConnection({
    host: 'mysql-5e7911a-subhashnaidu77-94b9.l.aivencloud.com',
    user: 'avnadmin',
    database: 'defaultdb',
    port: '12394',
 password: 'AVNS_cutfv794yVtT3BNeUUj'
})
app.get('/sample',(req,res)=>{
    res.json({"sql connected":"hello"});
})

app.post('/api/contacts', async (req, res) => {
    try {
      const connection = await mysql.createConnection({
        host: 'mysql-5e7911a-subhashnaidu77-94b9.l.aivencloud.com',
        user: 'avnadmin',
        database: 'defaultdb',
        port: '12394',
        password: 'AVNS_cutfv794yVtT3BNeUUj'
      });
  
      const { name, email, phone } = req.body;
      const [result] = await connection.query(
        "INSERT INTO `Contact Management` (name, email, phone) VALUES (?, ?, ?)",
        [name, email, phone]
      );
  
      console.log(result);
      connection.end();
      res.status(201).json({ message: 'Contact added successfully', contactId: result.insertId });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
// db.query(query,[name,email,phone],(err,result)=>{
//     if(err){
//         res.status(500).send(err);
//     }
//     else{
//         res.status(201).send({ id: result.insertId, name, email, phone });
//     }
// })
app.get('/api/contacts', async (req, res) => {
    try {
      const connection = await mysql.createConnection({
        host: 'mysql-5e7911a-subhashnaidu77-94b9.l.aivencloud.com',
        user: 'avnadmin',
        database: 'defaultdb',
        port: '12394',
       password: 'AVNS_cutfv794yVtT3BNeUUj'
      });
  
      const [results] = await connection.query("SELECT * FROM `Contact Management`");
    console.log(results)
      connection.end();
      res.status(200).json(results);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.get('/api/contacts/search', async (req, res) => {
    try {
      const connection = await mysql.createConnection({
        host: 'mysql-5e7911a-subhashnaidu77-94b9.l.aivencloud.com',
        user: 'avnadmin',
        database: 'defaultdb',
        port: '12394',
   password: 'AVNS_cutfv794yVtT3BNeUUj'
      });
  
      const { query } = req.query;
      const searchQuery = "SELECT * FROM `Contact Management` WHERE name LIKE ? OR email LIKE ?";
      const [results] = await connection.query(searchQuery, [`%${query}%`, `%${query}%`]);
      connection.end();
      res.status(200).json(results);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: ' server error' });
    }
  });
  
    // //    db.query(searchQuery, [`%${query}%`, `%${query}%`], (err, results) => {
    //     if (err) {
    //         res.status(500).send(err);
    //       } else {
    //         res.status(200).send(results);
    //       }
    //     });
    //http://localhost:8080/api/contacts
app.listen(8080,()=>{
    console.log("server started..");

})
