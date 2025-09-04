import classes from "./IconContact.module.css"

export default function IconContact() {
  const iconItem = [
    {
      label: "Github",
      href: "https://github.com/Godung27",
    },
    {
      label: "Gmail",
      href: "mailto:parnuvich.l@gmail.com",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1D4PiqStuP/?mibextid=wwXlfr",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/godung27?igsh=YTgxeTN0OWVncDZp&utm_source=qr",
    },
  ]

  return (
    <div className={classes["icon-area"]}>
      {iconItem.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className={classes.iconItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${classes.icon} ${classes[label]}`} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}