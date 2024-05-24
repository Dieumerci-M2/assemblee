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
                description : `Culte normale : intersection, chant des chorales, louange et adoration, predications et en fin les annonces`,
                iconHeure : <TimeIcon size={1.5}/>,
                heure : "9h00 - 12h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.5}/>,
                adresseChurch : "Q.kyeshero Av.Rumimbi Goma Nord-Kivu",
                image : CulteDim
            },
            {
                title : "Chaque dimanche",
                description : `Culte normale : intersection, chant des chorales, louange et adoration, predications et en fin les annonces`,
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
        subTitle : "Béthel Kyeshero",
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
            },
            {
                title : "Chaque Vendredi",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={1.2} />,
                heure : "16h00 - 17h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={1.2} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
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
            }
        ]
    },
   
}