const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('/dist/mail-template'));


app.get('/*', function(req,res) {
  res.sendFile('index.html',{ root: 'dist/mail-template/' });
});

app.listen(process.env.PORT || 8400,()=>{
  console.log('Server Running on Port 8400');
});
