import { heroImageP } from "@/public/assets/images/programs/heroSection";
import { heroImage } from "@/public/assets/images/homepage/heroSection";
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
                iconHeure : <TimeIcon size={20}/>,
                heure : "9h00 - 12h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={20}/>,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
                image : heroImage
            },
            {
                title : "Chaque dimanche",
                description : `Culte normale : intersection, chant des chorales, louange et adoration, predications et en fin les annonces`,
                iconHeure : <TimeIcon size={20} />,
                heure : "9h00 - 12h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={20} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
                image : heroImage
            },
        ]
    },
    programmesSemaineSection : {
        title : "Programme de la semaine",
        cards : [
            {
                title : "Chaque Mardi",
                subtitle : "Intersetion",
                iconHeure : <TimeIcon size={20} />,
                heure : "17h00 - 18h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={20} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
            },
            {
                title : "Chaque Mercredi",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={20} />,
                heure : "16h00 - 17h30",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={20} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
            },
            {
                title : "Chaque Vendredi",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={20} />,
                heure : "16h00 - 17h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={20} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
            },
            {
                title : "Chaque Dimanche",
                subtitle : "Culte",
                iconHeure : <TimeIcon size={20} />,
                heure : "9h00 - 12h00",
                timeZoneTitle : "TIME ZONE",
                timeZoneResponse : "GMT+2",
                iconAdress : <PlaceIcon size={20} />,
                adresseChurch : "Q.kyeshero Av.Rumimbi Gomma Nord-Kivu",
            }
        ]
    },
   
}