import { NavBar } from "./components/navbar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css"


function App() {
  
  return (
    <>
      <NavBar/>  
      <ItemListContainer greeting="Books" />
    </> 
  );
}
export  default App;
