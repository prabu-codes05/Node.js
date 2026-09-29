import express from "express";
const PORT = 5004;
const app = express();
//middleware - it verifies the req and response before giving output

app.use(express.json()); //terminal ma body dekhauna yo use garna parxa data pathauna

//GET Method(paauni)
app.get("/", (req, res) => {
  res.send("backend is running...");
});

app.post("/", (req, res) => {
  //(pathauni)

  //destructuring
  const { name, rollno, semester } = req.body;
  try {
    //validation part
    if (!name || !rollno || !semester) {
      res.status(400).json({
        message: "All filed should be filled",
        success: false,
      });
    }
    //success response
    res.status(201).json({
      message: "Data posted Successfully",
      data: {
        name: name,
        rollno: rollno,
        semester: semester,
      },
      success: true,
      //kei error aaye validation wala part execute hunxa sabai correct bhaye success wala part run hunxa
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});
app.put("/prabesh", (req, res) => {
  res.send("hello from backend put");
});
app.delete("/biju", (req, res) => {
  res.send("hello from backend delete");
});

app.listen(PORT, () => {
  console.log(`server is Running on PORT://localhost:${PORT}`);
});
