import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
       <Header/>
       <Sidebar/>         



            </div>
         );
    }
}
 
export default Dashboard;