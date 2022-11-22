import { useRef, useState } from "react";

function Seaded() {                // null ehk seda v6tit ei eksisteeri localStorage
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");
            // getItem v6tab viimase .setItem-i  ->
            // kui pole kunagi tehtud .setItem, siis .getItem annab nulli-i ehk tyhjuse

    const emailRef = useRef();
    const telefonRef = useRef();       
    
    const uuendaEmaili = () => {
        localStorage.setItem("email", emailRef.current.value);
    };
    const uuendaTelefoni = () => {
        localStorage.setItem("telefon", telefonRef.current.value);
    };
    
   // const muudaKeelEE = () => {          // function muudaKeel() {}
      //  uuendaKeel("est")
      //  localStorage.setItem("keel", "est");
   // };       

  //  const muudaKeelENG = () => {
   //     uuendaKeel("eng")
   //     localStorage.setItem("keel", "eng");
  //  }; 

   const muudaKeel = (uusKeel) => {
        uuendaKeel(uusKeel)
        localStorage.setItem("keel", uusKeel);
   }; 





    return (
    <div>
        <label>Meie e-mail</label>
        <input defaultValue={localStorage.getItem("email")} ref={emailRef} type="text" />
        <button onClick={uuendaEmaili} >Sisesta</button>
        <br />
        <label>Meie telefon</label>
        <input defaultValue={localStorage.getItem("telefon")} ref={telefonRef} type="text" />
        <button onClick={uuendaTelefoni} >Sisesta</button>
        <br />

        <div>------------------------------------------</div>
        <button onClick={() => muudaKeel("est")}>EE</button>
        <button onClick={() => muudaKeel("eng")}>ENG</button>
        <button onClick={() => muudaKeel("rus")}>RU</button>
        { keel === "est" && <div>Vaatad eesti keelset veebisaiti</div>}
        { keel === "eng" && <div>Vaatad inglise keelset veebisaiti</div>}
        { keel === "rus" && <div>Vaatad vene keelset veebisaiti</div>}
    </div> );
}

export default Seaded;