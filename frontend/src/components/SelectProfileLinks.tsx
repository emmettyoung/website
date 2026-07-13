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
  transcript: "https://drive.google.com/file/d/1qCjumeFN3zzhc41OIVxcW5iowEDdGEnn/view?usp=drive_link",
  resume: "https://drive.google.com/file/d/1jL1L2uMLc2QmyvwB3idAm2LFpRxgjt8t/view?usp=drive_link",
  linkedIn: "https://www.linkedin.com/in/emmett-young-79870a255/",
  email: "eyoung.vt@gmail.com",
  phone: "8025981630"
};

export function SelectProfileLinks({ profileLinks }: profileLinksProps) {
  return (
    <div className="profile-text">
      <div>
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
                    className="text-blue-500 underline"
                    >
          <FileUser size={25}/>
          LinkedIn
        </a>
        <p>Email: {profileLinks.email}</p>
        <p>Phone Number: {profileLinks.phone}</p>
      </div>
    </div>
  );
}
