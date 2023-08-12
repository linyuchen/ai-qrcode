const express = require("express");
const Replicate = require("replicate");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Set up Replicate client with your API token
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});
app.use(cors());
app.use(express.json());

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/api/generate", async (req, res) => {
  try {
    const inputParameters = {
      qr_code_content: req.query.qr_content,
      prompt: req.query.image_description,
    };

    const output = await replicate.run(
      "dannypostma/cog-visual-qr:7653601d0571fa6342ba4fa93a0962adebd1169e9e2329eefeb5729cac645d42",
      {
        input: inputParameters,
      }
    );

    res.json({ image_url: output });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
