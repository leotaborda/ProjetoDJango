import { StyleSheet } from "react-native"; //é um componente que eu vou usar para fazer os estilos

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b2caed", // Cinza
    flex: 1,
    padding: 20,
    width: 600, 
    alignSelf: "center", 
  },

  styleGet: {
    backgroundColor: "#78acff", // Azul claro
    flex: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 5,
    border: "1px solid #fff",
  },

  stylePost: {
    backgroundColor: "#78acff", // Azul muito claro
    flex: 1,
    borderRadius: 10,
    padding: 15,
    border: "1px solid #fff",
  },

  boxGet: {
    height: 35,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#bdd6ff", 
    width: "100%",
    marginBottom: 5,
    borderColor: "#004080", // Azul escuro
    borderWidth: 1,
    color: "#003fa6",
    fontWeight: 'bold',
  },

  boxPost: {
    height: 35,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#e3e3e3", 
    width: "100%",
    marginBottom: 5,
    borderColor: "#004080", // Azul escuro
    borderWidth: 1,
  },

  boxText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#003366", // Azul escuro
    marginBottom: 3,
  },

  boxID: {
    width: "20%",
    height: 35,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    borderColor: "#004080", // Azul escuro
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },

  btn: {
    width: "15%",
    height: 35,
    backgroundColor: "#003366", // Azul escuro
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },

  btnText: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 14,
  },
});

export default styles;
