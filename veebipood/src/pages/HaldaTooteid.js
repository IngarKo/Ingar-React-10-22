import { useState } from "react";
import { Link } from "react-router-dom";

function HaldaTooteid() {
    const [tooted , muudaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || [] );

        const kustutaToode = (klikitudIndex) => {
            tooted.splice(klikitudIndex,1);
            muudaTooted(tooted.slice()); // HTML-i muutmiseks
            localStorage.setItem("tooted", JSON.stringify(tooted)); // salvestuseks (hiljem andmebaas)
        };
    
    return ( 
    <div>
        <div>{tooted.map((element, index) => 
            <div key={index} className={element.aktiivne === true ? "aktiivne" : "mitteaktiivne"}>
            <img src={element.pilt} alt="" />
            <div>{element.nimi}</div>
            <div>{element.hind}</div>
            
                <button onClick={() => kustutaToode(index)} >x</button>
                <Link to={"/muuda/" + index}>
                    <button>Muuda</button>
                </Link>
            </div>)}
        </div>
    </div> );
}

export default HaldaTooteid;