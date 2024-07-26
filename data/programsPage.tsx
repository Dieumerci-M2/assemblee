import { 
    heroImageP,
    CulteDim,
    CulteDimOffice
     } from "@/public/assets/images/programs/heroSection";
import { PlaceIcon, TimeIcon } from "@/public/assets/icons";

export const programmesPageContents = {
    heroSection : {
        coverImage : heroImageP,
        title0 : "PROGRAMMES",
        title1 : `PARTICIPER A NOS DIFFERENTS PROGRAMMES`
    },
    programmeDimancheSection : {
        title : `Rejoingez-nous et devenez quelqu'un d'autre`,
        cards : [
            {
                title : "Chaque dimanche",
                description : `Culte normale : intersession, Chants des chorales, louange et adoration, prédications et en fin les annonces`,
                iconHeure : <TimeIcon size={1.5}/>,
                heure : "9h00 - 12h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.5}/>,
                adresseChurch : "Q.Kyeshero Av.Rumimbi Goma Nord-Kivu",
                image : CulteDim
            },
            {
                title : "Chaque dimanche",
                description : `Culte normale : intersession, chant des chorales, louange et adoration, prédications et en fin les annonces`,
                iconHeure : <TimeIcon size={1.5} />,
                heure : "8h30 - 12h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.5} />,
                adresseChurch : "Q.Office Av.Rumimbi Goma Nord-Kivu",
                image : CulteDimOffice
            },
        ]
    },
    programmesSemaineSection : {
        title : "Programme de la semaine",
        cards : [
            {
                title : "Chaque Mardi",
                subtitle : "Intersetion",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "17h00 - 18h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
                nameChurch : "Béthel Kyeshero"
            },
            {
                title : "Chaque Mercredi",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "16h00 - 17h30",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
                nameChurch : "Béthel Kyeshero"
            },
            {
                title : "Chaque Vendredi",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "16h00 - 17h30",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
                nameChurch : "Béthel Kyeshero"
            },
            {
                title : "Chaque Dimanche",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "9h00 - 12h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
                nameChurch : "Béthel Kyeshero"
            },
            {
                title : "Chaque Lundi",
                subtitle : "Intersetion",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "17h00 - 18h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.Office Gomma Nord-Kivu",
                nameChurch : "Béthel Office"
            },
            {
                title : "Chaque Mercredi",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "15h30 - 17h30",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.Office Gomma Nord-Kivu",
                nameChurch : "Béthel Office"
            },
            {
                title : "Chaque Vendredi",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "15h30 - 17h30",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.Office Gomma Nord-Kivu",
                nameChurch : "Béthel Office"
            },
            {
                title : "Chaque Dimanche",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "9h00 - 12h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.Office Gomma Nord-Kivu",
                nameChurch : "Béthel Office"
            }

        ]
    },
   
}