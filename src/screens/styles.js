import { StatusBar, StyleSheet } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center'  
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    buttonActive: {
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    hourContainer: {
        
    },
    hour: {
        fontSize: 64
    }
});