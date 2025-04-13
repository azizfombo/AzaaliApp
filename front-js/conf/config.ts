/*
import { NetworkInfo } from 'react-native-network-info';

export const getAPIUrl = async () => {
    const ipAddress = await NetworkInfo.getIPAddress();
    console.log("Adresse IP locale : ", ipAddress);

    // Obtenir le port du serveur
    const portResponse = await fetch(`http://${ipAddress}:8080/config/port`);
    const port = await portResponse.json();
    console.log("Port du serveur : ", port);
    return `http://${ipAddress}:${port}`;
};*/
