import React, { useEffect, useState } from 'react'
import './App.css';
import CountUp from 'react-countup';
import audio from './tone.mp3';
import love from './love.mp3';
export default function Home() {
    // useStates
    
    const [title,setTitle]=useState("WARNING")
    const [msg, setMsg]= useState("ERROR")
    const [result, setResult] = useState(0)
    const [user, setUser] = useState({
        firstPartner:"",
        secondPartner:""
    })


    // onChange function
    const onChanges=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
    }

    // click to hide on button
const hides=()=>{
    let alter=document.getElementById('alter');
    alter.style.display="block";
}




// result generate after clicking on button
    const generateResult=(e)=>{
e.preventDefault();

// getting audio
const audioEl = document.getElementsByClassName("audio-element")[0];
const audioEl1 = document.getElementsByClassName("audio-element1")[0];

// generating random number
let num=Math.floor(Math.random() * 101);


// checking weather your name is empty or not
if(!user.firstPartner){
    setMsg("ENTER YOUR NAME");
    audioEl.play()
return setTimeout(hides,0);   
}


// second partner field empty or not
if(!user.secondPartner){
    audioEl.play()
    setTimeout(hides,0); 
   return setMsg("ENTER YOUR PARTNER NAME");

}
// your name must be contain atleast 3 character's
if(user.firstPartner.length<3){
    audioEl.play()
    setTimeout(hides,0); 
   return setMsg("YOUR NAME MUST CONTAIN ATLEAST 3 CHARACTER'S");
}
// your partner name must be contain atleast 3 character's

if(user.secondPartner.length<3){
    audioEl.play();
    setTimeout(hides,0); 
   return setMsg("YOUR PARTNER'S NAME MUST CONTAIN ATLEAST 3 CHARACTER'S");
}

// if all condition match then show the result
setResult(num);
audioEl1.play();
let alter=document.getElementById('alter');
let btn=document.getElementById('btn');
btn.style.display="block";
alter.style.display="none";


   
    }


    // hide after clicking on button
const hide=()=>{
    let alter=document.getElementById('alter');
    alter.style.display="none"
}


useEffect(()=>{
    setInterval(() => {
        let alter=document.getElementById('alter');
        alter.style.display="none"   
    }, 6000);
  
},[])

// clear all
const clear=()=>{
    setResult("0")
    setUser({...user,firstPartner:"",secondPartner:""});
    let btn=document.getElementById('btn');
btn.style.display="none";
}

    return (
        <div className="home">
            <div className="form">
                <div className="title">LOVE CALCULATOR</div>
                <div className="user">
                <input type="text" name="firstPartner" id="firstPartner" placeholder="ENTER YOUR NAME" value={user.firstPartner} onChange={onChanges}/>
                <span>❤️</span>
                <input type="text" name="secondPartner" id="secondPartner" placeholder="ENTER YOUR PARTNER'S NAME" value={user.secondPartner} onChange={onChanges}/>
                </div>
<button onClick={generateResult}>Check</button>
            <div id="result"> <span>
            <CountUp
  start={0}
  end={result}
  duration={2.75}
>

</CountUp>%
            </span>
            
            
            {(result>=80)?'😍':(result>=60)?'😃':(result>=45)?'🤔':(result>=30)?'😒':(result>=10)?'😢':(result>=1)?'🤢':''}</div> 
              <div className="bottom">GOD BLESS YOUR RELATIONSHIP</div>
            </div>

            <div className="alter" id="alter">
            <div className="top"> <span>{title}</span> <i className="fas fa-times" onClick={hide}></i></div>
            <div className="msg">{msg}</div>
        </div>
        <audio className="audio-element">
          <source src={audio}></source>
        </audio>
        <audio className="audio-element1">
          <source src={love}></source>
        </audio>

        <div className="btn" onClick={clear} id="btn">
        Check Another

        </div>


                  </div>
    )
}
