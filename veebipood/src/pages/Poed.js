import {useRef,useState} from "react";
import poedFailist from "../poed.json"

function Poed() {
    //
    const [poed, uuendaPoed] = useState(
        poedFailist
    );
    const poodRef = useRef(); // nimiViide
    const aegRef = useRef(); // aegViide

    const sorteeriAZ = () => {
        //stringid: poed.sort ((a,b) => a.v6ti.localCompare(b.v6ti));
        // stringid: poed.sort();
        poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
        // console.log(poed);
        uuendaPoed(poed.slice());
    };

    const sorteeriZA = () => {
           // poed.sort((a,b) => b.localeCompare(a));

           poed.sort((a,b) => b.nimi.localeCompare(a.nimi));
        //poed.sort();
       // poed.reverse();
        console.log(poed);
        uuendaPoed(poed.slice());
    };

    const filtreeriLopuJargi = () => {
        const tulem = poed.filter( pood => pood.nimi.endsWith("mäe"));
        uuendaPoed(tulem)

    }

    const sorteeriTahtedeJargi = () => {
        poed.sort((a,b) => a.nimi.length - b.nimi.length);
        uuendaPoed(poed.slice());
    };

    const filtreeriIJargi = () => {
        const tulem = poed.filter( pood => pood.nimi.includes("i") || pood.nimi.includes("I"));
        uuendaPoed(tulem)

    };

    

    
    const orginaal = () => {
        uuendaPoed(poedFailist)
    };

    const muudaIgaYht = () => {
        const tulem = poed.map (element => {return{"nimi": "--" + element.nimi, "aeg": element.aeg}});
        uuendaPoed(tulem);
    };

    const kustuta = (j2rjekorraNumber) => {
        poed.splice(j2rjekorraNumber, 1); // mitmendat kustutan ja mitu tk kustutan
        uuendaPoed(poed.slice());
    };

   

    const lisa = () => {
        poed.push({"nimi": poodRef.current.value, "aeg": aegRef.current.value});
        uuendaPoed(poed.slice())
    };

    return ( 
    <div>
        <label>Uue poe nimi</label> <br />
        <input ref={poodRef} type="text" /> <br />
        <label>Uue poe lahtiolekuaeg</label> <br />
        <input ref={aegRef} type="text" /> <br />
        <button onClick={lisa} >Lisa uus</button> <br />
        <br/>
        <button onClick={sorteeriTahtedeJargi} >Sorteeri tähtede järgi</button>
        <button onClick={sorteeriZA} >Sorteeri Z-A</button>
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
        <button onClick={filtreeriLopuJargi} >Jäta alles, kellel lõpus "mäe"</button>
        <button onClick={filtreeriIJargi} >Jäta alles, kellel on "I"</button>
        <button onClick={orginaal} >Pane tagasi</button>
        <button onClick={muudaIgaYht} >Pane igayhele -- ette</button>
        {poed.map( (pood, index )=> 
            <div key={index}>
                {pood.nimi} - {pood.aeg}
                <button onClick={() => kustuta(index)} >x</button>
                </div> )}
        
        <div>----------------------</div>
        <div>Lasnamäe</div>
        <div>Kesklinn</div>
        <div>Mustamäe</div>
        <div>Õismäe</div>
        <div>Kristiine</div>
        <div>Põhja-Tallinn</div>
        <div>Kakumäe</div>

        {["BMW", "Nobe", "Tesla"].map( (auto, j2rjekorraNumber) => <div key={j2rjekorraNumber} > {auto} </div>)}
    </div> );
}

export default Poed;