
import '../CSS/projectForm.css';
import Navigation from './Navigation';


export default function ProjectForm() {
  return (
    <>
    <Navigation/>
    <form className="form-container">
      <div className="form-group">
        <input type="text" name="projectName" placeholder="Project Name" required />
      </div>
      <div className="form-group">
        <textarea name="description" placeholder="Description" required />
      </div>
      <div className="form-group">
        <input type="date" name="startDate" placeholder="Start Date" required />
      </div>
      <div className="form-group">
        <input type="date" name="endDate" placeholder="End Date" required />
      </div>
      <div className="form-group">
        <input type="text" name="fundingDetails" placeholder="Funding Details" required />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
    
  );
}
