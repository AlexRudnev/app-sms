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

// ------------------- пут запрос - в котором постим в базу данных изменение ColorSmile ? true:false -----------------------------//
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



// ---------------------------------- получаем всех по сегодняшней дате за все года  ---------------------- //
app.get('/list', function(req, res) {
    let sql = `SELECT id, name, mobile, ord, ColorSmile, date1, date FROM Binotel2s WHERE DAYOFMONTH(date) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date) = MONTH(CURRENT_DATE()) OR (DAYOFMONTH(date1) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date1) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date2) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date2) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date3) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date3) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date4) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date4) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date1) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date1) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date5) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date5) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date6) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date6) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date7) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date7) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date8) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date8) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date9) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date9) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date10) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date10) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date11) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date11) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date12) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date12) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date13) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date13) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date14) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date14) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date15) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date15) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date16) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date16) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date17) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date17) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date18) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date18) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date19) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date19) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date20) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date20) = MONTH(CURRENT_DATE()));`;
    connection.query(sql, function(err, data, fields) {
        if (err) throw err;
        res.json(data)
    })
});






app.listen(4000, () => {
    console.log('запустился сервер на 4000 порту')
})