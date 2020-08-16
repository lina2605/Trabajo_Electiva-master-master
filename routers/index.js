const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req,res)=>{
 const indexPath = path.join(__dirname,'../views/index.html');
 res.sendFile( indexPath );
});

module.exports = router;