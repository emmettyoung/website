export interface Profile{
    educationalBackground: string;
    aboutMe: string;
}

export interface profileProps {
    profile: Profile;
}

export const profile: Profile = {
    aboutMe: "Hello! My name is Emmett Young, I am originally from Burlington Vermont and am currently a junior at Brown University studying computer science and applied mathematics. From a personal standpoint, hobbies of mine are playing sports like ultimate frisbee, teaching/tutoring and studying japanese. From a professional note I am incredibly interested in Software Engineering and Data Science as well as Quantitative Trading",
    educationalBackground: "B.Sc Computer Science and Applied Mathematics from Brown University",
}

export function SelectProfile({ profile }: profileProps) {
    return (
      <div className="profile-container">
        <div className="profile">
          <p><strong>About Me:</strong> {profile.aboutMe}</p>
          <p><strong>Education:</strong> {profile.educationalBackground}</p>
        </div>
      </div>
    );
  }