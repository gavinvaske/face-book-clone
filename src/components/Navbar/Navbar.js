import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CircleIcon from '../CircleIcon/CircleIcon';

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
          <HomeIcon />
        </IconButton>
        <IconButton >
          <PlayCircleIcon />
        </IconButton>
        <IconButton >
          <Diversity3Icon />
        </IconButton>
        <IconButton >
          <SportsEsportsIcon />
        </IconButton>
      </div>
      <div className="right-navbar">
        <CircleIcon Icon={HomeIcon} />
        <CircleIcon Icon={HomeIcon} />
        <CircleIcon Icon={HomeIcon} />
        <CircleIcon Icon={HomeIcon} />
      </div>
    </div>
  )
}