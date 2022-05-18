import React from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer */
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
// import ReactDOM from "react-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

 
class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
}
export default App;