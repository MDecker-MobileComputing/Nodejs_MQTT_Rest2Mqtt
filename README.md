# MQTT mit Nodejs: REST zu MQTT #

<br>

Das Repo enthält zwei Nodejs-Anwendungen:
* REST-Endpunkt, der einen String empfängt, der über MQTT weitergeben.
* MQTT-Empfänger, schreibt empfangenen String auf Konsole.

<br>

Beispielaufruf REST-Endpunkt für Übertragung String "Lorem Ipsum":
http://localhost:8080/stringVerarbeiten/Lorem%20Ipsum

<br>

Der MQTT-Server wird mit *Docker Compose* bereitgestellt.

<br>

----

## License ##

<br>

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository.

<br>
