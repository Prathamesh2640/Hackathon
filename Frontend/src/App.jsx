import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

// import ShoppingCart from "./components/ShoppingCart";
// import OrderList from "./components/OrderList";
// import BookForm from "./components/BookForm";
// import UserDashboard from "./components/UserDashboard";
import UserLayout from "./components/UserLayout";
import { createContext, useState } from "react";
import QuoteList from "./components/QuoteList";
import UserQuotes from "./components/UserQuotes";
import Profile from "./components/Profile";
import MyQuotes from "./components/MyQuotes";

export const AuthContext = createContext();

function getUserFromSessionStorage() {
  const userJson = sessionStorage.getItem("user");
  const user = JSON.parse(userJson);
  return user;
}

function App() {
  const [user, setUser] = useState(getUserFromSessionStorage());

  return (
    <div className="container">
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          {/* /url */}
          <Route index="true" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* /user/url */}
          <Route path="/user" element={<UserLayout />}>

            {/* <Route index="true" element={<UserDashboard />} /> */}
            {/* <Route path="my" element={<UserQuotes />} /> */}
            <Route path="quotes" element={<QuoteList />} />
            <Route path="profile" element={<Profile />} />
            <Route path="myquotes" element={< MyQuotes />} />


            {/* <Route path="orders" element={<OrderList />} /> */}
            {/* <Route path="newbook" element={<BookForm />} /> */}
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
