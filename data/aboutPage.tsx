import { heroSection } from "@/public/assets/images/aboutUs/heroSection";
import { ecodim } from "@/public/assets/images/homepage/avantages_adhesion_aux_eglises";
import{
    bapteme,
    bible,
    bread,
    serviteur
}from "../public/assets/images/aboutUs/assosiationAssemblee";
import{
    Cantiques,
    FemmeBatisseur,
    Trompete
}from "../public/assets/images/aboutUs/chorales";
import{
    mamans,
    papas
}from "../public/assets/images/aboutUs/couches sociales";

export const aboutPageContents = {
    heroSection : {
        coverImage : heroSection,
        title0 : "A PROPOS DE NOUS",
        title1 : `<< ÊTRE EN COMMUNION FRATERNELLE AVEC DIEU ET AVEC LES HOMMES >>`
    },
    assosiationSection : {
        title : "Association ensemblée béthel",
        table : [
            {
                title : "Pétite histoire",
                description : `Cette Association sans but lucratif composée des hommes et des femmes qui croient en Jésus-Christ a vu le jour vers les années 1988 à Goma dans la province du Nord-Kivu en RDC
                Celle-ci prit naissance à travers maintes étapes. La grande part revienne à l’homme de Dieu et homme d’affaire Apôtre MUSTAPHA SHABANI qui fut l’un des membres co-fondateurs du Centre charismatique d’intercession (Cité-Béthel). Un jour dans le cadre d'allaire, Il se retrouva à Goma étant serviteur de Dieu, il commença à se réunir dans le cadre de la prière avec d'autres frères et sœurs venus d'ailleurs dans la paillote de Maman Anton la femme du Directeur de T'UZB (Union Zaïroise des Banques) où il y avait un responsable de ce groupe de prière répondant au nom de Frère Antoine qui restait chez son grand frère MWANZANZU.`,
                image : serviteur,
                buttonText: "Lire plus",
            },
            {
                title : "Notre doctrine",
                description : `C'est sont les enseignements Chrétiens, Hérétique ou Orthodoxe. Les différences surgissent qu'au niveau de l'interprétation. Ainsi en déplaçant le message de son contexte original, on lui prêtre l'approximatif ou le contraire de ce qu'il dit. L’assemblée Béthel tire source de ses enseignements en général dans la bible de 66 livres et en particulier dans l’épitre aux Ephésiens 2 :20-22 source authentique désignant comment l’église doit être fondée sur les enseignements des Apôtres et des prophètes, Jésus étant la prière angulaire. 
                Certes, l’Assemblée Bethel cherche tout temps à rependre la parole de Jésus selon laquelle ses disciples accompliront les mêmes choses et même plus grand (Jean14: 12).`,
                image : bible,
                buttonText: "Lire plus",
            },
            {
                title : "Nos baptêmes",
                description : `L’assemblée Béthel croit au baptême d’eau par immersion dans les eaux qui coulent. L’administration du baptême se fait au nom du Seigneur Jésus-Christ (le baptiseur proclame le nom du Seigneur Jésus Christ en plogeant le candidat une fois au baptême dans l'eau). L'assemblée Béthel aussi au baptême du Saint-Esprit qui s'opère muraculeusement dans la vie d'un homme par la prière d'imposition des mains ou par la prière personnel. Ce Baptême peut se manifester par les signes spirituels intérieur (fruits de l'esprit) et extérieur (dons de l'esprit).`,
                image : bapteme,
                buttonText: "Lire plus",
            },
            {
                title : "La table du seigneur",
                description : `C'est un repas mystère que l'église doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort du Seigneur Jésus-Christ et de sa victoire sur la mort et sur le diable. Les emblèmes de ce repas sont le pain sans levain préparer par un ministre de Dieu consacré et du vin de raisins. C'est le ministre de Dieu consacré qui peut préparer et servir le repas du Seigneur.`,
                image : bread,
                buttonText: "Lire plus",
            },
        ]
    },
    coucheSocialSection : {
        title : "Nos différentes couches sociales",
        table : [
            {
                title : "Couche de papas",
                description : "Groupe de frères en Christ composer des papas de l'église Assemblée Béthel Kyeshero",
                image : papas
            },
            {
                title : "Couche de mamans",
                description : "Groupe de soeurs en Christ composer de mamans de l'église Assemblée Béthel Kyeshero",
                image : mamans
            },
        ]
    },
    choraleSection : {
        title : "Nos différentes chorales",
        table : [
            {
                title : "Trômpete de béthel",
                description : `Une Chorale des jeunes frères et soeurs de l'église Assemblée Bethel Kyeshero`,
                image : Trompete
            },
            {
                title : "Femmes batisseuses",
                description : `Une Chorale des mamans de l'église Assemblée Béthel Office`,
                image : FemmeBatisseur
            },
            {
                title : "Quantiques des archanges",
                description : `Une Chorale des enfants de l'ECODIM de l'église Assemblée Béthel Office`,
                image : ecodim
            },
            {
                title : "Quantiques de béthel",
                description : `Une Chorale des enfants de l'église Assemblée Béthel Office`,
                image : Cantiques
            },
        ]
    }
}