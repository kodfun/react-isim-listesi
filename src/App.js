import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import ListeForm from "./ListeForm";
import Liste from './Liste';

function App() {
  const [isimler, setIsimler] = useState(["ali", "can", "cem"]);

  return (
    <div className="container">
      <h1>Hello :)</h1>
      <ListeForm isimEkle={(ad) => setIsimler([...isimler, ad]) } />
      <Liste items={isimler} />
    </div>
  );
}

export default App;
