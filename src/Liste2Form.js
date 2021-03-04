import React, { useState, useContext } from "react";
import UygulamaContext from './uygulama-context';

function Liste2Form() {
    const ctx = useContext(UygulamaContext);

    const [ad, setAd] = useState("");
    const isimEklendiginde = e => {
        e.preventDefault();
        // https://www.youtube.com/watch?v=lhMKvyLRWo0&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=10
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