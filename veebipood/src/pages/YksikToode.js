import { useParams } from "react-router-dom";

function YksikToode() {
    const tooted = JSON.parse (localStorage.getItem("tooted")) || [];
    const urlParameetrid = useParams();
    const leitudToode = tooted[urlParameetrid.j2rjekorraNumber];

    return ( 
    <div>
        {/* <div>{tooted}</div>
        <div>{urlParameetrid.j2rjekorraNumber}</div> */}
       {leitudToode !== undefined && <div>
        <img src={leitudToode.pilt} alt="" />
        <div>{leitudToode.nimi}</div>
        <div>{leitudToode.hind}</div>
        <div>{leitudToode.aktiivne}</div>
        </div>}
       { leitudToode === undefined && <div>Toodet ei leitud</div>}
        </div> );
}

export default YksikToode;