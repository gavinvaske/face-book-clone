import React from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import QuickActions from '../QuickActions/QuickActions';
import Feed from '../Feed/Feed';
import SocialSidePanel from '../SocialSidePanel/SocialSidePanel';
import CircleIcon from '../CircleIcon/CircleIcon';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-body">
        <QuickActions />
        <Feed />
        <SocialSidePanel />
      </div>
        <AddCircleIcon className='create-post-button' sx={{fontSize: '80px'}} />
    </div>
  );
}

export default App;
