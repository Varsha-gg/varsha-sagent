import React from "react";

import './Navigation.css';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';




function Navigation(){

 

    return(

        <nav class="navbar" >

            <h1>RAPPORTS</h1>

            {/*<img src={logo} class='logocls' alt="logo" />*/}

           < ul class='nav-lists'>

            <li>  

                <div><HomeIcon/></div>

                <a href="/Home" class="Home">HOME</a>

               

            </li>

            <li>

                <div><NotificationsIcon/></div>

            <a href="/Notification" class="Notification">NOTIFICATION </a>

            </li>

            <li>

                <div><MessageIcon/></div>

             <a href="/Message" class="Message">Message </a>

            </li>

            <li>

                <div><MenuIcon/></div>

              <a href="/Menu" class="Menu">Menu</a>

            </li>

            </ul>

        </nav>

    );

}

export default Navigation;