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
import {
  ecodim,
  serviteurs,
  bapteme,
  statueHoldingBook,
} from "@/public/assets/images/homepage/avantages_adhesion_aux_eglises";
import { CommaIcon, PlaceIcon, TimeIcon } from "@/public/assets/icons";
import { anneAttachementCover, eventFlayer } from "@/public/assets/images/homepage/participer_aux_celebrations";

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

  churchAdhesionAdvantages: {
    title: "Les avantages d'adhérer à nos differentes églises",
    items: [
      {
        title: "Croitre spirituelement",
        description:
          "Il es écrit : apprennez à vos enfants les choses de Dieu dès le bas ages pour qu'en gradissant qu'ils ne.....",
        img: ecodim,
      },
      {
        title: "Avoir la seine doctrine",
        description:
          "Les principes, les philosophies et les enseignements fondamentaux de Jesus-Christ  qui concerne le salut...",
        img: statueHoldingBook,
      },
      {
        title: "Etre baptisé qu nom de jesus christ",
        description:
          "Nous croyont au Bathème du saint Esprit qui s'opère miraculeusement dans la vie d'un homme  par prière....",
        img: bapteme,
      },
      {
        title: "Temoigné la grandeur de Dieu dans notre vie",
        description:
          "Il est écrit : Dnas la maison de Dieu que celui qui a une chanson qu'il chante et que celui quia un temoi...",
        img: serviteurs,
      },
    ],
  },
  rejoignez_nous: {
    title: "Rejoignez-nous et participez à quelque chose de grand",
    events: {
      timeIcon: <TimeIcon size={1.5} />,
      placeIcon: <PlaceIcon size={1.5} />,
      upcomingEvent: {
        headerText: "Evenement à venir",
        title: "Journée spécial d'échange de voeux",
        description:
          "La jeunesse de l'assemblée Bethel organise une sortie chrétienne pour différentes activités.",
        time: "Vendredi 23:39 IST",
        date: "20/07/2024",
        place: "Kiroches",
        flayer: eventFlayer,
        registerButton: {
          text: "S'inscrire",
        },
      },
    },
    year_of_attachement: {
      title: "Année d'attachement à la parole de Dieu",
      description:
        "Comme il es annocée, Lannée 2024  cest une année dattachement à la parole de Dieu à lassemblée Béthel Kyeshero",
        icon  : <CommaIcon size={5}/>,
      buttonText: "Visiter",
      bgImg : anneAttachementCover
    },
  },
};
