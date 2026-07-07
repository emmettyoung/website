import { useNavigate } from "react-router-dom";
import { StepBack } from "lucide-react";
import { profileLinks, SelectProfileLinks } from "./SelectProfileLinks";

// Thin page wrapper so /contact has its own route. Reuses your existing
// SelectProfileLinks component/data as-is.
export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <ul className="contact-return-to-home">
        back to home
      </ul>
      <StepBack
        className="back-arrow"
        size={28}
        onClick={() => navigate("/")}
      />
      <ul className="project-header">
        Contact Information
      </ul>
      <SelectProfileLinks profileLinks={profileLinks} />
    </div>
  );
}