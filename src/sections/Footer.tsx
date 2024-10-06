import TitleTicket from "@/components/TitleTicket";
import StarsIcon from "@/assets/svg/StarsIcon.svg";
import {
  LinkedInIcon,
  GithubIcon,
  GmailIcon,
  WhatsappIcon,
  PhoneIcon,
  MapsIcon,
} from "@/assets/svg/contactsIcons";
import ContactCard from "@/components/ContactCard";
import { ContactType } from "@/types";

export default function Footer() {
  const contacts: ContactType[] = [
    {
      title: "LinkedIn",
      Icon: <LinkedInIcon />,
      handleClick: () => {
        window.open("https://www.linkedin.com/in/lokmane-ghedied/");
      },
    },
    {
      title: "Github",
      Icon: <GithubIcon />,
      handleClick: () => {
        window.open("https://github.com/lokmaneghedied");
      },
    },
    {
      title: "Gmail",
      Icon: <GmailIcon />,
      handleClick: () => {
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.open("mailto:lokmane.ghedied@gmail.com?subject=&body=");
        } else {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=lokmane.ghedied@gmail.com"
          );
        }
      },
    },
    {
      title: "Whatsapp",
      Icon: <WhatsappIcon />,
      handleClick: () => {
        window.open("https://wa.me/qr/OAEK2373L7XIH1");
      },
    },
    {
      title: "Maps",
      Icon: <MapsIcon />,
      handleClick: () => {
        window.open(
          "https://www.google.com/maps/place/Jijel+Province/@36.7270623,5.3041575,9z/data=!3m1!4b1!4m6!3m5!1s0x12f2469374b8be63:0x13bd084ff97ca4da!8m2!3d36.7179681!4d5.9832577!16zL20vMDU0MGhm"
        );
      },
    },
    {
      title: "Phone",
      Icon: <PhoneIcon />,
      handleClick: () => {
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = "tel:+213672132633";
        }
      },
    },
  ];

  return (
    <footer className="sectionContainer flex flex-col items-center justify-center py-16 relative">
      <TitleTicket title="Let's Be Friends" Icon={<StarsIcon />} />
      <h1 className="heading1 leading-tight">Feel Free to Hit Me Up!</h1>
      <div className="flex flex-col w-full gap-4 lg:grid lg:grid-cols-3 pb-4">
        {contacts.map((item, index) => (
          <ContactCard key={index} {...item} />
        ))}
      </div>
      <p className="details2 absolute bottom-4 ">
        September 2024 - ⚡ by <b>Lokmane Ghedied</b>
      </p>
    </footer>
  );
}
