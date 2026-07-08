import { ReactNode, useEffect, useState } from "react";
import { IconLink } from "./Iconlink";
import { MailQuestionIcon, WandSparkles, Scissors, CircleDollarSign} from "lucide-react";
import "../styles/main.css";

export interface HomePage {
    welcomeText: string;
}

// The 4 top-level destinations from the homepage. Centralized here so
const homeIcons: { label: string; to: string; icon?: ReactNode }[] = [
    { label: "cool projects i've done", to: "/projects", icon: <WandSparkles size={32} /> },
    { label: "cool things to about me", to: "/contact", icon: <MailQuestionIcon size={32} />},
    { label: "cool stocks i've bought", to: "/stock-portfolio", icon: <CircleDollarSign size={32} /> },
    { label: "cool clothes i've made", to: "/clothing-store", icon: <Scissors size={32} /> },
];

export function HomePage({ welcomeText = "welcome to my website!" }: HomePage) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
          setDisplayed(welcomeText.substring(0, index + 1));
          index++;

          if (index >= welcomeText.length) {
            clearInterval(interval);
          }
        }, 100);

        return () => clearInterval(interval);
      }, [welcomeText]);

    return (
        <div className="homepage-container">
            <p className="homepage-welcome-text">
                {displayed}
            </p>

            <div className="icon-row">
                {homeIcons.map((iconDef) => (
                    <IconLink key={iconDef.to} label={iconDef.label} to={iconDef.to} icon={iconDef.icon} />
                ))}
            </div>
        </div>
    )
}