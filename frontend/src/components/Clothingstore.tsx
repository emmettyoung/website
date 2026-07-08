import { StepBack } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ClothingStore() {

  const navigate = useNavigate();

    return (
      <div className="clothing-store-page">
        <div
        className="contact-return-to-home"
        onClick={() => navigate("/")}
      >
        <StepBack size={28}/>
        back to home
      </div>
        <ul className="project-header">
          cool things coming soon
        </ul>
      </div>
    );
  }