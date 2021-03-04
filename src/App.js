import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import ListeForm from "./ListeForm";
import Liste2Form from "./Liste2Form";
import Liste from './Liste';
import Liste2 from './Liste2';
import UygulamaContext from './uygulama-context';

function App() {
  const [isimler, setIsimler] = useState(["ali", "can", "cem"]);
  const [adlar, setAdlar] = useState(["aydın", "aslı"])
  return (
    <UygulamaContext.Provider value={{adlar, setAdlar}}>
      <div className="container">
        <h1>Hello :)</h1>
        <ListeForm isimEkle={(ad) => setIsimler([...isimler, ad]) } />
        <Liste items={isimler} />
        <hr />
        <Liste2 />
        <Liste2Form />
      </div>
    </UygulamaContext.Provider>
  );
}

export default App;
