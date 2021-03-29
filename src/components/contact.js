import React from "react";

const name = 'Thomas';
const avatar = 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg';
const isOnline = true;
const status = isOnline ? 'status-online': 'status-offline'

function Contact() {
    return (
    <div className="Contact">

        <img src={avatar} className="avatar" alt=""></img>

        <div className="Profil">     
            <h4 className="name">{name}</h4>

            <div className="status">
               <div className={status}></div>
               <p className="status-text">{isOnline ? 'online': 'offline'}</p>
            </div>
        </div>
    </div>
  
    );
  }
export default Contact;

