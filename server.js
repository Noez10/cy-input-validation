const express = require("express");
const cors = require("cors");
const bcryptjs = require("bcryptjs");

const users = [];

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/register", (req, res) => {
    console.log(req.body);

    const userToAdd = {
        verifiedEmail: "",
        verifiedUsername: "",
        veridiedPassword: "",
    };

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (req.body.email.match(emailPattern)) {
        console.log(req.body.email);
        userToAdd.verifiedEmail = req.body.email;
    } else {
        res.status(400).send("Please enter a valid email");
        return;
    }

    const whitespacePattern = /\s+/;

    if (!whitespacePattern.test(req.body.password) &&
        capitalizedPattern.test(req.body.password)
    ) {
        console.log(req.body.password);
        userToAdd.verifiedPassword = req.body.password;
    } else {
        res
          .status(400)
          .send(
            "Your password must start with a capitalized letter and contain no whitespace."
          );
        return;
      }

      const capitalizedPattern = /[A-Z]/;

      const usernamePattern = /[a-zA-Z0-9.!@#$]\/s$/

      if (usernamePattern.test(req.body.username));
    
});

app.listen(4004, () => console.log("Running on port 4004"));