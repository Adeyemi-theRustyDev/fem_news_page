import Home from "./Home";
import Navbar from "./components/Navbar";

const App: React.FC = () => {

  return (
    <div className="container mx-auto lg:p-5 md:p-4">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;

// Font-weights: 400, 700, 800