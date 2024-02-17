import Header from "./comp/Header/Header.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Main from "./comp/Main/Main.js";
import { BrowserRouter, useParams } from "react-router-dom";
import "../src/styles/styles.css"


function App() {
  //  console.log(useParams())
  return (
    // you can not nest Router inside Router , Router should be one
    <BrowserRouter>
      <Header />
      <Main />
      
    </BrowserRouter>
   
  );
}

export default App





