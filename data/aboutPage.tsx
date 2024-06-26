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
        title1 : `<< ÊTRE EN COMMINION FRATERNELLE AVEC DIEU ET AVEC LES HOMMES >>`
    },
    assosiationSection : {
        title : "Association ensemblée béthel",
        table : [
            {
                title : "Pétite histoire",
                description : `Cette Association sans but lucatif composée des hommes et des femmes qui croient en Jesus-Christ a vu le jour vers les années 1988 à Goma dans la prvince du Nord-Kivu en RDC. 
                Celle-ci prit naissance à travers maintes étapes. La grande part revient à l’homme de Dieu et homme d’affaire à l’apoque MUSTAPHA SHABANI qui fut l’un des membres co-fondateurs du (Centre charismatique d’intercession Cité-Béthel).`,
                image : serviteur
            },
            {
                title : "Notre doctrine",
                description : `L’assemblée Béthel tire source de ses enseignements en général dans la bible de 66 livres et en particulier dans l’épitre aux Ephésiens 2:20-22 source aunthentique designent comment l’église doit être fondée sur les enseignements des Apotres et des prophètes, Jesus étant la prière angulaire. 
                Certes, l’Assemblée Bethel cherche tout tempas à rependre la parole de Jesus selon laquelle ses disciples accomplirons les mêmes choses que même plus grand (Jean14: 12).`,
                image : bible
            },
            {
                title : "Nos baptêmes",
                description : `L’assemblée Béthel croit au baptème d’eau par immersion dans les eaux qui coulent. L’administration du baptème se fait au nom de Jesus-Christ`,
                image : bapteme
            },
            {
                title : "La table du seigneur",
                description : `C’est un répas mystère que l’église  doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort de Jesus-Christ`,
                image : bread
            },
            {
                title : "Pétite histoire",
                description : `Cette Association sans but lucatif composée des hommes et des femmes qui croient en Jesus-Christ a vu le jour vers les années 1988 à Goma dans la prvince du Nord-Kivu en RDC. 
                Celle-ci prit naissance à travers maintes étapes. La grande part revient à l’homme de Dieu et homme d’affaire à l’apoque MUSTAPHA SHABANI qui fut l’un des membres co-fondateurs du (Centre charismatique d’intercession Cité-Béthel).`,
                image : serviteur
            },
            {
                title : "Notre doctrine",
                description : `L’assemblée Béthel tire source de ses enseignements en général dans la bible de 66 livres et en particulier dans l’épitre aux Ephésiens 2:20-22 source aunthentique designent comment l’église doit être fondée sur les enseignements des Apotres et des prophètes, Jesus étant la prière angulaire. 
                Certes, l’Assemblée Bethel cherche tout tempas à rependre la parole de Jesus selon laquelle ses disciples accomplirons les mêmes choses que même plus grand (Jean14: 12).`,
                image : bible
            },
            {
                title : "Nos baptêmes",
                description : `L’assemblée Béthel croit au baptème d’eau par immersion dans les eaux qui coulent. L’administration du baptème se fait au nom de Jesus-Christ`,
                image : bapteme
            },
            {
                title : "La table du seigneur",
                description : `C’est un répas mystère que l’église  doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort de Jesus-Christ`,
                image : bread
            },
        ]
    },
    coucheSocialSection : {
        title : "Nos différentes couches sociales",
        table : [
            {
                title : "Couche de papas",
                description : "lorem",
                image : papas
            },
            {
                title : "Couche de mamans",
                description : "lorem",
                image : mamans
            }
        ]
    },
    choraleSection : {
        title : "Nos différentes chorales",
        table : [
            {
                title : "Trômpete de béthel",
                description : `Cette Association sans but lucatif composée des hommes et des femmes qui croient en Jesus-Christ a vu le jour vers les années 1988 à Goma dans la prvince du Nord-Kivu en RDC. `,
                image : Trompete
            },
            {
                title : "Femmes batisseuses",
                description : `L’assemblée Béthel tire source de ses enseignements en général dans la bible de 66 livres et en particulier dans l’épitre aux Ephésiens 2:20-22 source aunthentique designent `,
                image : FemmeBatisseur
            },
            {
                title : "Quantiques des archanges",
                description : `L’assemblée Béthel croit au baptème d’eau par immersion dans les eaux qui coulent. L’administration du baptème se fait au nom de Jesus-Christ`,
                image : ecodim
            },
            {
                title : "Quantiques de béthel",
                description : `C’est un répas mystère que l’église  doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort de Jesus-Christ`,
                image : Cantiques
            },
        ]
    }
}