# MQTT mit Nodejs: REST zu MQTT #

<br>

Das Repo enthält zwei Nodejs-Anwendungen:
* REST-Endpunkt, der einen String empfängt, der über MQTT weitergeben.
* MQTT-Empfänger, schreibt empfangenen String auf Konsole.

<br>

Beispielaufruf REST-Endpunkt für Übertragung String "Lorem Ipsum":
http://localhost:8080/stringVerarbeiten/Lorem%20Ipsum

<br>

----

## Anwendungen ausführen ##

<br>

Es gibt zwei Optionen zur Ausführung der Anwendungen, wobei bei beiden der MQTT-Server (EMQX) lokal in einem Docker-Container läuft.
Der Unterschied ist, ob die beiden Nodejs-Anwendungen auch in Docker-Container laufen oder nicht.

<br>

**Nodejs-Anwendungen nicht in Docker-Container:**

* Starten Sie den MQTT-Server im Container durch Aufruf des Skripts `mqttAlleineStarten.bat`(Windows)  bzw. `mqttAlleineStarten.sh` (Linux+MacOS).
* Die beiden Nodejs-Anwendungen werden dann mit `npm start` im jeweiligen Unterverzeichnis (`1_Sender` bzw. `2_Empfaenger`)
  gestartet.

<br>

**Nodejs-Anwendungen in Docker-Container:**

Starten Sie alle drei Container durch Eingabe des Befehls `docker compose up` im Wurzelverzeichnis des Repos.
Die Container mit den beiden Nodejs-Anwendungen werden bei Bedarf vorher erstellt. 

<br>

----

## License ##

<br>

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository.

<br>
