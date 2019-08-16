const {Router} = require('express');
const router = Router();
const fs = require("fs");

router.post('/', function(req, res){
    console.log(req.body);

    fs.appendFile('./users.txt', req.body, (err)=>{
        if(err) throw err;
        console.log('The "data to append" was appended to file!');
       
    })   
    res.send('xui');
})


module.exports = router;