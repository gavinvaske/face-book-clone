import React from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import QuickActions from '../QuickActions/QuickActions';
import Feed from '../Feed/Feed';
import SocialSidePanel from '../SocialSidePanel/SocialSidePanel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateMessageForm from '../CreateMessageForm/CreateMessageForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectShouldShowSendMessageModal } from '../../features/popup/popupSlice';
import { toggleSendMessageForm } from '../../features/popup/popupSlice';

function App() {
  const shouldShowSendMessageModal = useSelector(selectShouldShowSendMessageModal);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <div className="app-body">
        <QuickActions />
        <Feed />
        <SocialSidePanel />

        


        {shouldShowSendMessageModal 
          ? (<CreateMessageForm />) 
          : (<AddCircleIcon 
              className='create-post-button' 
              sx={{fontSize: '80px'}}
              onClick={() => dispatch(toggleSendMessageForm())}
            />)
        }
      </div>
    </div>
  );
}

export default App;
