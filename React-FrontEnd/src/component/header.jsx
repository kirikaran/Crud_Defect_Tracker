import React, { Component } from 'react';
import { isConditional } from '@babel/types';

class Header extends Component {
    state = {  }
    render() { 
        return ( 

         
<div className="header">

  <a href="#default" className="logo"></a>
  <div className="header-right"> 
  <b className="active" href="#contact"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; DEFECT TRACKER</b>
   
    <b href="#about">LOGIN</b> 
    
   
  </div>
</div>

           
         );
    }
}
 
export default Header;