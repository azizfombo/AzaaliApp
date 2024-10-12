import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Circle, Defs, LinearGradient, Stop, Svg} from 'react-native-svg'; // Import for SVG elements
import Icon from 'react-native-vector-icons/Ionicons';

const humiditeRayon = 120;
const petitRayon = 70;
const strokeWidthHumidite = 15;
const strokeWidthPetit = 10;
const perimetreHumidite = 2 * Math.PI * humiditeRayon;
const perimetrePetit = 2 * Math.PI * petitRayon;

export default function Accueil() {
    const [humidite, setHumidite] = useState(20);
    const [uv, setUv] = useState(80);
    const [iaq, setIaq] = useState(21);

    const calculPourcentage = (pourcent: number, perimetre: number) => {
        return perimetre - (pourcent / 100) * perimetre;
    };

    return (
        <View style={styles.container}>

            <Text></Text>
            <View style={styles.header}>
                {/*<Icon name="leaf-outline" size={40} color="#b89c5a" />*/}
                <Image source={require('../../assets/imagesAzaali/logo4.png')} style={styles.imageIcon}></Image>
                <Icon name="cafe-outline" size={40} color="#b89c5a"/>
            </View>
            <Text style={styles.greeting}>Bonjour Abdoul-Aziz, le laid !</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <View style={styles.mainGauge}>
                <Svg height="260" width="260">
                    <Defs>
                        <LinearGradient id="gradMain" x1="0%" y1="0%" x2="100%" y2="0%">
                            <Stop offset="0%" stopColor="#4b2907"/>
                            <Stop offset="100%" stopColor="#b89c5a"/>
                        </LinearGradient>
                    </Defs>

                    <Circle
                        cx="130"
                        cy="130"
                        r={humiditeRayon}
                        stroke="url(#gradMain)"
                        strokeWidth={strokeWidthHumidite}
                        fill="none"
                        strokeOpacity={0.2}
                    />
                    <Circle
                        cx="130"
                        cy="130"
                        r={humiditeRayon}
                        stroke="url(#gradMain)"
                        strokeWidth={strokeWidthHumidite}
                        fill="none"
                        strokeDasharray={`${perimetreHumidite}, ${perimetreHumidite}`}
                        strokeDashoffset={calculPourcentage(humidite, perimetreHumidite)}
                        strokeLinecap="round"
                        rotation="-90"
                        origin="130, 130"
                    />
                </Svg>
                <Icon name="water" size={60} color="#b89c5a" style={styles.waterIcon}/>
                <Text style={styles.gaugeValue}>{humidite} %</Text>
                <Text style={styles.gaugeLabel}>Humidité</Text>
            </View>

            <View style={styles.additionalGauges}>
                <View style={styles.gauge}>
                    <Svg height="160" width="160">
                        <Defs>
                            <LinearGradient id="gradSmall1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <Stop offset="0%" stopColor="#4b2907"/>
                                <Stop offset="100%" stopColor="#b89c5a"/>
                            </LinearGradient>
                        </Defs>
                        <Circle
                            cx="80"
                            cy="80"
                            r={petitRayon}
                            stroke="url(#gradSmall1)"
                            strokeWidth={strokeWidthPetit}
                            fill="none"
                            strokeOpacity={0.2}
                        />
                        <Circle
                            cx="80"
                            cy="80"
                            r={petitRayon}
                            stroke="url(#gradSmall1)"
                            strokeWidth={strokeWidthPetit}
                            fill="none"
                            strokeDasharray={`${perimetrePetit}, ${perimetrePetit}`}
                            strokeDashoffset={calculPourcentage(uv, perimetrePetit)}
                            strokeLinecap="round"
                            rotation="-90"
                            origin="80, 80"
                        />
                    </Svg>
                    <Icon name="sunny" size={30} color="#b89c5a" style={styles.icon}/>
                    <Text style={styles.gaugeValueSmall}>{uv} %</Text>
                    <Text style={styles.gaugeLabelSmall}>UV</Text>
                </View>

                <View style={styles.gauge}>
                    <Svg height="160" width="160">
                        <Defs>
                            <LinearGradient id="gradSmall2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <Stop offset="0%" stopColor="#4b2907"/>
                                <Stop offset="100%" stopColor="#b89c5a"/>
                            </LinearGradient>
                        </Defs>
                        <Circle
                            cx="80"
                            cy="80"
                            r={petitRayon}
                            stroke="url(#gradSmall2)"
                            strokeWidth={strokeWidthPetit}
                            fill="none"
                            strokeOpacity={0.2}
                        />
                        <Circle
                            cx="80"
                            cy="80"
                            r={petitRayon}
                            stroke="url(#gradSmall2)"
                            strokeWidth={strokeWidthPetit}
                            fill="none"
                            strokeDasharray={`${perimetrePetit}, ${perimetrePetit}`}
                            strokeDashoffset={calculPourcentage(iaq, perimetrePetit)}
                            strokeLinecap="round"
                            rotation="-90"
                            origin="80, 80"
                        />
                    </Svg>
                    <Icon name="leaf" size={30} color="#b89c5a" style={styles.icon}/>
                    <Text style={styles.gaugeValueSmall}>{iaq} %</Text>
                    <Text style={styles.gaugeLabelSmall}>IQA 51</Text>
                </View>
            </View>

            <View style={styles.navBar}>
                <Icon name="cafe" size={30} color="#b89c5a"/>
                <Icon name="leaf-outline" size={30} color="#b89c5a"/>
                <Icon name="calendar" size={30} color="#b89c5a"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    greeting: {
        fontSize: 22,
        color: '#b89c5a',
    },
    mainGauge: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },
    gaugeValue: {
        position: 'absolute',
        fontSize: 32,
        color: '#b89c5a',
        fontWeight: 'bold',
        marginTop: 30,
    },
    gaugeLabel: {
        color: '#b89c5a',
        fontSize: 18,
        marginTop: 5,
    },
    waterIcon: {
        position: 'absolute',
        top: 60,
    },
    additionalGauges: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 30,
        marginBottom: 30,
    },
    gauge: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 10,
    },
    gaugeValueSmall: {
        fontSize: 18,
        color: '#b89c5a',
        fontWeight: 'bold',
        marginTop: 5,
    },
    gaugeLabelSmall: {
        color: '#b89c5a',
        fontSize: 16,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
        bottom: 20,
    },
    icon: {
        position: 'absolute',
    },
    imageIcon: {
        width: 40,
        height: 40,
        marginBottom: 0,
    },
});
