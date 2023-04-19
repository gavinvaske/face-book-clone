import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CircleIcon from '../CircleIcon/CircleIcon';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
        <div className="search-area">
          <SearchIcon />
          <input type="text" className="global-search-input-field" />
        </div>
      </div>
      <div className="middle-navbar">
        <IconButton >
          <HomeIcon sx={{fontSize: '48px'}}/>
        </IconButton>
        <IconButton >
          <PlayCircleIcon sx={{fontSize: '48px'}} />
        </IconButton>
        <IconButton >
          <Diversity3Icon sx={{fontSize: '48px'}} />
        </IconButton>
        <IconButton >
          <SportsEsportsIcon sx={{fontSize: '48px'}} />
        </IconButton>
      </div>
      <div className="right-navbar">
        <CircleIcon Icon={AppsIcon} />
        <CircleIcon Icon={ModeCommentIcon} />
        <CircleIcon Icon={NotificationsIcon} />
        <CircleIcon Icon={PersonIcon} />
      </div>
    </div>
  )
}