const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

var allowedOrigins = [
  'http://localhost:4200',
  'http://localhost:4200/admin',
  'http://localhost:4200/home'
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.listen(port);

app.get("/vehicles", async (req, res) => {
  const data = await prisma.vehicle.findMany();
  res.send(data);
});
