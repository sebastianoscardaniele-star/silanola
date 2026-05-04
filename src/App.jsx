
import {useState,useEffect} from "react";

const TEAMS=[
{code:"ARG",name:"Argentina",group:"J"},
{code:"BRA",name:"Brasil",group:"C"},
{code:"FRA",name:"Francia",group:"I"},
{code:"GER",name:"Alemania",group:"E"},
{code:"ESP",name:"España",group:"H"},
{code:"USA",name:"Estados Unidos",group:"D"}
];

function flag(c){return `https://flagcdn.com/w80/${c.toLowerCase().slice(0,2)}.png`}

export default function App(){
const [tab,setTab]=useState("album");
const [data,setData]=useState(()=>JSON.parse(localStorage.getItem("data")||"{}"));

useEffect(()=>localStorage.setItem("data",JSON.stringify(data)),[data]);

function toggle(team,i){
 setData({...data,
  [team]:(data[team]||[]).map((v,idx)=>idx===i?!v:v)
 });
}

return <div className="app">
<header>
<h1>Panini 2026 PRO</h1>
<div>
<button onClick={()=>setTab("album")}>Álbum</button>
<button onClick={()=>setTab("calendar")}>Calendario</button>
</div>
</header>

{tab==="album" && <div className="grid">
{TEAMS.map(t=>{
 const arr=data[t.code]||Array(20).fill(false);
 return <div className="team" key={t.code}>
  <img src={flag(t.code)}/>
  <h3>{t.name}</h3>
  <span>Grupo {t.group}</span>
  <div className="stickers">
   {arr.map((v,i)=>
    <div key={i} className={v?"sticker on":"sticker"} onClick={()=>toggle(t.code,i)}>{i+1}</div>
   )}
  </div>
 </div>
})}
</div>}

{tab==="calendar" && <div className="calendar">
<h2>Calendario</h2>
<div className="match">Argentina vs Brasil - 20 Junio</div>
<div className="match">Francia vs Alemania - 21 Junio</div>
</div>}

</div>
}
