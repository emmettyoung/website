export interface HomePage {
    welcomeText: string;
}

export const home: HomePage = {
    welcomeText: "Welcome to my website!"
}

export function HomePage({ welcomeText }: HomePage) {
    return (
        <div>
            <div className="image-container">
                <img className="sunset-image" src="src/components/japan-sunset.jpeg" alt="Sunset" width={450} height={300}/>
                <img className="tulum-image" src="src/components/tulum.jpeg" alt="Tulum" width={210} height={280} />
                <p className="homepage-text">Welcome to my Website!</p>
                <img className="overlay-australia" src="src/components/australia.jpeg" alt="australia" width={450} height={300}/>
                <img className="overlay-lake" src="src/components/lake.jpeg" alt="lake" width={360} height={270}/>
                <img className="jakarta" src="src/components/jakarta.jpeg" alt="jakarta" width={210} height={280}/>
                <img className="icy" src="src/components/icy.jpeg" alt="icy" width={210} height={280}/>
                <img className="LA" src="src/components/LA.jpeg" alt="LA" width={210} height={280}/>
            </div>
        </div>
    )
}