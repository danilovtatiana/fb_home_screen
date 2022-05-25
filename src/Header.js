import React from 'react';
import './Header.css';
import {
    BellIcon, 
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppinCartIcon,
} from '@heroicons/react/outline';

 
function Header() {
  return ( <div className='header'>
      <div className='header__left'>
          <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png' alt='facebook logo'/>
        <div className='header__input'>
            <SearchIcon/>
            <input type='text' placeholder='Search Facebook'/>
        </div>
      </div>

      <div className='header__middle'></div>

      <div className='header__right'></div>
      
    </div>
  );
}

export default Header
