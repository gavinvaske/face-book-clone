import React from 'react';
import './Post.scss';
import { Avatar, Icon, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';

export default function Post({title, body}) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="left-post-header">
          <Avatar />
          <div className="post-header-description">
            <p className="post-owner">Jane Doe</p>
            <p className="post-date">Yesterday at 2:20 PM</p>
          </div>
        </div>
        <div className="right-post-header">
          <div className="post-header-icons">
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="post-body">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
      </div>
    </div>
  )
}