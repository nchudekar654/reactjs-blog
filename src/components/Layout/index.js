import React from 'react';
import './style.css';
import Demo from '../Navigate/Demo'
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
      <div className="container">
        {props.children}
        <div className="App-rightdiv" style={{flexGrow: 3}}>
           <br/> <Demo />
        </div>
      </div>
      <footer className="App-footer">
        <p>Copyright © TechBlog.com</p>
      </footer>
      </React.Fragment>
    
   )

 }

export default Layout