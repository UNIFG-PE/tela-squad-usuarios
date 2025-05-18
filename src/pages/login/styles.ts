import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        height: Dimensions.get('window').height / 3.5, // Reduzido um pouco
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid: {
        height: Dimensions.get('window').height / 5, // Reduzido para dar espaço
        width: '100%',
        paddingHorizontal: 37,
        justifyContent: 'center', // Adicionado para centralizar os textos de email e senha
    },
    boxBottom: {
        height: Dimensions.get('window').height / 4, // Altura reduzida para aproximar os elementos
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start', // Acomoda elementos mais acima
        marginTop: 10, // Pequeno espaço entre boxes
    },
    logo: {
        width: 100,
        height: 100
    },
    text: {
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 18
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 5 // Reduzido para menos espaço acima
    },
    BoxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10, // Reduzido para menos espaço entre inputs
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
        paddingLeft: 10
    },
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: 60 // Proporciona um pequeno espaço do último input para o botão
    },
    textButton: {
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold'
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.gray
    },
});
