
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectForm from "./components/ProjectForm";
import Feedback from "./components/Feedback";
import Navigation from "./components/Navigation";

import SignUpPage from "./components/Signnup";
import ProjectTable from "./components/ProjectTable";
import FeedbackDisplay from "./components/FeedbackDisplay";
import SuccessNotification from "./components/SuccessNotification";
import ErrorNotification from "./components/ErrorNotification";

export default function Home() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/projectform" element={<ProjectForm />} />
        <Route path="/feedback" element={<Feedback />} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignUpPage />} />
        <Route path="/projecttable" element={<ProjectTable />} />
        <Route path="/feedbackdisplay" element={<FeedbackDisplay />} />
        <Route path="/successnotification" element={<SuccessNotification />} />
        <Route path="/errornotification" element={<ErrorNotification />} /> */}
      
      </Routes>
    </BrowserRouter>
  );
}
