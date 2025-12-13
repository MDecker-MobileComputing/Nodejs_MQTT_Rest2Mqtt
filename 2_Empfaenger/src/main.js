import createLogger from "logging";
import dotenv       from "dotenv";
import mqtt         from "mqtt";

const logger = createLogger( "empfaenger" );

// Konfiguration auswerten
dotenv.config();
const domain = process.env.MQTT_SERVER_HOST || "localhost";
const url    = `ws://${ domain }:8083/mqtt`;


logger.info( `Versuche Verbindung zu MQTT-Server unter folgender URL aufzubauen: ${url}` );
const mqttClient = await mqtt.connectAsync( url );
logger.info( "Verbindung zu MQTT-Client aufgebaut." );


// Topic abonnieren
await mqttClient.subscribeAsync( "mein-topic" );
mqttClient.on( "message", ( topic, nachricht ) => {

    logger.info( `Nachricht auf Topic "${topic}" empfangen: ${nachricht}` );
});
