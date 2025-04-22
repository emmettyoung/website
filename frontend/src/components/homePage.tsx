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
                <img className="tulum-image" src="src/components/tulum.jpeg" alt="Tulum" width={300} height={400} />
                <p className="homepage-text">Welcome to my Website!</p>
                <img className="overlay-australia" src="src/components/australia.jpeg" alt="Sunset" width={450} height={300}/>
                <img className="overlay-lake" src="src/components/lake.jpeg" alt="Sunset" width={360} height={270}/>
            </div>
        </div>
    )
}