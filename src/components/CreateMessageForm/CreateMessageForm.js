import React from 'react';
import './CreateMessageForm.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { toggleSendMessageForm } from '../../features/popup/popupSlice';
import { IconButton } from '@mui/material';

export default function CreateMessageForm() {
  const dispatch = useDispatch();
  
  return (
    <div className="create-message-form">
      
      <div className="header">
        <h2>New Message</h2>
        <IconButton onClick={() => {dispatch(toggleSendMessageForm())}}>
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  )
}