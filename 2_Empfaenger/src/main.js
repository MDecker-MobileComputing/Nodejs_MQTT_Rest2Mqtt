import mqtt         from "mqtt";
import createLogger from "logging";

const logger = createLogger( "empfaenger" );

const mqttClient = await mqtt.connectAsync( "ws://localhost:8083/mqtt" );
logger.info( "Verbindung zu MQTT-Client aufgebaut." );

await mqttClient.subscribeAsync( "mein-topic" );

mqttClient.on( "message", ( topic, nachricht ) => {

    logger.info( `Nachricht auf Topic ${topic} empfangen: ${nachricht}` );
});