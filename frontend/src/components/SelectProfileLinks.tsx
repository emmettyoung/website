import { FileUser } from "lucide-react";


export interface personalLinks {
  transcript: string;
  resume: string;
  linkedIn: string;
  email: string;
  phone: string;
}

export interface profileLinksProps {
  profileLinks: personalLinks;
}

export const profileLinks: personalLinks = {
  transcript: "https://drive.google.com/file/d/1A80N7sE3kjA3KYbzSf7O6WjV2knMf9hm/view?usp=sharing",
  resume: "https://drive.google.com/file/d/1lUiTor7cYy5V0rAvlA1EJt7Wcd9W8kxo/view?usp=sharing",
  linkedIn: "https://www.linkedin.com/in/emmett-young-79870a255/",
  email: "emmett_young@brown.edu",
  phone: "8025981630"
};

export function SelectProfileLinks({ profileLinks }: profileLinksProps) {
  return (
    <div className="profile-container">
      <div className="profile">
      <a href={profileLinks.transcript} target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline">
          <FileUser size={25}/>
          Transcript
        </a>
        <a href={profileLinks.resume} target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline">
          <FileUser size={25}/>
          Resume
        </a>
        <a href={profileLinks.linkedIn} target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline">
          <FileUser size={25}/>
          LinkedIn
        </a>
        <p>Email: {profileLinks.email}</p>
        <p>Phone Number: {profileLinks.phone}</p>
      </div>
    </div>
  );
}
