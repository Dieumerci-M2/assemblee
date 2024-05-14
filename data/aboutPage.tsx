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
        title1 : "ÊTRE EN COMMINION FRATERNELLE AVEC DIEU ET AVEC LES HOMMES"
    },
    assosiationSection : {
        title : "ASSOCIATIONS ENSEMBLÉE BETHEL",
        table : [
            {
                title : "PETITE HISTOIRE",
                description : `Cette Association sans but lucatif composée des hommes et des femmes qui croient en Jesus-Christ a vu le jour vers les années 1988 à Goma dans la prvince du Nord-Kivu en RDC. 
                Celle-ci prit naissance à travers maintes étapes. La grande part revient à l’homme de Dieu et homme d’affaire à l’apoque MUSTAPHA SHABANI qui fut l’un des membres co-fondateurs du (Centre charismatique d’intercession Cité-Béthel).`,
                image : serviteur
            },
            {
                title : "NOTRE DOCTRINE",
                description : `L’assemblée Béthel tire source de ses enseignements en général dans la bible de 66 livres et en particulier dans l’épitre aux Ephésiens 2:20-22 source aunthentique designent comment l’église doit être fondée sur les enseignements des Apotres et des prophètes, Jesus étant la prière angulaire. 
                Certes, l’Assemblée Bethel cherche tout tempas à rependre la parole de Jesus selon laquelle ses disciples accomplirons les mêmes choses que même plus grand (Jean14: 12).`,
                image : bible
            },
            {
                title : "NOS BAPTÊMES",
                description : `L’assemblée Béthel croit au baptème d’eau par immersion dans les eaux qui coulent. L’administration du baptème se fait au nom de Jesus-Christ`,
                image : bapteme
            },
            {
                title : "LA TABLE DU SEIGNEUR",
                description : `C’est un répas mystère que l’église  doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort de Jesus-Christ`,
                image : bread
            },
        ]
    },
    coucheSocialSection : {
        title : "NOS DIFFERENTES COUCHES SOCIALES",
        table : [
            {
                title : "COUCHE DE PAPAS",
                description : "lorem",
                image : papas
            },
            {
                title : "COUCHE DE MAMANS",
                description : "lorem",
                image : mamans
            }
        ]
    },
    choraleSection : {
        title : "NOS DIFFERENTES CHORALES",
        table : [
            {
                title : "TROMPÊTE DE BETHEL",
                description : `Cette Association sans but lucatif composée des hommes et des femmes qui croient en Jesus-Christ a vu le jour vers les années 1988 à Goma dans la prvince du Nord-Kivu en RDC. 
                Celle-ci prit naissance à travers maintes étapes. La grande part revient à l’homme de Dieu et homme d’affaire à l’apoque MUSTAPHA SHABANI qui fut l’un des membres co-fondateurs du (Centre charismatique d’intercession Cité-Béthel).`,
                image : Trompete
            },
            {
                title : "FEMMES BATISSEUSES",
                description : `L’assemblée Béthel tire source de ses enseignements en général dans la bible de 66 livres et en particulier dans l’épitre aux Ephésiens 2:20-22 source aunthentique designent comment l’église doit être fondée sur les enseignements des Apotres et des prophètes, Jesus étant la prière angulaire. 
                Certes, l’Assemblée Bethel cherche tout tempas à rependre la parole de Jesus selon laquelle ses disciples accomplirons les mêmes choses que même plus grand (Jean14: 12).`,
                image : FemmeBatisseur
            },
            {
                title : "QUANTIQUES DES ARCHANCES ",
                description : `L’assemblée Béthel croit au baptème d’eau par immersion dans les eaux qui coulent. L’administration du baptème se fait au nom de Jesus-Christ`,
                image : ecodim
            },
            {
                title : "QUANTIQUES DE BETHEL",
                description : `C’est un répas mystère que l’église  doit prendre pendant les rassemblements du soir ou de la nuit pour se souvenir de la mort de Jesus-Christ`,
                image : Cantiques
            },
        ]
    }
}