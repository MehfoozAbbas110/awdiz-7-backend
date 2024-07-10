import express from 'express'
import AllRoutes from './Routes/index.js';


const app = express();
app.use(express.json());

app.post("/", function (req, res){
  const { name, email, password } = req.body.userData;
  console.log(name, email, password)
  if(name && email && password){
    res.send("Data Received");
  }else {
    res.send("All Fields are Mandatory")
  }
});
app.use("/api/v1", AllRoutes);

// app.post('/register',Register);
// app.post('/login',Login);

app.listen(3000);