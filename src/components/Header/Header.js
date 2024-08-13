import React from 'react';
import styles from './Header.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { toast } from 'react-toastify';
import {auth} from '../../firebaseConfig/firebaseConfig';
import { signOut } from "firebase/auth";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        z<span>Shop</span>.
      </h2>
    </Link>
</div>
)

const activeLink =  ({isActive}) =>
   (isActive ? `${styles.active}` : "")

const cart = (
  <span className={styles.cart}>
    <NavLink to="/cart" className={activeLink}>
        Cart
        <FaShoppingCart size={20}/>
        <p>0</p> 
     </NavLink>
  </span>
)

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const navigate = useNavigate()

  const handleLogOut = () => {
    signOut(auth).then(() => {
      toast.success("LogOut Successfully.")
      navigate("/")
    })
    .catch(error => {
      toast.error(error.message)
    })
  }
  return (
    <header >
      <div className={styles.header}>
        {logo} 
     
      <nav className={
        showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
      }>
       <div className={
          showMenu ? 
          `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
           :
          `${styles["nav-wrapper"]}`
          }
          onClick={hideMenu}
          >
        </div>

        <ul onClick={hideMenu}>
          <li className={styles["logo-mobile"]}>
            {logo}
            <FaTimes size={25} color="#fff" onClick={hideMenu} />
          </li>
          
          <li>
            <NavLink to="/" className={activeLink}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeLink}>Contact Us</NavLink>
          </li>  
        </ul>
   
        <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>Login</NavLink>
              <NavLink to="/register" className={activeLink} >Resgister</NavLink>
              <NavLink to="/order-history" className={activeLink}>My orders</NavLink>
              <NavLink to="/logOut"  onClick={ handleLogOut}>Logout</NavLink>
            
            </span>

           {cart}
        </div>
      </nav>
     

    <div className={styles["menu-icon"]}>
        {cart}
        <HiOutlineMenuAlt3  size={30} onClick={toggleMenu} />
    </div>
    </div>
    </header>
  )
}

export default Header