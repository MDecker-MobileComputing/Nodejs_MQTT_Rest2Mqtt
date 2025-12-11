import express      from "express";
import createLogger from "logging";

import routenRegistrieren from './controller.js';


const PORT_NUMMER = 8080;

const logger = createLogger( "main" );

const app = express();

routenRegistrieren( app );

app.use( express.json() );
app.use( express.static( "public" ) );


app.listen( PORT_NUMMER,
    () => { logger.info( `Web-Server auf Port ${PORT_NUMMER} gestartet.` ); }
  );