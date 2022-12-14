import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding : 10,
        flex: 1
    },
    titleText: {
        fontSize: 18,
        color: 'skyBlue'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
});
