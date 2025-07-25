const express = require("express");
const { connectToMongoDB } = require("./connect"); 
const urlRoute = require("./routes/url");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

app.use(express.json());

connectToMongoDB("mongodb://localhost:27017/abc123")
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error("MongoDB connection error:", err));


app.use(express.json());

app.use("/url", urlRoute);

app.get('/:shortID', async ( req, res) => {
  const shortId = req.params.shortID;
  const entry = await URL.findOneAndUpdate({
    shortId
  }, 
  {
    $push: {
      visitHistory: {
        timestamp: Date.now(),
      },
    },
  }
);
 res.redirect(entry.redirectURL);

});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
