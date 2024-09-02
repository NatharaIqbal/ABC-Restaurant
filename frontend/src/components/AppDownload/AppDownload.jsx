import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For a Better Experience, Download <br /> ABC App 👩🏻‍🍳</p>
      <div className="app-download-platforms">
        <a href="https://play.google.com/store/apps/details?id=in.myinnos.AppManager&hl=en&pli=1" target="_blank" rel="noopener noreferrer">
          <img src={assets.play_store} alt="Google Play Store" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={assets.app_store} alt="Apple App Store" />
        </a>
      </div>
    </div>
  );
}

export default AppDownload;
