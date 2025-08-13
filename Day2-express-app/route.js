// const express = require('express');

// const router = express.Router();


// // // creat new route
// // app.get("/", (req, res) => {
// //    const userId = req.params.id;
// //    res.send(`Hello User ${userId}`);
// // });

// // New GET route
// router.get("/", (req, res) => {
//     const location = req.query.location;
//     const name = req.query.name;
//     const country = req.query.country;
//      res.send(`Hello Sandhya! Name: ${name}, Location: ${location}, Country: ${country}`);
// });

// // app.get("/profile", (req, res) => {
// //     const userId = req.params.id;
// //    res.send(`Hello User ${userId}`);
// //  });

// // //Route with URL parameter
// // app.get("/user/:id", (req, res) => {
// //     const userId = req.params.id;
// //     res.send(`Hello User ${userId}`);
// // });

// //create new route with route params and query param
// // app.get("/user/:id/education/:education/address/:address", (req, res) => {
// //     const userId = req.params.id;
// //     const location = req.query.location;
// //     const name = req.query.name;
// //     const country = req.query.country;
// //     res.send(`###################################<br/>XXXXXUser ID: ${userId}, Name: ${name}, Location: ${location}, Country:${country}`);
    
// // });
// app.get("/:id", (req, res) => {
//     const userId = req.params.id;
//     const location = req.query.location;
//     const name = req.query.name;
//     const country = req.query.country;
//     res.send(`###################################<br/>XXXXXUser ID: ${userId}, Name: ${name}, Location: ${location}, Country:${country}`);
    
// });
// module.exports = router;



const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    const location = req.query.location;
    const name = req.query.name;
    const country = req.query.country;
    res.send(`Hello Sandhya! Name: ${name}, Location: ${location}, Country: ${country}`);
});


router.get("/:id", (req, res) => {
     const userId = req.params.id;
  const location = req.query.location;
  const name = req.query.name;
  const country = req.query.country;
    res.send(`
        ###################################<br/>
        XXXXX User ID: ${userId}, Name: ${name}, Location: ${location}, Country: ${country}
    `);
});

module.exports = router;
