import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import moment from 'moment-timezone';
import { styles } from "./styles";

export const Home = () => {
    const [currentLocale, setCurrentLocale] = useState({
        tz: 'America/Sao_Paulo',
        time: moment().tz('America/Sao_Paulo').format('HH:mm:ss')
    });

    const handleChangeHour = async (locale) => {
        setCurrentLocale((current) => ({
            ...current,
            tz: locale
        }));
    }

    const startClock = () => {
        currentInterval = setInterval(() => {
            setCurrentLocale((current) => ({
                ...current,
                time: moment().tz(current.tz).format('HH:mm:ss')
            }))
        }, 1000);
    }

    useEffect(() => {
        startClock();
    }, []);

    return <View style={styles.container}>
        <View style={styles.buttonGroup}>
            <TouchableOpacity
                onPress={() => handleChangeHour('America/Sao_Paulo')}
                style={[currentLocale.tz === 'America/Sao_Paulo' && styles.buttonActive]}
            >
                <Text>Brazil</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleChangeHour('America/New_York')}
                style={[currentLocale.tz === 'America/New_York' && styles.buttonActive]}
            >
                <Text>New York</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleChangeHour('Europe/London')}
                style={[currentLocale.tz === 'Europe/London' && styles.buttonActive]}
            >
                <Text>London</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.hour}>{currentLocale.time}</Text>
        </View>
    </View>
}