import createLogger from "logging";


import sendeStringViaMQTT from './mqtt-sender.js';

const logger = createLogger( "controller" );


export default function routenRegistrieren( app ) {

    app.get( "/stringVerarbeiten/:text", getStringEmpfangen );
    logger.info( "Route registriert: GET /stringVerarbeiten" );
}


/**
 * REST-Endpunkt für HTTP-GET, der einen String als Pfadparameter
 * empfängt und diesen auf ein MQTT-Topic sendet.
 *
 * Beispielaufruf:
 * http://localhost:8080/stringVerarbeiten/LoremIpsum
 */
function getStringEmpfangen( req, res ) {

    let text = req.params.text;

    if ( typeof text !== "string" || text.trim().length === 0 ) {

        logger.warn( "Pfad-Parameter fehlt" );
        return res.status( 400 ).json({ nachricht: "FEHLER: Pfad-Parameter fehlt" });
    }

    text = text.trim();

    logger.info( `String empfangen: ${text}` );

    sendeStringViaMQTT( text );

    return res.status(200).json({ nachricht: `ERFOLG: String "${text}" auf MQTT-Topic gesendet.` });
}
