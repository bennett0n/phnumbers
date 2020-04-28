const express = require('express');
const app = express();
const morgan = require('morgan');
const prefixlst = require('./jsondb/prefix.json');


app.use(morgan('short'));

app.get("/checkproviderph/:number", (req, res)=>{

  var input = req.params.number;
  var prefix = input.slice(0,4);

  console.log(`Input: ${input}`);

  var result;
  try{
  result = prefixlst[prefix].provider;
  }catch(err){}

  if(result)
    res.send(`Provider: ${prefixlst[prefix].provider}`);
  else
    res.send("Prefix not found or incorrect format. Follow 11 digit PH Mobile number 09XXXXXXXXX.")



});

app.listen(9000, () => {
  console.log("Server is up listening at port 9000");
});
