import { Boxes, Home, Moon, Nfc, User, FileUser } from "lucide-react";


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
  transcript: "https://drive.google.com/file/d/1FssQ-pJNh_1ppONVf4sNCKOJvwUpexx6/view?usp=sharing",
  resume: "https://drive.google.com/file/d/180tIF6VD-Lg-8CfokDctu9BkB9vftJ47/view?usp=sharing",
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
