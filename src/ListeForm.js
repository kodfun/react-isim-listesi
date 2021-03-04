import React, { useState } from "react";

function ListeForm(props) {
    const [ad, setAd] = useState("");
    const isimEklendiginde = e => {
        e.preventDefault();
        props.isimEkle(ad);
        setAd("");
    };

    return (
        <form onSubmit={isimEklendiginde}>
            <input type="text" value={ad} onInput={(e)=>setAd(e.target.value)} required />
            <button>Ekle</button>
        </form>
    );
}

export default ListeForm;