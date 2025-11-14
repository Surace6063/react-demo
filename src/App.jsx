import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layout/MainLayout"
import ProductPage from "./pages/ProductPage"
import Products from "./pages/Products"
import ProductDetailPage from "./pages/ProductDetailPage"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"
import ProtectedRoute from "./utils/ProtectedRoute"
import AuthRedirectedRoute from "./utils/AuthRedirectedRoute"

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          
          <Route element={<AuthRedirectedRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          
          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<CartPage />} />
          </Route>
          
        </Route>
        
      </Routes>
    </div>
  )
}
export default App





















// import "./App.css";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import Form2 from "./components/Form2";
// import Form3 from "./components/Form3";
// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
// import UserProfile from "./components/UserProfile";

// import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import RegisterPage from "./pages/RegisterPage";
// import PageNotFound from "./pages/PageNotFound";
// import ProductPage from "./pages/ProductPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import Footer from "./components/Footer";
// import MainLayout from "./layout/MainLayout";
// import ProtectedRoute from "./utils/ProtectedRoute";

// // components -> js function tha returns jsx
// const App = () => {
//   const username = "Suresh Thapa";
//   const num1 = 10;
//   const num2 = 20;

//   const isVerified = false;
//   const age = 20;

//   const fruits = ["apple", "mango", "banana", "orange"];

//   return (
//     <div className="p-10">
//       {/* <Navbar />
//      <h1 className="bg-slate-500 text-4xl text-white rounded-md p-4 mt-10">
//       Hello, This is {username}. This is awesome.
//     </h1>
//      <p>The sum of {num1} and {num2} is {num1 + num2}.</p>

//      {
//         isVerified ? <p>User is verified</p> : 
//         <p>User is not verified</p>
//      } */}

//       {/* and operator */}

//       {/* {
//       age < 18 && <p>You cannot drive.</p>
//      }

//      <h3>list of fruits</h3>
//      <ul>
//       {
//         fruits.map((item,index) =>(
//           <li key={index}>{item}</li>
//         ))
//       }
//      </ul>

//      <UserProfile id={101} name="Suresh Thapa" age={24} country="Nepal" />
//      <UserProfile id={102} name="John Doe" age={23} country="USA" />
//      <UserProfile id={103} name="Alex" age={20} country="China" /> */}

//       {/* <Counter /> */}

//       {/* <Form /> */}

//       {/* <Form2 /> */}

//       {/* <Form3 /> */}
//       {/* <ProductList /> */}

//       {/* common navbar appears on all page */}
//       {/* <Navbar /> */}

//       {/* define your routes  */}
//       <Routes>
//         {/* main layout */}
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<HomePage />} />

//           {/* protected route */}
//           <Route element={<ProtectedRoute />}>
//                <Route path="/about" element={<AboutPage />} />
//           </Route>


//           <Route path="/register" element={<RegisterPage />} />
//             <Route path="/products" element={<ProductPage />} />
         

//           {/* dynamic route */}
//           <Route path="/products/:id" element={<ProductDetailPage />} />
//         </Route>


//         {/* error page */}
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>

//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default App;
