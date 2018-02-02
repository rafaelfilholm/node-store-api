const express = require('express');
const router = express.Router();

router.post('/', (req, res, next)=>{
    res.send(req.body);
});
router.put('/:id', (req, res, next)=>{
    const id = req.params.id;
    res.send({
        id: id,
        item: req.body
    });
});
router.delete('/', (req, res, next)=>{
    res.send(req.body);
});

module.exports = router;