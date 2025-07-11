import { useEffect, useState } from "react";

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
                <img className="sunset-image" src="src/components/japan-sunset.jpeg" alt="Sunset" width={450} height={300}/>
                <img className="tulum-image" src="src/components/tulum.jpeg" alt="Tulum" width={210} height={280} />
                <p className="homepage-text">{displayed}</p>
                <img className="overlay-australia" src="src/components/australia.jpeg" alt="australia" width={450} height={300}/>
                <img className="overlay-lake" src="src/components/lake.jpeg" alt="lake" width={360} height={270}/>
                <img className="jakarta" src="src/components/jakarta.jpeg" alt="jakarta" width={210} height={280}/>
                <img className="icy" src="src/components/icy.jpeg" alt="icy" width={210} height={280}/>
                <img className="LA" src="src/components/LA.jpeg" alt="LA" width={210} height={280}/>
            </div>
        </div>
    )
}