const express = require('express');
const path = require('path');
const { body } = require('express-validator');
const bodeParser = require('body-parser')
const UserControler = require('./controlers/binotel-controler')
const { Binotel2 } = require('./models')
    // const cors = require('cors')

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
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Распарсивает json значения 
app.use(bodeParser.json());
app.use(bodeParser.urlencoded({ extended: true }));
// app.use(
//     cors({
//         credentials: true,
//         origin: ["http://localhost:3000"],
//         optionsSuccessStatus: 200
//     })
// );


//------------------------------ получаем весь список клиентов из базы данных ---------------------------------------//
app.get('/hello', (req, res) => {
    Binotel2.findAll()
        .then((data) => {
            res.json(data);
        })

})

// --------------------------- пост запрос - в котором постим в базу данных значения о клиенте -----------------------------//
app.post('/create',
    body('name').trim(),
    body('mobile').isLength({ min: 7 }),
    UserControler.create)

// --------------------------- пут запрос - в котором постим в базу данных изменение ColorSmile ? true:false -----------------------------//
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

// --------------------------- удаляем из базы данных значения при нажатии на кнопку удалить -----------------------------//
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM `Binotel2s` WHERE id = ?", [id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

// ------------------------------------- МЕНЯЕМ ЗНАЧЕНИЕ ord если были заказы ----------------------------------//
app.put('/changeOrd', (req, res) => {
    connection.query(
        "UPDATE Binotel2s SET ord = 1 WHERE mobile!='0' AND (mobile in (SELECT DISTINCT(num) FROM DB_from_1c));",
        (err, result) => {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result);
            }
        }
    );
});

app.listen(4000, () => {
    console.log('запустился сервер на 4000 порту')
})