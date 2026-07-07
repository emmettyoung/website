import { StepBack } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ClothingStore() {

  const navigate = useNavigate();

    return (
      <div className="clothing-store-page">
        <ul className="contact-return-to-home">
          back to home
        </ul>
        <StepBack
          className="back-arrow"
          size={28}
          onClick={() => navigate("/")}
        />
        <ul className="project-header">
          cool things coming soon
        </ul>
      </div>
    );
  }