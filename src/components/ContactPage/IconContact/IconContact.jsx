import classes from "./IconContact.module.css"

import GithubIcon from "../../../assets/icon/Contact/Github_icon.svg"
import GmailIcon from "../../../assets/icon/Contact/Gmail_icon.svg"
import LinkedinIcon from "../../../assets/icon/Contact/Linkedin_icon.png"
import InstagramIcon from "../../../assets/icon/Contact/Instagram_icon.svg"

export default function IconContact() {
  const iconItems = [
    {
      label: "Github",
      href: "https://github.com/Godung27",
      icon: GithubIcon,
    },
    {
      label: "Gmail",
      href: "mailto:parnuvich.l@gmail.com",
      icon: GmailIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/parnuvich-limtongsittikun-b19392326/",
      icon: LinkedinIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/godung27?igsh=YTgxeTN0OWVncDZp&utm_source=qr",
      icon: InstagramIcon,
    },
  ]

  return (
    <div className={classes["icon-area"]}>
      {iconItems.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          className={classes.iconItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.icon} src={icon} alt={label} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}