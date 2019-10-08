import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Project from './component/project';
import Defect from './component/defect';
import Dashboard from './component/dashboard';
import ProjectList from './component/projectlist';
import Update from './component/update';



ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route  path='/project' component={Project}/>
      <Route  path='/projectlist' component={ProjectList}/>
      <Route  path='/defect' component={Defect}/>
      <Route  path='/dashboard' component={Dashboard}/>
      <Route  path='/update/:id' component={Update}/>
  
      
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
