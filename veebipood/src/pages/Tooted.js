import { useState } from "react";
import { Link } from "react-router-dom";


function Tooted() {
    const [tooted, muudaTooted] = useState(JSON.parse (localStorage.getItem("tooted")) || []);

    const lisaOstukorvi = (klikitudToode) => {
        let ostukorvLS = localStorage.getItem("ostukorv");
        ostukorvLS = JSON.parse(ostukorvLS) || [];
        ostukorvLS.push(klikitudToode);
        ostukorvLS = JSON.stringify(ostukorvLS);
        localStorage.setItem("ostukorv", ostukorvLS)
        
    };

    const sorteeriAZ = () => {
        tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
        muudaTooted(tooted.slice())
    };

    const sorteeriZA = () => {
        tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
        muudaTooted(tooted.slice())
    };

    const sorteeriHindKasvavalt = () => {
        tooted.sort((a,b) => a.hind - b.hind);
        muudaTooted(tooted.slice())
    };

    const sorteeriHindKahanevalt = () => {
        tooted.sort((a,b) => b.hind - a.hind);
        muudaTooted(tooted.slice())
    };

    const sorteeriUuedEes = () => {
        tooted.sort((a,b) => a.lisamiseAeg.localeCompare(b.lisamiseAeg));
        muudaTooted(tooted.slice())
    };

    const sorteeriUuedTaga = () => {
        tooted.sort((a,b) => b.lisamiseAeg.localeCompare(a.lisamiseAeg));
        muudaTooted(tooted.slice())
    };
    const sorteeriNimiKasvavalt = () => {
        tooted.sort((a,b) => a.nimi.length - b.nimi.length);
        muudaTooted(tooted.slice())
    };

    const sorteeriNimiKahanevalt = () => {
        tooted.sort((a,b) => b.nimi.length - a.nimi.length);
        muudaTooted(tooted.slice())
    };
    const tootedAndmebaasist = (JSON.parse (localStorage.getItem("tooted")) || [])
    .filter(element => element.aktiivne === true);

    const filtreeri = (algusT2ht) => {
        const tulem = tootedAndmebaasist.filter(element => element.nimi.startsWith(algusT2ht))
        muudaTooted(tulem)
    };

    const eesnimeT2hed = [...new Set (tootedAndmebaasist.map(element => element.nimi.charAt(0)))];

    return ( 
    <div>
        {/* <button onClick={() => filtreeri("H")}>H</button>
        <button onClick={() => filtreeri("M")}>M</button>
        <button onClick={() => filtreeri("F")}>F</button>
        <button onClick={() => filtreeri("J")}>J</button>
        <button onClick={() => filtreeri("K")}>K</button> */}
        { eesnimeT2hed.map((element, i) => <button key={i} onClick={() => filtreeri(element)}>{element}</button>)}
        
        <div>{tooted.length} tk</div>
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
        <button onClick={sorteeriZA} >Sorteeri Z-A</button>
        <button onClick={sorteeriHindKasvavalt} >Sorteeri hind kasvavalt</button>
        <button onClick={sorteeriHindKahanevalt} >Sorteeri hind kahanevalt</button>
        <button onClick={sorteeriUuedEes} >Sorteeri uued ees</button>
        <button onClick={sorteeriUuedTaga} >Sorteeri uued taga</button>
        <button onClick={sorteeriNimiKahanevalt} >Sorteeri nimi kahanevalt</button>
        <button onClick={sorteeriNimiKasvavalt} >Sorteeri nimi kasvavalt</button>

        {tooted.filter(element => element.aktiivne === true).map((element, index) => 
        <div className="toode" key={index}>
            <Link to={"/toode/" + index}>
            <img src={element.pilt} alt="" /> 
            <div>{element.nimi}</div>
            <div>{element.hind}</div>
            </Link>
            
            <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
            </div>)}
    </div>
     );
}

export default Tooted;