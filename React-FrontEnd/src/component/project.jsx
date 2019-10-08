import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import '../App.css';
import Axios from 'axios';

class Project extends Component {
  // constructor(){
  //   super();

  // }
    state = {
      projectName:'',
      projectDescription:'',
     
      }
      
      handleChange1=(e)=>{
        this.setState({projectName: e.target.value });
      }

      handleChange2=(e)=>{
        this.setState({projectDescription: e.target.value });
      }

    componentDidMount() {}
    handleadd=(e)=>{
      // e.preventDefault();
      Axios.post("http://localhost:8081/test/api/v1/project",this.state)
      .then(res=>
      {
      
               console.log("result",res);
              //this.setState({ data: res.data });
              
          })
    }
    render() { 
        return ( 
            <div>
              <Header/>
              <Sidebar/>
              <div class="maindiv">
               <div class="form-style-5">
<form onSubmit={this.handleadd}>
<fieldset>
<legend><span className="number">*</span> Project Info</legend>
<input type="text" name="projectName" placeholder="Project Name*" value={this.state.projectName} onChange={this.handleChange1}/>

<textarea name="projectDescription" placeholder="Project Description" value={this.state.projectDescription} onChange={this.handleChange2} > </textarea>

</fieldset>
<fieldset>

</fieldset>

<div className="tb"><table>
  <tr>
    <th><input type="submit"value="Add" /></th>
    <th><input type="submit" value="Reset" /></th>
  </tr>

</table>




</div>

</form>
</div>

<div className="form-style-7">




</div>
</div>
            </div>
         );
    }
}
 
export default Project;