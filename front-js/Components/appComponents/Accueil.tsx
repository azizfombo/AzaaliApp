import {Image, StyleSheet, Text, View, Animated, Easing, Alert} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Circle, Defs, LinearGradient, Stop, Svg} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {getUserSession} from "../../conf/UserSession";

const humiditeRayon = 120;
const petitRayon = 70;
const strokeWidthHumidite = 15;
const strokeWidthPetit = 10;
const perimetreHumidite = 2 * Math.PI * humiditeRayon;
const perimetrePetit = 2 * Math.PI * petitRayon;

export default function Accueil() {
    const [humidite, setHumidite] = useState(0);
    const [uv, setUv] = useState(0);
    const [iaq, setIaq] = useState(0);

    const [animatedHumiditeValue, setAnimatedHumiditeValue] = useState(0);
    const [animatedUvValue, setAnimatedUvValue] = useState(0);
    const [animatedIaqValue, setAnimatedIaqValue] = useState(0);

    const animatedHumidite = useRef(new Animated.Value(0)).current;
    const animatedUv = useRef(new Animated.Value(0)).current;
    const animatedIaq = useRef(new Animated.Value(0)).current;
    const [userName, setUserName] = useState('');


    const calculPourcentage = (pourcent: number, perimetre: number) => {
        return perimetre - (pourcent / 100) * perimetre;
    };

    useEffect(() => {
        const getSessionAndCaract = async () => {
            try {
                const session = await getUserSession();
                if (session) {
                    const fullName = `${session.prenom} ${session.nom}`;
                    setUserName(fullName);

                    try {
                        const response = await fetch(`http://192.168.0.102:8080/caracteristicsHair/afficher?email=${encodeURIComponent(session.email)}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });

                        if (response.ok) {
                            const data = await response.json();
                            if (data) {
                                setHumidite(data.humidite);
                                setIaq(data.uv);
                                setUv(data.iqa);
                            } else {
                                Alert.alert("Erreur Serveur");
                            }
                        } else {
                            Alert.alert("Erreur de connexion", "Une erreur est survenue lors de la connexion.");
                        }
                    } catch (error) {
                        console.error("Erreur lors de la connexion : ", error);
                        Alert.alert("Erreur serveur", "Impossible de se connecter au serveur.");
                    }
                } else {
                    console.log("Aucune session utilisateur trouvée.");
                }
            } catch (error) {
                console.error("Erreur lors de la vérification de la session utilisateur :", error);
            }
        };

        getSessionAndCaract();
        Animated.timing(animatedHumidite, {
            toValue: humidite,
            duration: 2000,
            useNativeDriver: false,
            easing: Easing.out(Easing.ease),
        }).start();

        Animated.timing(animatedUv, {
            toValue: uv,
            duration: 2000,
            useNativeDriver: false,
            easing: Easing.out(Easing.ease),
        }).start();

        Animated.timing(animatedIaq, {
            toValue: iaq,
            duration: 2000,
            useNativeDriver: false,
            easing: Easing.out(Easing.ease),
        }).start();

        animatedHumidite.addListener(({value}) => {
            setAnimatedHumiditeValue(Math.round(value));
        });

        animatedUv.addListener(({value}) => {
            setAnimatedUvValue(Math.round(value));
        });

        animatedIaq.addListener(({value}) => {
            setAnimatedIaqValue(Math.round(value));
        });

        return () => {
            animatedHumidite.removeAllListeners();
            animatedUv.removeAllListeners();
            animatedIaq.removeAllListeners();
        };
    }, [humidite, uv, iaq]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/imagesAzaali/logo4.png')} style={styles.imageIcon}></Image>
                <Image source={require('../../assets/imagesAzaali/profil.png')} style={styles.imageIconProfil}></Image>
                {/*<Icon name="cafe-outline" size={40} color="#b89c5a" />*/}
            </View>
            <Text style={styles.greeting}>Bonjour {userName} !</Text>

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
                    <AnimatedCircle
                        cx="130"
                        cy="130"
                        r={humiditeRayon}
                        stroke="url(#gradMain)"
                        strokeWidth={strokeWidthHumidite}
                        fill="none"
                        strokeDasharray={`${perimetreHumidite}, ${perimetreHumidite}`}
                        strokeDashoffset={animatedHumidite.interpolate({
                            inputRange: [0, 100],
                            outputRange: [perimetreHumidite, calculPourcentage(humidite, perimetreHumidite)],
                        })}
                        strokeLinecap="round"
                        rotation="-90"
                        origin="130, 130"
                    />
                </Svg>
                <Icon name="water" size={60} color="#b89c5a" style={styles.waterIcon}/>
                <Text style={styles.gaugeValue}>{animatedHumiditeValue}%</Text>
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
                        <AnimatedCircle
                            cx="80"
                            cy="80"
                            r={petitRayon}
                            stroke="url(#gradSmall1)"
                            strokeWidth={strokeWidthPetit}
                            fill="none"
                            strokeDasharray={`${perimetrePetit}, ${perimetrePetit}`}
                            strokeDashoffset={animatedUv.interpolate({
                                inputRange: [0, 100],
                                outputRange: [perimetrePetit, calculPourcentage(uv, perimetrePetit)],
                            })}
                            strokeLinecap="round"
                            rotation="-90"
                            origin="80, 80"
                        />
                    </Svg>
                    <Icon name="sunny" size={30} color="#b89c5a" style={styles.icon}/>
                    <Text style={styles.gaugeValueSmall}>{animatedUvValue}%</Text>
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
                        <AnimatedCircle
                            cx="80"
                            cy="80"
                            r={petitRayon}
                            stroke="url(#gradSmall2)"
                            strokeWidth={strokeWidthPetit}
                            fill="none"
                            strokeDasharray={`${perimetrePetit}, ${perimetrePetit}`}
                            strokeDashoffset={animatedIaq.interpolate({
                                inputRange: [0, 100],
                                outputRange: [perimetrePetit, calculPourcentage(iaq, perimetrePetit)],
                            })}
                            strokeLinecap="round"
                            rotation="-90"
                            origin="80, 80"
                        />
                    </Svg>
                    <Icon name="leaf" size={30} color="#b89c5a" style={styles.icon}/>
                    <Text style={styles.gaugeValueSmall}>{animatedIaqValue}%</Text>
                    <Text style={styles.gaugeLabelSmall}>IQA</Text>
                </View>
            </View>

            <View style={styles.navBar}>
                <Icon name="cafe" size={35} color="#b89c5a"/>
                <Icon name="leaf-outline" size={35} color="#b89c5a"/>
                <Icon name="calendar" size={35} color="#b89c5a"/>
            </View>
        </View>
    );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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
        fontSize: 20,
        position: 'absolute',
        top: 160,
    },
    waterIcon: {
        position: 'absolute',
        top: 45,
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
        position: 'absolute',
        fontSize: 18,
        color: '#b89c5a',
        fontWeight: 'bold',
        marginTop: 5,
    },
    gaugeLabelSmall: {
        color: '#b89c5a',
        fontSize: 18,
        position: 'absolute',
        top: 95,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
        bottom: 45,
    },
    icon: {
        position: 'absolute',
        top: 37,
    },
    imageIcon: {
        width: 40,
        height: 40,
        marginBottom: 0,
    },
    imageIconProfil: {
        width: 40,
        height: 42.5,
        marginBottom: 0,
    },
});
