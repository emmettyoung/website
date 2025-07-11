import { useEffect, useState } from "react";
import sunset from './japan-sunset.jpeg';
import tulum from './tulum.jpeg';
import australia from './australia.jpeg';
import lake from './lake.jpeg';
import jakarta from './jakarta.jpeg';
import icy from './icy.jpeg';
import LA from './LA.jpeg';

export interface HomePage {
    welcomeText: string;
}



export function HomePage({ welcomeText = "Welcome to my website!" }: HomePage) {
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
        <div>
            <div className="image-container">
              <img className="sunset-image" src={sunset} alt="Sunset" width={450} height={300} />
              <img className="tulum-image" src={tulum} alt="Tulum" width={210} height={280} />
              <img className="overlay-australia" src={australia} alt="Australia" width={450} height={300} />
              <img className="overlay-lake" src={lake} alt="Lake" width={360} height={270} />
              <img className="jakarta" src={jakarta} alt="Jakarta" width={210} height={280} />
              <img className="icy" src={icy} alt="Icy" width={210} height={280} />
              <img className="LA" src={LA} alt="LA" width={210} height={280} />
            </div>
            <p className="homepage-text">{displayed}</p>
        </div>
    )
}