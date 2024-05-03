import '../../CSS/ProjectTable.css'
import Navigation from '../Navigation';

export default  function ProjectTable()
{

    return (
        <>
        <Navigation/>
        <h2>Projects</h2>
        <div className="project-table">
           
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                 
                        <tr key="projectid">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                  
                </tbody>
            </table>
        </div>
   
        </>
      ); 
}


