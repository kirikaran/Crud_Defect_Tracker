import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import '../defect.css';
class Defect extends Component {
    state = {  }
    render() { 
        return (  
            
<div>

    <Header/>
    <Sidebar/>


    
<div className="form-style-5">
<form>
<fieldset>
<legend><span className="number">1</span> Defect Info</legend>
<label for="job">Project Name(ID):</label>
<select id="job" name="field4">

  
  <option value="debate">Debate</option>
  <option value="gaming">Gaming</option>
  <option value="snooker">Snooker</option>
  <option value="other_indoor">Other</option>


</select>       
<input type="text" name="field1" placeholder="Defect Name*"/>

<textarea name="field3" placeholder="Defect Discription"></textarea>
 <label for="job">Severity:</label>
<select id="job" name="field4">

  <option value="fishkeeping">High</option>
  <option value="reading">Medium</option>
  <option value="boxing">Low</option>
 </select>  
 <label for="job">Priority:</label>
<select id="job" name="field4">

  <option value="fishkeeping">High</option>
  <option value="reading">Medium</option>
  <option value="boxing">Low</option>
 

</select>            
</fieldset>

<div className="tb"><table>
  <tr>
    <th><input type="submit"value="Add" /></th>
    <th><input type="submit" value="Reset" /></th>
  </tr>
  <tr>
    <th><input type="submit" value="Delete" /></th>
    <th > <input type="submit"   value="Update"  /></th>
  </tr>
</table>




</div>

</form>
</div>
</div>

        );
    }
}
 
export default Defect;