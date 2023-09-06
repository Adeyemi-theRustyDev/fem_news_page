import Home from "./Home";
import Navbar from "./components/Navbar";

const App: React.FC = () => {

  return (
    <div className="conatiner md:p-5 p-2">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;

// Font-weights: 400, 700, 800