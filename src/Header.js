import React from 'react';
import './Header.css';
import {
    HomeIcon,
    UserGroupIcon,
    UserCircleIcon,
} from '@heroicons/react/solid';

import {
    PuzzleIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';

 
function Header() {
  return ( <div className='header'>
      <div className='header__left'>
          <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png' alt='facebook logo'/>
        <div className='header__input'>
            <SearchIcon className='search'/>
            <input type='text' placeholder='Search Facebook'/>
        </div>
      </div>

      <div className='header__middle'>
          <div className='header__option'>
              <HomeIcon className='home'/>
          </div>

          <div className='header__option'>
              <PlayIcon className='watch'/>
          </div>

          <div className='header__option'>
              <ShoppingCartIcon className='marketplace'/>
          </div>

          <div className='header__option'>
              <UserGroupIcon className='groups'/>
          </div>

          <div className='header__option'>
              <PuzzleIcon className='games'/>
          </div>
      </div>

      <div className='header__right'></div>
        <div className='header__info'>
            <UserCircleIcon className='user'/>
            <h4>Danilov Tatiana</h4>
        </div>
    </div>
  );
}

export default Header
