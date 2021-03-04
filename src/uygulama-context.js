import React from 'react'
// https://tr.reactjs.org/docs/context.html#updating-context-from-a-nested-component

const UygulamaContext = React.createContext({
    isimler: ["ali", "can", "ufuk"], // default values,
    isimEkle: (isim) => this.isimler.push(isim)
});

export default UygulamaContext;