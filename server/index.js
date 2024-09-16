const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.js");

const app = express();
app.use(express.json());
app.use(cors());

const mongoUrl =
  "mongodb+srv://therealzoux:121219@cluster0.2c6nn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
      console.log("Database connected");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});
//create user
app.post("/users", async (req, res) => {
  const { name, id, email } = req.body;
  try {
    // Validate input
    if (!name || !id || !email) {
      return res.status(400).json({ error: "Name, ID and Email are required" });
    }
    const newUser = new User({
      username: name,
      userid: id,
      useremail: email,
    });
    await newUser.save();

    res.status(201).json({ message: `User added: ${id}: ${name}, ${email}` });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ error: err });
  }
});
//get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "users", data: users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
//delete user
app.delete("/users", async (req, res) => {
  const id = req.body.id;
  try {
    const users = await User.findOneAndDelete({ userid: id });
    res.status(200).json(`user deleted ${users}`);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
//update user
app.put("/users", async (req, res) => {
  const id = req.body.id;
  try {
    const users = await User.updateOne(
      { userid: id },
      { username: "Reeeeeeeeeeem" }
    );
    res.status(200).json(`user udated ${users}`);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
