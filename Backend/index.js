const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const quoteRouter = require("./routes/quotes");
const { jwtAuth } = require("./utils/jwtauth");
<<<<<<< HEAD
app.use(express.json());
app.use(jwtAuth);
const cors = require("cors");
app.use(cors());
app.use("/users", userRouter);
app.use("/quote", quoteRouter);
=======
const favoritesRouter = require("./routes/favorites");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(jwtAuth);
>>>>>>> 83265c3d239c6a4e7f26f033f1404e579ea05b4b

app.use("/users", userRouter);
app.use("/quote", quoteRouter);
app.use("/favorites", favoritesRouter);
const port = 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("server ready at port", port);
});
<<<<<<< HEAD
=======


// const express = require("express");
// const app = express();
// const userRouter = require("./routes/users");
// // const bookRouter = require("./routes/books");
// // const orderRouter = require("./routes/orders");
// const { jwtAuth } = require("./utils/jwtauth");

// const cors = require("cors");
// app.use(cors());

// app.use(express.json());
// //app.use(jwtAuth);
// app.use("/users", userRouter);
// // app.use("/books", bookRouter);
// // app.use("/orders", orderRouter);

// const port = 3000;
// app.listen(port, "0.0.0.0", () => {
//   console.log("server ready at port", port);
// });
>>>>>>> 83265c3d239c6a4e7f26f033f1404e579ea05b4b
