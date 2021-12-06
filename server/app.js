const express = require('express');
// const path = require('path');
const { body } = require('express-validator');
const bodeParser = require('body-parser')
const UserControler = require('./controlers/binotel-controler')
const { Binotel2 } = require('./models')

var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host: 'drovakie.mysql.tools',
    user: 'drovakie_test1',
    password: '3h&6Gpc4~Z',
    database: 'drovakie_test1'
});

const app = express();

//из документации ректа
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

//Распарсивает json значения 
app.use(bodeParser.json());


//получаем весь список клиентов из базы данных
app.get('/hello', (req, res) => {
    Binotel2.findAll()
        .then((data) => {
            res.json(data);
        });
})



//пост запрос - в котором постим в базу данных значения о клиенте
app.post('/create',
    body('name').trim(),
    body('mobile').isLength({ min: 7 }),
    UserControler.create)

app.put('/update', (req, res) => {
    // res.send('Got a PUT request at /user');
    const id = req.body.id;
    const ColorSmile = req.body.ColorSmile;
    connection.query(
        "UPDATE `Binotel2s` SET ColorSmile = ? WHERE id = ?", [ColorSmile, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});


// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     });
//   });

app.listen(4000, () => {
    console.log('запустился сервер на 4000 порту')
})