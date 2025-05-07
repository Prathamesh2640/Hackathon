const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const quoteRouter = require("./routes/quotes");
const { jwtAuth } = require("./utils/jwtauth");
const favoritesRouter = require("./routes/favorites");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(jwtAuth);

app.use("/users", userRouter);
app.use("/quote", quoteRouter);
app.use("/favorites", favoritesRouter);
const port = 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("server ready at port", port);
});


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
