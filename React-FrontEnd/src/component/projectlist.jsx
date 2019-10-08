import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './projectlist.css';
import Axios from 'axios';
class ProjectList extends Component {
    state = {data:[]}

    handleDelete=(id)=>{
        console.log(id)
        Axios.delete("http://localhost:8081/test/api/v1/project/"+id);
        window.location.reload(true);
    }
    
    componentDidMount() {
        Axios.get("http://localhost:8081/test/api/v1/project")
        .then(res=>
            {
                if(res.status==200){
                    console.log("data get");
                }

                this.setState({ data: res.data });
                
            })
        }
       
       
    
        getToUpdate= (id) =>{
            this.props.history.push(`/update/${id}`);
            console.log(this.props.match.params.id);
        }
        
        render() {  
           // console.log("state",this.state.data)
        return ( 
            
            <div>

                <Header/>
                <Sidebar/>
<div>
                <div class="form-style-6">
                
<table>
<a href="/project" ><th className="btn1" > <input type="submit"   value="Add"  /></th> </a>


  <tr>
  <th>Project ID</th>
  <th>Project Name</th>
  <th>Project Discription</th>
  <th>Action</th>
  </tr>
  

{this.state.data.map(d=>{
    return(<tr>
        <td>{d.id}</td>
        <td>{d.projectName}</td>
        <td>{d.projectDescription}</td>
     
        <td><input type="button" value="Delete" onClick={()=>this.handleDelete(d.id)}/></td>
        <td><a href={`/update/${d.id}`}> <input type="button" value="Update" onClick={() => this.handleGet(d.id)}/> </a> </td>
    </tr>)
})}

  



</table>

                    </div>
                    
            </div>
            </div>
         );
    }
}
 
export default ProjectList;