import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f0',
        minHeight: '100%', 
    },
    stGet: {
        padding: 15,
        height: 430,
        maxWidth: '100%',
        width: 500,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, 
    },
    stPost: {
        flex: 1,
        padding: 15,
        height: '40%',
        maxWidth: '100%',
        width: 500,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, 
    },
    caixaGet: {
        height: 40,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#e0e0e0',
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        fontWeight: 'bold',
    },
    caixaGet2: {
        height: 40,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#e0e0e0',
        width: '150%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    caixaPost: {
        height: 40,
        borderRadius: 8,
        padding: 10,
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    caixaPost2: {
        height: 40,
        borderRadius: 8,
        padding: 10,
        width: '150%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    caixaID: {
        width: '25%',
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        borderColor: '#ccc',
    },
    btnGe: {
        width: '20%',
        height: 35,
        backgroundColor: '#fcba03',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#aaa',
        marginLeft: 5,
    },
    btnPu: {
        width: '20%',
        height: 35,
        backgroundColor: '#03a1fc',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#aaa',
        marginLeft: 5,
    },
    btnPo: {
      width: '20%',
      height: 35,
      backgroundColor: '#6200ea',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#aaa',
      marginLeft: 'auto', // Isso vai empurrar o botão para a direita
      marginRight: 7, // Se precisar de um espaço à direita
  },
    btnDe: {
        width: '20%',
        height: 35,
        backgroundColor: '#ff6347',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#aaa',
        marginLeft: 5,
    },
    foto01: {
        width: '40%',
    },
    foto02: {
        width: '30%',
        height: 180,
        marginLeft: 135,
        borderWidth: 0.5,
        borderColor: '#aaa',
        marginTop: 17,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
    foto03: {
        flexDirection: 'row',
    },
    foto04: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
});

export default styles;
