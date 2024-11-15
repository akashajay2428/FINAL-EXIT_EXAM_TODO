const express = require('express');
const router = express.Router();

const todomodel = require('../models/tododata')


//get operation
router.get('/list', async (req, res) => {

    try {
        const data = await todomodel.find();
        res.status(200).send(data);
    } catch (error) {
        res.json({ success: false, message: 'error on get operation' })
    }

});

//post operation
router.post('/add', async (req, res) => {

    try {
        const id = req.body;
        const data = new todomodel(id);
        const saveddata = await data.save();
        res.status(200).json({ success: true, message: "data added" })

    } catch (error) {
        res.json({ success: false, message: 'error on adding data' })
    }

});


//delete operation
router.delete('/delete/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const data = await todomodel.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "data deleted" })
    } catch (error) {
        res.json({ success: false, message: 'error on deleting' })
    }


});

module.exports = router;