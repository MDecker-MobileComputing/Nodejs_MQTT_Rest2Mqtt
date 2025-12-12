
import createLogger from "logging";
import mqtt         from "mqtt";

const logger     = createLogger( "mqtt-sender" );
const mqttClient = await mqtt.connectAsync( "ws://mqtt-server:8083/mqtt" );
logger.info( "Verbindung zu MQTT-Client aufgebaut." );

const topic = "mein-topic";


export default async function sendeStringViaMQTT( string ) {

    await mqttClient.publishAsync( topic, string );

    logger.info( `String "${string} auf Topic "${topic}" gesendet.`);
}