const moment = require('moment')
const express = require('express');
const bodeParser = require('body-parser')
const turbosms = require('turbosms');
const mysql = require('mysql');
const CronJob = require('cron').CronJob;
const axios = require("axios");
const app = express();

// 


// Add the credentials to access your database
var connection = mysql.createConnection({
    host: 'drovakie.mysql.tools',
    user: 'drovakie_test1',
    password: '3h&6Gpc4~Z',
    database: 'drovakie_test1'
});


//Распарсивает json значения 
app.use(bodeParser.json());
app.use(bodeParser.urlencoded({ extended: true }));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// ---------------------------------- получаем всех по сегодняшней дате +7 дней за все года  ---------------------- //
// app.get('/clients', function(req, res) {
//     let sql = `SELECT id, mobile, date, date1, date2 ,date3 ,date4 ,date5 ,date6, date7,date8 ,date9 ,date10 ,date11 ,date12 ,date13 ,date14 ,date15 ,date16 ,date17 ,date18 ,date19 ,date20  FROM Binotel2s WHERE DAYOFMONTH(date) = DAYOFMONTH(CURRENT_DATE()+7 ) AND MONTH(date) = MONTH(CURRENT_DATE()+7) OR (DAYOFMONTH(date1) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date1) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date2) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date2) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date3) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date3) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date4) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date4) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date1) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date1) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date5) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date5) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date6) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date6) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date7) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date7) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date8) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date8) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date9) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date9) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date10) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date10) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date11) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date11) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date12) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date12) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date13) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date13) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date14) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date14) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date15) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date15) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date16) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date16) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date17) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date17) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date18) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date18) = MONTH(CURRENT_DATE())) OR (DAYOFMONTH(date19) = DAYOFMONTH(CURRENT_DATE()) AND MONTH(date19) = MONTH(CURRENT_DATE()+7)) OR (DAYOFMONTH(date20) = DAYOFMONTH(CURRENT_DATE()+7) AND MONTH(date20) = MONTH(CURRENT_DATE()+7));`;
//     connection.query(sql, function(err, data, fields) {
//         if (err) throw err;
//         res.json(data)
//     })
// });

// ----------------------- получаем всех за 1 день -  сегодня +7 дней за все года по динамической переменной ----------------- //
// , date1, date2, date3, date4, date5
app.get('/search', (req, res) => {
    connection.query('SELECT id, name, mobile FROM  Binotel2s WHERE  ? IN( DATE_FORMAT(date1, "%d%m"),  DATE_FORMAT(date2, "%d%m"),  DATE_FORMAT(date3, "%d%m"), DATE_FORMAT(date4, "%d%m"), DATE_FORMAT(date5, "%d%m"), DATE_FORMAT(date6, "%d%m"), DATE_FORMAT(date7, "%d%m"), DATE_FORMAT(date8, "%d%m"), DATE_FORMAT(date9, "%d%m"), DATE_FORMAT(date10, "%d%m"), DATE_FORMAT(date11, "%d%m"), DATE_FORMAT(date12, "%d%m"), DATE_FORMAT(date13, "%d%m"), DATE_FORMAT(date14, "%d%m"), DATE_FORMAT(date15, "%d%m"), DATE_FORMAT(date16, "%d%m"), DATE_FORMAT(date17, "%d%m"), DATE_FORMAT(date18, "%d%m"), DATE_FORMAT(date19, "%d%m"), DATE_FORMAT(date20, "%d%m"))', [req.query.domain], (err, result) => {
        if (err) throw err;
        res.json(result)
    })
})

app.get('/search/1', (req, res) => {
    connection.query('SELECT id, name, mobile FROM  Binotel2s WHERE  ? IN( DATE_FORMAT(date1, "%d%m"),  DATE_FORMAT(date2, "%d%m"),  DATE_FORMAT(date3, "%d%m"), DATE_FORMAT(date4, "%d%m"), DATE_FORMAT(date5, "%d%m"), DATE_FORMAT(date6, "%d%m"), DATE_FORMAT(date7, "%d%m"), DATE_FORMAT(date8, "%d%m"), DATE_FORMAT(date9, "%d%m"), DATE_FORMAT(date10, "%d%m"), DATE_FORMAT(date11, "%d%m"), DATE_FORMAT(date12, "%d%m"), DATE_FORMAT(date13, "%d%m"), DATE_FORMAT(date14, "%d%m"), DATE_FORMAT(date15, "%d%m"), DATE_FORMAT(date16, "%d%m"), DATE_FORMAT(date17, "%d%m"), DATE_FORMAT(date18, "%d%m"), DATE_FORMAT(date19, "%d%m"), DATE_FORMAT(date20, "%d%m"))', [req.query.domain], (err, result) => {
        if (err) throw err;
        res.json(result)
    })
})

// ----------------------------- принимаем массив из /clients за сегодня +7 дней ---------------------- //
let date = new Date();
date.setDate(date.getDate() + 7);
let dateCalendar = moment(date).format("DDMM");

let date1 = new Date();
date1.setDate(date1.getDate() + 6);
let dateCalendar1 = moment(date1).format("DDMM");

let date2 = new Date();
date2.setDate(date2.getDate() + 5);
let dateCalendar2 = moment(date2).format("DDMM");

let date3 = new Date();
date3.setDate(date3.getDate() + 4);
let dateCalendar3 = moment(date3).format("DDMM");

let date4 = new Date();
date4.setDate(date4.getDate() + 3);
let dateCalendar4 = moment(date4).format("DDMM");

let date5 = new Date();
date5.setDate(date5.getDate() + 2);
let dateCalendar5 = moment(date5).format("DDMM");

let date6 = new Date();
date6.setDate(date6.getDate() + 1);
let dateCalendar6 = moment(date6).format("DDMM");

let date7 = new Date();
date7.setDate(date7.getDate());
let dateCalendar7 = moment(date7).format("DDMM");

const getClients = async() => {
    const response = await axios.get('http://localhost:8090/search', {
        params: {
            domain: dateCalendar
        }
    })

    const response1 = await axios.get('http://localhost:8090/search/1', {
        params: {
            domain: dateCalendar1
        }
    })

    const response2 = await axios.get('http://localhost:8090/search/1', {
        params: {
            domain: dateCalendar2
        }
    })
    const response3 = await axios.get('http://localhost:8090/search/1', {
        params: {
            domain: dateCalendar3
        }
    })
    const response4 = await axios.get('http://localhost:8090/search/1', {
        params: {
            domain: dateCalendar4
        }
    })
    const response5 = await axios.get('http://localhost:8090/search/1', {
        params: {
            domain: dateCalendar5
        }
    })
    const response6 = await axios.get('http://localhost:8090/search/1', {
        params: {
            domain: dateCalendar6
        }
    })
    const response7 = await axios.get('http://localhost:8090/search/1', {
        params: {
            domain: dateCalendar7
        }
    })



    let arr = [...response1.data, ...response2.data, ...response3.data, ...response4.data, ...response5.data, ...response6.data, ...response7.data]
    console.log(arr.length)
        // const result = response.data.filter(mas1El => {
        //     for (let i = 0; i < response.data.length; i++) {
        //             if (mas1El.mobile === response.data[i].mobile)
        //                 return 0
        //     }
        //     return 1
        // })

    const result = response.data.filter(mas1El => {
        for (let i = 0; i < arr.length; i++) {
            if (mas1El.mobile === arr[i].mobile)
                return 0
        }
        return 1
    })

    for (let i = 0; i < result.length; i++) {
        postSms(`38${result[i].mobile}`)
            // console.log(result[i].mobile)
        await delay(100)
    }
}


//--------------------------------------- пост запрос ----------------------------------//
const postSms = async(number) => {
    const parametrSms = {
        number,
        // number: '380635674521',
        message: 'НАГАДУВАННЯ: \n Час купляти дрова!!! \n https://drova-kiev.com.ua/ \n\n  063 301 71 86'
    }
    try {
        const sending = await axios.post("http://localhost:8090/sms/sendsms", parametrSms)
        console.log(sending.data)
    } catch (err) {
        console.log(err)
    }
}

//------------------------------------------ запуск функции пост запроса по времени ----------------------------------//

const jo = new CronJob('00 33 10 * * 1-6', async function() {
    await getClients()
    await postSms()
});
jo.start();


//------------------------------------------- отправка смс сообщений -------------------------------------------//
let TS_LOGIN = 'alex_rudnev';
let TS_PASS = 'Rudnev2337320';
app.post('/sms/sendsms', async(req, res) => {
    const authRes = await turbosms.auth(TS_LOGIN, TS_PASS);
    if (authRes === 'Неверный логин или пароль') {
        return res.status(403).send('Неверный логин или пароль к сервису');
    }
    if (req.body && req.body.number && req.body.message) {
        const number = req.body.number;
        const message = req.body.message;
        const result = await turbosms.sendSMS(number, message);
        let success = result[0] === 'Сообщения успешно отправлены' ? true : false;
        return res.status(200).send({ success, result });
    }
    res.status(405).send('Ошибка в параметрах');
});



app.listen(8090, () => {
    console.log('запустился сервер на 8090 порту')
})