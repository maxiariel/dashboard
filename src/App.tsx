import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TrainerProvider from "./context/TrainerContext";
import Home from "./Home";
import CardInfo from "./components/cardInfo/CardInfo";


const App = () => {
  return (
    <TrainerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path={`/:id`} element={<CardInfo />}/>
        </Routes>
      </BrowserRouter>
    </TrainerProvider>
  );
};

export default App;
