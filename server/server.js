import express from "express";
import mongoose from "mongoose";
import authRouter from './routes/auth.js'
import playersRouter from './routes/player.js'


app.use(express.static('public'));
app.use(express.json());


app.use("/auth",authRouter);
app.use("players", playersRouter);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));