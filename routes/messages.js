var express  = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res) {
    Message.find().exec(function(err, docs) {  //exec is used so multiple queries can be executed.
        if (err) {
            return res.status(404).json({
                title: 'an error occured',
                error: err
            });
        }
        res.status(200).json({
            messages :"Received",
            obj: docs
        });

    });
});


router.post('/', function (req, res) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Message saved',
            obj: result
        });

    });
});


router.patch('/:id', function(req, res) {
    Message.findByIdAndUpdate(req.params.id, req.body, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occured during update',
                error: err
            });            
        }        
        return res.status(201).json({
            message: 'Message updated',
            obj: doc
        });
    });
});

router.delete('/:id', function(req, res) {
    var messageResponse = req.body;
    Message.findByIdAndRemove(req.params.id, req.body, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occured during delete',
                error: err
            });            
        }        
        return res.status(200).json({
            message: 'Message deleted',
            obj: messageResponse
        });
    });
});


module.exports = router;
