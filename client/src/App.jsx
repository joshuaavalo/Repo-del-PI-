import { Route, Routes } from "react-router-dom";
import PATHROUTES from "./helpers/PathRoutes";
import NavBar from "./components/NaBar/NavBar";
import { Home, Landing, Detail, Form } from "./views"


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path={PATHROUTES.LANDING} element={<Landing />} />
        <Route path={PATHROUTES.FORM} element={<Form />}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
        <Route path={PATHROUTES.HOME} element={<Home />} />
        
      </Routes>
    </div>
  );
}; 

export default App;

