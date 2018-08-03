const members = require('../models').members;
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var express     = require('express');
var app         = express();
module.exports = {
  create(req, res) {
      // create a sample user
    var nick = { 
        username: req.body.username,
        password: req.body.password,
      };
    return members
      .create(nick)
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  
  authenticate(req, res) {
        // check if password matches
        if (req.body.password != 'hapt' || req.body.username != 'hapt') {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
          const payload = {
            username: 'hapt' 
          };
          var token = jwt.sign(payload, 'shhhhh', {
            expiresIn: 1440 // expires in 24 hours
          });
  
          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }   
  },
  
};