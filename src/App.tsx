import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainerProvider from "./context/TrainerContext";
import Home from "./Home";


const App = () => {
  return (
    <TrainerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </TrainerProvider>
  );
};

export default App;
