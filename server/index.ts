const express = require('express')
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 3000

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))


