import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BackgroundPicture from "./components/Background picture/BackgroundPicture";
import Decision from "./components/Decision Box/Decision";
import About from "./components/About Box/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <BackgroundPicture></BackgroundPicture>
      <Decision></Decision>
      <About></About>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
