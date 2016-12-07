const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static(__dirname + './../dist'));


let db = massive.connect({
   connectionString: "postgres://tkcgusag:cSsx-A6IvaS-Kp_eEhnzu9va3zaXolyi@elmer.db.elephantsql.com:5432/tkcgusag"
 },
 (err, localdb) => {
   db = localdb;
   app.set('db', db);
   db.set_apparel((err, data) => {
     if (err) console.log(err);
     else console.log('All tables successfully reset');
   });
 })

// Shirts
app.get('/apparel/items/shirts', function(req, res, next) {
  db.get_shirts(function(err, shirts) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(shirts)
    }
  });
})

// Hoodies
app.get('/apparel/items/hoodies', function(req, res, next) {
  db.get_hoodies(function(err, hoodies) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(hoodies)
    }
  });
})

// Hats
app.get('/apparel/items/hats', function(req, res, next) {
  db.get_hats(function(err, hats) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(hats)
    }
  });
})

// Accessories
app.get('/apparel/items/accessories', function(req, res, next) {
  db.get_accessories(function(err, accessories) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(accessories)
    }
  });
})

// Mens
app.get('/apparel/items/mens', function(req, res, next) {
  db.get_mens(function(err, mens) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(mens)
    }
  });
})

// Womens
app.get('/apparel/items/womens', function(req, res, next) {
  db.get_womens(function(err, womens) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(womens)
    }
  });
})

// Kids
app.get('/apparel/items/kids', function(req, res, next) {
  db.get_kids(function(err, kids) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(kids)
    }
  });
})

app.listen(8080, function() {
    console.log('Connected on port 8080');
})