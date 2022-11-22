import { useState } from "react";

//ffc
function Avaleht() {
    // let
    // var
    const [laigitud, muudaLaigitud] = useState(false);

    // let kogus = 5
    const [kogus, muudaKogus] = useState (5); // useState v6imaldab muuta HTML-i
    const [sonum,muudaSonum] = useState ("");

    function nulli() {
        muudaKogus(0);
        muudaSonum("Kogus nullitud");
    }

    function v2henda() {
        muudaKogus(kogus -1);
        console.log(kogus);
        muudaSonum("Kogus v2hendatud");
    }    
  
    // kogus = kogus = + 1; (mac: shift+alt+a)(windows: ctrl + ä)  edi-----> toggle line comment
    function suurenda() {
        muudaKogus(kogus + 1);
        muudaSonum("Kogus suurendatud");
    }

    // ! kui mul on kopeerimise vead, siis nad tulevad sinna, kus on npm start k2imas
    //      ning lehele ka - localhostis l2heb taust halliks/mustaks - on kirjas, mis on katki

    // ! kui mul on run-time error, siis leht on valge
    //       ja need vead leian hiirega parem kl6ps lehel --> inspect console

    // M@RGID
    // [] <---- useState v6rdusm2rgist vasakul, vasakpoolne komast t2histab muutujat ja parempoolne funktsiooni
    // [] <---- array - veel pole teinud
    // function()   <--- funktsioonide v2ljakutsumiseks, kollase s6na j2rel
    // if ()        <--- t6esuse kontroll
    // =            <--- v22rtuse andmiseks
    // ===          <--- kontrollimiseks kas vasak ja parem pool on v6rdsed       KUI ON V6RDSED
    // !==          <--- kontrollimiseks kas vasak ja parem pool ei ole v6rdsed   KUI EI OLE V6RDSED
    // >            <--- suurem
    // >=           <--- Suure,/v6rdne
    // !true        <--- keerab v22rtuse vastupidiseks   !true ---->        !false ---> true
    // {}           <---   1. koodiblokkide eristamiseks      function nimetus() { <-- algus      lõpp -->}
    //      1. koodiblokkide eristamiseks      if() { <-- algus      lõpp -->} else { <-algus  lõpp->}
    // {}   2. HTML koodiblokis JS    (sealt seest tehakse viide JavaScriptile)   
    //                                                      1)  input ref={}   2) button onClick={}  
    //      2. HTML koodibloki dünaamika (seal sees teen kontrolli, kas näitan või mitte)    { true/false  && <div>  }
    // {}           <--- objektide jaoks ehk väärtuste komplekti kokkusidumiseks
    // &&           <---  kui vasakul on tõde, siis näita parempoolset          true  && <div>Siis näitan</div>
    // ||           <---  kui vasakul on tühjus, siis võta parempoolne          null  ||  "Võtab selle kui on tühjus"
    // null         <---  JavaScriptis tühjus
    // () => {}       <--   Funktsiooni tähis
    // ;              <--   Rea lõpetamise tähis (ei ole kohustuslik)
    return ( 
    <div>
        {/* <button hidden={kogus === 0} onClick={nulli}>Nulli tagasi</button><br/> // avaldis millal peidetakse*/}
        {/*  mul on 2 varianti:
        a) onClick={funktsiooniNimi}
        b) onClick={() => funktsiooniNimi (kaasasaadetud)} */}
        <button onClick={() => muudaLaigitud(!laigitud)} >Muuda laigitut</button>
        { laigitud === true && <img onClick={() => muudaLaigitud(false)} src="/liked.svg" alt="" />}
        { laigitud === false && <img onClick={() => muudaLaigitud(true)} src="/not-liked.svg" alt="" />}
        
        <div>{ sonum }</div>
        { kogus > 0 && <button onClick={nulli}>Nulli tagasi</button>}<br/> {/* avaldis millal n2idatakse */}
        <button disabled={kogus === 0} onClick={v2henda}>-</button>
        <div>{kogus}</div>
        <button onClick={suurenda}>+</button>

    </div> );
}

export default Avaleht;