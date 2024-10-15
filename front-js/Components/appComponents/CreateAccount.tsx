import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function CreateAccount() {
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [jour, setJour] = useState('');
    const [mois, setMois] = useState('');
    const [annee, setAnnee] = useState('');
    const [password, setPassword] = useState('');
    const [confirPassword, setConfirPassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const navigation = useNavigation();
    const handleLogin = () => {
        // @ts-ignore
        navigation.navigate('FinalTouch');
    };
    const onChangeDate = (event: any, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Création d'un compte</Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.simpleText}>Veuillez Saisir les informations ci-dessous</Text>
            <Text></Text>
            <TextInput
                style={styles.input}
                placeholder="Prénom"
                placeholderTextColor="#fff"
                value={prenom}
                onChangeText={setPrenom}
            />
            <Text></Text>
            <TextInput
                style={styles.input}
                placeholder="Nom (Facultatif)"
                placeholderTextColor="#fff"
                value={nom}
                onChangeText={setNom}
            />
            <Text></Text>
            <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
                <Text style={styles.dateText}>
                    {date ? date.toLocaleDateString() : 'Sélectionnez une date'}
                </Text>
            </TouchableOpacity>

            {/*{showDatePicker && (*/}
            {/*    // <DateTimePicker*/}
            {/*    //     value={date}*/}
            {/*    //     mode="date"*/}
            {/*    //     display="default"*/}
            {/*    //     onChange={onChangeDate}*/}
            {/*    // />*/}
            {/*)}*/}
            <Text></Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse e-mail"
                placeholderTextColor="#fff"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text></Text>
            <TextInput
                style={styles.input}
                placeholder="Créer un mot de passe"
                placeholderTextColor="#fff"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Text></Text>
            <TextInput
                style={styles.input}
                placeholder="Confirmer le mot de passe"
                placeholderTextColor="#fff"
                value={confirPassword}
                onChangeText={setConfirPassword}
                secureTextEntry={true}
            />

            <Text></Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Valider</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    input: {
        width: '90%',
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#d7b354',
        borderRadius: 30,
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 15,
    },
    linkText: {
        color: '#8c5d2d',
        fontSize: 14,
    },
    title: {
        color: '#8c5d2d',
        fontSize: 36,
    },
    simpleText: {
        color: '#8c5d2d',
        fontSize: 18,
    },
    loginButton: {
        backgroundColor: '#4a3a1d',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginVertical: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        color: '#8c5d2d',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    },
    dateText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
