import createLogger from "logging";

const logger = createLogger( "controller" );


export default function routenRegistrieren( app ) {

    app.get( "/stringVerarbeiten/:text", getStringEmpfangen );
    logger.info( "Route registriert: GET /stringVerarbeiten" );
}


/**
 * Beispielaufruf:
 * http://localhost:8080/stringVerarbeiten/LoremIpsum
 */
function getStringEmpfangen( req, res ) {

    const { text } = req.params;

    if ( typeof text !== "string" || text.trim().length === 0 ) {

        logger.warn( "Pfad-Parameter 'text' fehlt oder ist leer" );
        return res.status(400).json({ error: "Pfad-Parameter 'text' fehlt." });
    }

    logger.info( `String empfangen: ${text}` );
    return res.status(200).json({ empfangen: text });
}
