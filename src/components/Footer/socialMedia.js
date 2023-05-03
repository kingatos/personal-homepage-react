import { github, facebook, linkedin, instagram } from "../../personalInfo";
import { StyledIcon } from "./styled";
import { ReactComponent as githubIcon } from "./icons/githubIcon.svg";
import { ReactComponent as facebookIcon } from "./icons/facebookIcon.svg";
import { ReactComponent as instagramIcon } from "./icons/instagramIcon.svg";
import { ReactComponent as linkedinIcon } from "./icons/linkedinIcon.svg";


export const socialMedia = [
    {
        name: "github",
        link: `${github}`,
        Icon: StyledIcon(githubIcon),
    },
    {
        name: "facebook",
        link: `${facebook}`,
        Icon: StyledIcon(facebookIcon),
    },
    {
        name: "linkedin",
        link: `${linkedin}`,
        Icon: StyledIcon(linkedinIcon),
    },
    {
        name: "instagram",
        link: `${instagram}`,
        Icon: StyledIcon(instagramIcon),
    },
];
