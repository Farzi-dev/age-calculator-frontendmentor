// // console.log("in");
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

var app = express();
var port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

function showAge(day, month, year, res) {
  var date = new Date();

  var cYear = date.getFullYear();
  var cDay = date.getDate();
  var cMonth = date.getMonth();
  cMonth++;
  console.log(`Day: ${cDay}, Month: ${cMonth}, Year: ${cYear}`);

  if (day < 1 || day > 31) {
    console.log("Enter a valid date");
    res.sendFile(__dirname + "/index.html");
    return;
  } else if (month < 1 || month > 12) {
    console.log("Enter a valid month");
    res.sendFile(__dirname + "/index.html");
    return;
  } else if (year < 1 || year > cYear) {
    console.log("Enter a valid year");
    res.sendFile(__dirname + "/index.html");
    return;
  }

  var Day = cDay - day;
  if (Day < 0) {
    Day += 30;
    month--;
  }
  var Month = cMonth - month;
  if (Month < 0) {
    Month += 12;
    year--;
  }
  var Year = cYear - year;

  console.log(Year);
  console.log(Month);
  console.log(Day);
}

app.post("/submit", (req, res) => {
  var day = req.body.day;
  var month = req.body.month;
  var year = req.body.year;

  // console.log(req);
  console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

  showAge(day, month, year, res);

  // Process the data as needed, then send a response
  // res.send(`Received: Day - ${day}, Month - ${month}, Year - ${year}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//   "C:\Users\USER\Desktop\FrontendMentor\age-calculator-app-main\index.html"
