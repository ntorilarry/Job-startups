import "./App.css";
import CareerTips from "./components/careerTips";
import Footer from "./components/footer";
import Home from "./components/home";
import Jobs from "./components/jobs";
import Partners from "./components/partners";
import Test from "./components/test";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="App">
      <Home />
      <CareerTips />
      <Jobs />
      <Partners />
      <Test />
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
