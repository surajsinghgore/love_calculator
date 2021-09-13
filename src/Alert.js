import React, { useEffect, useState } from 'react'
import './App.css'
export default function Alert(props) {
    const [msg, setMsg] = useState({
        title:props.title,
        msgs:props.msg
    })

const hide=()=>{
    let alter=document.getElementById('alter');
    alter.style.display="none"
}
    useEffect(() => {
      msg.msgs=props.msg
      msg.title=props.title
    }, [msg])
    return (
        <div className="alter" id="alter">
            <div className="top"> <span>{msg.title}</span> <i className="fas fa-times" onClick={hide}></i></div>
            <div className="msg">{msg.msgs}</div>
        </div>
    )
}
