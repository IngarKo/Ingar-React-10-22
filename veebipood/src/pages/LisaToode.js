import { useRef, useState } from "react";

function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa uus toode!");
    const nimiRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivneRef = useRef();
    // alati kui teen refi, panen ta kuhugi input sisse
    // ja alatu kui teen inputi, panen Reactis talle ref sisse
    // siin saab kasutada ka functionit toimib samamoodi

    const lisaUusToode = () => {
        if (nimiRef.current.value === "")  {
            muudaSonum("Toodet lisades peab nime sisestama");
        } else {
            muudaSonum("Lisasid uue toote " + nimiRef.current.value);
            // const tootedLS = JSON.parse (localStorage.getItem("tooted"));
          //  tootedLS.push(nimiRef.current.value);
         //   localStorage.setItem("tooted", JSON.stringify (tootedLS) );

            let tooted = localStorage.getItem("tooted");    // 1. "["Tesla", "Nobe"]" 2. null
            tooted = JSON.parse(tooted) || [];              // 1.  ["Tesla", "Nobe"]  2. []
            const uusToode = {
                "nimi": nimiRef.current.value,
                "hind": Number(hindRef.current.value),
                "pilt": piltRef.current.value,
                "aktiivne": aktiivneRef.current.checked,
                "lisamiseAeg": new Date()
            }
            tooted.push(uusToode);             // 1. ["Tesla", "Nobe", "BMW"] . 2. ["BMW"]
            tooted = JSON.stringify(tooted);                // 1.  ["Tesla", "Nobe", "BMW"] . 2. "["BMW"]"
            localStorage.setItem("tooted", tooted);         // Key  |   Value
        }                                       //1.     "tooted" .  |   "["Tesla" , "Nobe", ""]"
    };
            // 1. v6tan LocalStorage-st k6ik varasemad v22rtused(.getItem("v6ti"))
            // 2. v6tan LocalStorage-st saadud v22rtusest jutum2rgid maha ( JSON.parase())
            // 3. lisan yhe toote juurde ( .push())
            // 4. panen jutum2rgid tagasi (JSON.stringify())
            //5. oanen tagasi LocalStorage-sse ( .  setItem("v6ti", uus_v22rtus) .  )


    return ( 
        <div>
            <div>{sonum}</div>
            <label>Toote nimi</label> <br />
            <input ref={nimiRef} type="text" /> <br />
            <label>Toote hind</label> <br />
            <input ref={hindRef} type="number" /> <br />
            <label>Toote pilt</label> <br />
            <input ref={piltRef} type="text" /> <br />
            <label>Toote aktiivsus</label> <br />
            <input ref={aktiivneRef} type="checkbox" /> <br />
            <button onClick={() => lisaUusToode()} >Vajuta</button> <br />       
        </div> );
}

export default LisaToode;