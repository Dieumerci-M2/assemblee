import { heroImageKyeshero, heroImageOffice, heroImageLub } from "@/public/assets/images/homepage/heroSection";
import {
  PrayIcon,
  GiveLoveIcon,
  EchoIcon,
} from "@/public/assets/icons/qui_somes_nous";
import {
  predicateur1,
  predicateur2,
  predicateur3,
  predicateur4,
  predicateur5,
  predicateur6
} from "@/public/assets/images/homepage/predication";
import {
  ecodim,
  serviteurs,
  bapteme,
  statueHoldingBook,
} from "@/public/assets/images/homepage/avantages_adhesion_aux_eglises";
import { CommaIcon, PlaceIcon, TimeIcon } from "@/public/assets/icons";
import {
  anneAttachementCover,
  eventFlayer,
} from "@/public/assets/images/homepage/participer_aux_celebrations";
import {
  serviteur1,
  serviteur2,
  serviteur3,
  serviteur4,
  serviteur5
} from "@/public/assets/images/homepage/serviteurs";
import { predication0 } from "@/public/assets/images/predications"

export const homePageContent = {
  heroSection: {
    images: [heroImageOffice, heroImageKyeshero, heroImageLub],
    text: "association assemblée bethél",
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
          "C'est un repas mystère que l'église  doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort de Jésus-Christ... ",
        buttonText: "Lire plus",
      },
      {
        icon: <GiveLoveIcon size={20} />,
        title: "Bapteme d'eau",
        description:
          "L'assemblée Béthel croit au baptême d'eau par immersion càd dans les eaux qui coulent. L'administration du baptême se fait au nom de Jésus-Christ...",
        buttonText: "Lire plus",
      },
    ],
  },
  predicationsSection: {
    title: "Nos prédications",
    description:
      "Dieu parle tantôt d'une manière tantôt d'une autre. Inspirez-vous de ces prédications pour accroître spirituellement jusqu'à ce que vous arriviez à une stature parfaite de Jésus-Christ.",
    imageGallery: [
      { img: predicateur1 },
      { img: predicateur2 },
      { img: predicateur4 },
      { img: predication0 },
      { img: predicateur3 },
      { img: predicateur5 },
    ],

    bottomSection: {
      title: "Mangéons la nourriture spirituel ensemble",
      description:
        "L'assemblée Béthel croit à l'inspiration plénière des saintes écritures et à leur autorité sur la foi, la vie et le service de chaque croyant.",
    },
  },

  churchAdhesionAdvantages: {
    title: "Les avantages d'adhérer à nos différentes églises",
    items: [
      {
        title: "Croître spirituellement",
        description:
          "Il est écrit : apprenez à vos enfants les choses de Dieu dès les bas âges pour qu'en grandissant qu'ils ne.....",
        img: ecodim,
      },
      {
        title: "Avoir la seine doctrine",
        description:
          "Les principes, les philosophies et les enseignements fondamentaux de Jésus-Christ  qui concerne le salut...",
        img: statueHoldingBook,
      },
      {
        title: "Être baptiser au nom de Jésus-Christ",
        description:
          "Nous croyons au Baptême du Saint-Esprit qui s'opère miraculeusement dans la vie d'un homme  par la prière....",
        img: bapteme,
      },
      {
        title: "Témoigner la grandeur de Dieu dans notre vie",
        description:
          "Il est écrit : Dans la maison de Dieu que celui qui a une chanson qu'il chante et que celui qui a un temoi...",
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
        headerText: "Evénement à venir",
        title: "Journée spécial d'échange de vœux",
        description:
          "La jeunesse de l'assemblée Béthel organise une sortie chrétienne pour différentes activités.",
        time: "Vendredi 23:39 IST",
        date: "20/07/2024",
        place: "Chez VUNABANDI",
        flayer: eventFlayer,
        registerButton: {
          text: "S'inscrire",
        },
      },
    },
    year_of_attachement: {
      title: "Année d'attachement à la parole de Dieu",
      description:
        "Comme elle est annoncée, L'année 2024  est une année d'attachement à la parole de Dieu au sein de l'Assemblée Béthel Kyeshero.",
      icon: <CommaIcon size={5} />,
      buttonText: "Visiter",
      bgImg: anneAttachementCover,
    },
  },

  nos_seviteurs: {
    title : "Nos différents serviteurs de Dieu",
    items: [
      {
        name: "EV. EMMANUEL KARUVATI",
        img: serviteur1,
        description:
          "Berger de l'Assemblée Béthel Kyeshero et responsable de l'Association Assemblée Béthel.",
      },
      {
        name: "DR. BERYY L.",
        img: serviteur2,
        description:
          "Docteur de la Parole au sein de l'église Assemblée Béthel Kyeshero",
      },
      {
        name: "PASTEUR SINZAHERA",
        img: serviteur3,
        description: "Pasteur et Berger de l'Assemblée Béthel Office",
      },
      {
        name: "Pasteur THOMAS KAPITO",
        img: serviteur4,
        description: "Pasteur et Berger de l'Assemblée Béthel Lubumbashi",
      },
      {
        name: "Pred. PAPA RIGOBERT",
        img: predicateur2,
        description:
          "Serviteur de Dieu au sein de l'Assemblée Béthel Kyeshero.",
      },
      {
        name: "Pred. UZIMA KANDA",
        img: predicateur6,
        description:
          "Serviteur de Dieu au sein l'Assemblée Béthel Kyeshero.",
      },
      {
        name: "Pred. Mardochée",
        img: predicateur5,
        description: "Serviteur de Dieu au sein de l'Assemblée Béthel Office.",
      },
      {
        name: "Pred. ANANI KULIMUSHI",
        img: serviteur5,
        description: "Serviteur de Dieu au sein de l'Assemblée Béthel Kyeshero.",
      },
    ],
  },
};
