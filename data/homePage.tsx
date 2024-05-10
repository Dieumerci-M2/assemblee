import { heroImage } from "@/public/assets/images/homepage/heroSection";
import {
  PrayIcon,
  GiveLoveIcon,
  EchoIcon,
} from "@/public/assets/icons/qui_somes_nous";
import {
  predicateur1,
  predicateur2,
  predicateur3,
} from "@/public/assets/images/homepage/predication";

export const homePageContent = {
  heroSection: {
    coverImage: heroImage,
    text: "association assemblee bethél",
    buttonText: "En savoir plus sur nous",
  },
  aboutUsSection: {
    title: "Qui sommes-nous ?",
    cards: [
      {
        icon: <PrayIcon size={20} />,
        title: "Doctrine",
        description:
          "L'assemblée Béthel tire source de ses enseignements en général dans la bible de 66 livres et en particulier dans l'épitre aux Ephésiens 2:20-22",
        buttonText: "Lire plus",
      },
      {
        icon: <EchoIcon size={20} />,
        title: "Table du seigneur",
        description:
          "C'est un répas mystère que l'église  doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort de JC... ",
        buttonText: "Lire plus",
      },
      {
        icon: <GiveLoveIcon size={20} />,
        title: "Bapteme d'eau",
        description:
          "L'assemblée Béthel croit au baptème d'eau par immersion dans les eaux qui coulent. L'administration du baptème se fait au nom de Jesus...",
        buttonText: "Lire plus",
      },
    ],
  },
  predicationsSection: {
    title: "Nos prédications",
    description:
      "Suivez nos prédications sur notre chaîne Youtube () . Dieu parle tentôt d'une manière tentot d'une autre. Inspirez vous de ces predications pour acoître spirituellement jusqu'à ce que vous arriviez à une stature parfaite de Dieu.",
    imageGallery: [
      { img: predicateur1 },
      { img: predicateur2 },
      { img: predicateur3 },
    ],

    bottomSection: {
      title: "Mangeons la nourriture spirituel ensemble",
      description:
        "L'assemblée Béthel croit à l'inspiration plenière des saintes écritures et à leur autorité sur la foi, la vie et le service de chaque croyant.",
    },
  },
};
