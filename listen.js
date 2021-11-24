const express = require('express')
const fs = require('fs');
var mysql_db = require('./mysql_db.js');

const app = express()
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/todolist-action/:myname', function (req, res) {
    // fs.readFile('todo.html', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    // });
    res.render('todo.html', {name: req.params.myname});

})

// // POST method route
// app.post('/', function (req, res) {
//     res.send('GET request to the homepage')
// })

// app.put('/todo/:index', function (req, res) {
//     res.send(`Hello Customer : ${req.params.index}`)
// })

  
// // POST method route
// app.delete('/todo/:index', function (req, res) {
//     res.send('POST request to the homepage')
// })


app.listen(3000, function(){
    console.log('Server is running!')
    // console.log(mysql_db.get());
})