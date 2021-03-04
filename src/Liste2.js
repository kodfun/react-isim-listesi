//rfce [tab] : react function export component
import React, {useContext} from 'react'
import UygulamaContext from './uygulama-context'

function Liste2() {
    const ctx = useContext(UygulamaContext);
    return (
        <ol>
            { ctx.adlar.map((v,i) => <li key={ i }>{ v }</li>)}
        </ol>
    );
}

export default Liste2
