import { StyleSheet } from "react-native" //é um componente que eu vou usar para fazer os estilos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(240, 248, 255, 0.8)', // Fundo com efeito de blur em azul claro
        padding: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#003366', // Azul escuro
        marginBottom: 20,
    },

    users: {
        width: '85%',
        backgroundColor: 'rgba(173, 216, 230, 0.85)', // Azul claro
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        backdropFilter: 'blur(10px)',
        maxWidth: 400
    },

    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#003366', // Azul escuro
        marginBottom: 10,
    },

    input: {
        width: '80%',
        height: 40,
        borderRadius: 8,
        backgroundColor: '#e6f2ff', // Azul muito claro
        marginBottom: 15,
        paddingLeft: 10,
        borderColor: '#003366', // Azul escuro
        borderWidth: 1,
        color: 'gray', // Azul escuro
    },

    btn: {
        width: '40%',
        height: 40,
        backgroundColor: '#003366', // Azul escuro
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },

    btnText: {
        fontWeight: 'bold',
        color: '#fff', // Branco
        fontSize: 14,
    },

    boxEnter: {
        flexDirection: 'row',
        marginTop: 15,
        width: '100%',
        justifyContent: 'space-evenly',
    },
});
export default styles //o styles não é pelo nome do arquivo, é pela constante que ta armazenando meus estilos