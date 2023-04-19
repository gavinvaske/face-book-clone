import React from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import QuickActions from '../QuickActions/QuickActions';
import Feed from '../Feed/Feed';
import SocialSidePanel from '../SocialSidePanel/SocialSidePanel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-body">
        <QuickActions />
        <Feed />
        <SocialSidePanel />
      </div>
    </div>
  );
}

export default App;
