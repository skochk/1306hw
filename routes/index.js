const {Router} = require('express');
const router = Router();

router.get('/',(request, respond) =>{
    respond.render('index');
}); 

module.exports = router;