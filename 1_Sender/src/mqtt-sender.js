import createLogger from "logging";
import dotenv       from "dotenv";
import mqtt         from "mqtt";

const logger = createLogger( "mqtt-sender" );


// HOST für MQTT-Server bestimmen; Default-Wert ist "localhost",
// für Betrieb in Docker-Container ist in docker-compose.yml eine
// Umgebungsvariable gesetzt.
const domain = process.env.MQTT_SERVER_HOST || "localhost";
const url    = `ws://${ domain }:8083/mqtt`;

logger.info( `Versuche Verbindung zu MQTT-Server unter folgender URL aufzubauen: ${url}` );
const mqttClient = await mqtt.connectAsync( url );
logger.info( "Verbindung zu MQTT-Client erfolgreich aufgebaut." );

const topic = "mein-topic";


export default async function sendeStringViaMQTT( string ) {

    await mqttClient.publishAsync( topic, string );

    logger.info( `String "${string} auf Topic "${topic}" gesendet.`);
}