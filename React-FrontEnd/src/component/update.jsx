import React, { Component } from 'react';
import Axios from 'axios';
class Update extends Component {
    state={
        projectName:'',
        projectDescription:'',
    
    
      }
     
    
      componentDidMount() {
          Axios.get("http://localhost:8081/test/api/v1/project/" +this.props.match.params.id)
          .then(res=>
            {this.setState({
                projectName:res.data.projectName,
                projectDescription:res.data.projectDescription
            })
        
            })  }
            handleChange1=(e)=>{
                this.setState({projectName: e.target.value});
              }
            
            
              handleChange2=(e)=>{
                this.setState({projectDescription: e.target.value});
              }
              getlist=()=>{
                  this.props.history.push("/projectlist")
              }
        
             
    handleadd=(e)=>{
      // e.preventDefault();
      Axios.put("http://localhost:8081/test/api/v1/project/"  +this.props.match.params.id ,{projectName:this.state.projectName,projectDescription:this.state.projectDescription})
      .then(result=>
        {
            console.log('sgdfdg'+result);  
        })
        
    }
    //   handleUpdate=(id)=>{
    //     console.log(id)
    //     Axios.put("http://localhost:8081/test/api/v1/project/");
    //     window.location.reload(true);
    // }
  
    
   
   
    render() { 
        return ( 
            <div>
             
              <div class="maindiv">
               <div class="form-style-5">
<form onSubmit={this.handleadd}>
<fieldset>
<legend><span className="number">*</span> Project Update</legend>
<input type="text" name="projectName" placeholder="Project Name*" value={this.state.projectName} onChange={this.handleChange1}/>

<textarea name="projectDescription" placeholder="Project Description" value={this.state.projectDescription} onChange={this.handleChange2} > </textarea>

</fieldset>

<div className="tb"><table>
  <tr>
    <th><input type="submit"value="Add" /></th>
    <th><input type="button" value="back" onClick={this.getlist}/></th>
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
 
export default Update;