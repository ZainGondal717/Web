import '../CSS/ProjectTable.css'
export default  function ProjectTable()
{

    return (
        <div className="project-table">
            <h2>Project Table</h2>
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
    );
}


