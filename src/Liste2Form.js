import React, { useState, useContext } from "react";
import UygulamaContext from './uygulama-context';

function Liste2Form() {
    const ctx = useContext(UygulamaContext);

    const [ad, setAd] = useState("");
    const isimEklendiginde = e => {
        e.preventDefault();
        ctx.setAdlar([...ctx.adlar, ad]);
        setAd("");
    };

    return (
        <form onSubmit={isimEklendiginde}>
            <input type="text" value={ad} onInput={(e)=>setAd(e.target.value)} required />
            <button>Ekle</button>
        </form>
    );
}

export default Liste2Form;