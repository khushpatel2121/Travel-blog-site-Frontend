import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../src/redux/userSlice';

function Navbar() {

  const {currentUser} =  useSelector(state=>state.user)

  console.log(currentUser)


  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BookNPlay
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
         
                {currentUser  ? (  <button className='nav-links-mobile' onClick={()=>dispatch(logout())}>logout</button>
                
                ) : (
                  <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
                >Sign Up</Link>
                )
                }
             
            </li>
          </ul>

          {currentUser ? (   <>
                {button && <Button buttonStyle='btn--outline'  onClick={()=>dispatch(logout())}>logout</Button>}
                </>
                ) : (
                  <Link to='/sign-up'>
                  {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
              </Link>
                )
                }
          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
