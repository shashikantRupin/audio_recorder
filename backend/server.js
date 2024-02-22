const cors = require('cors')
const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5001

const app = express()

app.use(
  cors({
    origin: [
      "https://frontend-vert-delta-13.vercel.app",
      "https://recorerapp.vercel.app",
      "http://localhost:3000",
    ],
  })
);
connectDB()
app.use(express.json())

app.get("/", (req,res)=>{
      res.json({ message: "server is running" });
})
// Increase payload size limit
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.urlencoded({extended: true}))
app.use('/api/audio', require('./routes/audio_routes'))


app.listen(port, () => console.log(`Server is Running at ${port}`))
