import { heroImage } from "@/public/assets/images/homepage/heroSection";
import {
  PrayIcon,
  GiveLoveIcon,
  EchoIcon,
} from "@/public/assets/icons/qui_somes_nous";

export const homePageContent = {
  heroSection: {
    coverImage: heroImage,
    text: "association assemblee bethél",
    buttonText: "En savoir plus sur nous",
  },
  aboutUsSection: {
    title: "Qui sommes-nous?",
    cards: [
      {
        icon: <PrayIcon size={20} />,
        title: "Doctrine",
        description:
          "L'assemblée Béthel tire source de ses enseignements en général dans la bible de 66 livres et en particulier dans l'épitre aux Ephésiens 2:20-22",
          buttonText : "Lire plus"
      },
      {
        icon: <EchoIcon size={20}/>,
        title: "Table du seigneur",
        description:
          "C'est un répas mystère que l'église  doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort de JC... ",
          buttonText : "Lire plus"
      },
      {
        icon: <GiveLoveIcon size={20}/>,
        title: "Bapteme d'eau",
        description:
          "L'assemblée Béthel croit au baptème d'eau par immersion dans les eaux qui coulent. L'administration du baptème se fait au nom de Jesus...",
          buttonText : "Lire plus"
      },
    ],
  },
};
