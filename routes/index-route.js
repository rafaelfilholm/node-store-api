const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send({
        title: 'Node-Api',
        version: '0.0.2'
    });
});

module.exports = router;