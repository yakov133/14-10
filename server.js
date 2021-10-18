const http = require("http");
const port = 4001;
const fs = require("fs");

let products = [
  {
    name: "car",
    price: 20000,
    pic: "https://media.istockphoto.com/photos/car-service-worker-applying-nano-coating-on-a-car-detail-picture-id1273682054?b=1&k=20&m=1273682054&s=170667a&w=0&h=P3O-y_vcH33UxSqVkmJooHLSLQQcKpbS8pDGufVPDzk=",
  },
  {
    name: "iphone",
    price: "5000",
    pic: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg",
  },
  {
    name: "bicycle",
    price: 10000,
    pic: "https://media.istockphoto.com/photos/young-man-electric-green-bike-bicycle-by-windmill-farm-windmills-on-picture-id1215302438?b=1&k=20&m=1215302438&s=170667a&w=0&h=E4rvtCAYuj6bGPLQUZIIXqKSQc8gc9spY4TNicUPm-o=",
  },
  {
    name: "house",
    price: 2000000,
    pic: "https://media.istockphoto.com/photos/beautiful-modern-home-with-various-materials-used-on-the-facade-picture-id1263902259?b=1&k=20&m=1263902259&s=170667a&w=0&h=BejwAB0qskxBgtPxrHtUXn0dbki6TMD4iqNJW5Z6Vp8=",
  },
  {
    name: "motorcycle",
    price: 23000,
    pic: "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg",
  },
];

// function readFromFile(fileName) {
//   fs.readFile(`../public/${fileName}.html`, "utf8", (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       console.log(err);
//     } else {
//       res.writeHead(200);
//       res.write(data);
//     }
//     res.end();
//   });
// }

const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      fs.readFile("../public/index.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      // readFromFile("index");
      break;

    case "/about":
      fs.readFile("../public/about.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      //   readFromFile("about");
      break;

    case "/sales":
      fs.readFile("../public/sales.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      //   readFromFile("sales");
      break;

    case "/products":
      res.writeHead(200);
      res.write(JSON.stringify(products));
      res.end();
      break;

    case "/product":
      res.writeHead(200);
      res.write(JSON.stringify(products[0]));
      res.end();
      break;

      case "/css/index.css":
      fs.readFile("../public/css/index.css", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      break;

    case "/js/index.js":
      fs.readFile("../public/js/index.js", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      break;


      case "/css/about.css":
      fs.readFile("../public/css/about.css", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      break;

      case "/js/about.js":
      fs.readFile("../public/js/about.js", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      break;

      case "/css/sales.css":
      fs.readFile("../public/css/sales.css", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      break;

      case "/js/sales.js":
      fs.readFile("../public/js/sales.js", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          console.log(err);
        } else {
          res.writeHead(200);
          res.write(data);
        }
        res.end();
      });
      break;


    default:
      res.writeHead(404);
      res.end();
      break;
  }
});

server.listen(port);
