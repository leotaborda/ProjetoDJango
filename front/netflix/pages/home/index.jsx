import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import axios from "axios";

export default function Home() {
  const [id, setID] = useState("");
  const [filmeG, setFilmeG] = useState("");
  const [generoG, setGeneroG] = useState("");
  const [anoG, setAnoG] = useState("");
  const [classifG, setClassifG] = useState("");
  const [idiomaG, setIdiomaG] = useState("");
  const [filme, setFilme] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [classif, setClassif] = useState("");
  const [idioma, setIdioma] = useState("");
  const [token, setToken] = useState("");
  const [capaURL, setCapaURL] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("token")
      .then((resp) => {
        if (token != null) {
          console.log("Token Home:", resp);
          setToken(resp);
        }
      })
      .catch((error) => {
        console.error("Erro ao salvar o token", error);
      });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("token")
      .then((resp) => {
        if (token != null) {
          console.log("Token Home:", resp);
          setToken(resp);
        }
      })
      .catch((error) => {
        console.error("Erro ao salvar o token", error);
      });
  }, []);

  const capturar = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/filme/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setFilmeG(response.data.titulo);
      setGeneroG(response.data.genre.genre);
      setAnoG(response.data.ano);
      setClassifG(response.data.classif.classif);
      setIdiomaG(response.data.idioma);
      setCapaURL(response.data.capaURL);
    } catch {
      console.log(Error);
    }
  };

  const enviar = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/listarfilmes",

        {
          titulo: filme,
          genero: genero,
          ano: ano,
          classif: classif,
          idioma: idioma,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Dados inseridos com sucesso...");
      setFilme("");
      setGenero("");
      setAno("");
      setClassif("");
      setIdioma("");
    } catch (error) {
      console.log("Erro ao inserir os dados...", error);
    }
  };

  const atualizar = async () => {
    try {
      const response = await axios.put(
        "http://127.0.0.1:8000/api/filme/" + id,
        {
          titulo: filmeG,
          genero: generoG,
          ano: anoG,
          classif: classifG,
          idioma: idiomaG,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Alterado com sucesso...");
    } catch (error) {
      console.log("Erro ao atualizar", error);
    }
  };

  const apagar = async () => {
    try {
      const response = await axios.delete(
        "http://127.0.0.1:8000/api/filme/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Apagado com sucesso...");
      setFilmeG("");
      setGeneroG("");
      setAnoG("");
      setClassifG("");
      setIdiomaG("");
    } catch (error) {
      console.log("Erro ao atualizar", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.styleGet}>
        <Text
          style={{
            marginBottom: 10,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
          }}
        >
          GET
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.boxText}>ID:</Text>
          <TextInput
            value={id}
            onChangeText={(e) => {
              setID(e);
            }}
            style={styles.boxID}
          />

          <Pressable style={styles.btn} onPress={capturar}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>GET</Text>
          </Pressable>

          <Pressable style={styles.btn} onPress={atualizar}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>PUT</Text>
          </Pressable>

          <Pressable style={styles.btn} onPress={apagar}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>DELETE</Text>
          </Pressable>
        </View>

        <Text style={styles.boxText}>Título</Text>
        <TextInput
          style={styles.boxGet}
          value={filmeG}
          onChangeText={(e) => setFilmeG(e)}
        />

        <Text style={styles.boxText}>Gênero</Text>
        <TextInput
          style={styles.boxGet}
          value={generoG}
          onChangeText={(e) => setGeneroG(e)}
        />

        <Text style={styles.boxText}>Ano de Lançamento</Text>
        <TextInput
          style={styles.boxGet}
          value={anoG}
          onChangeText={(e) => setAnoG(e)}
        />

        <Text style={styles.boxText}>Idioma</Text>
        <TextInput
          style={styles.boxGet}
          value={idiomaG}
          onChangeText={(e) => setIdiomaG(e)}
        />

        <Text style={styles.boxText}>Classificação</Text>
        <TextInput
          style={styles.boxGet}
          value={classifG}
          onChangeText={(e) => setClassifG(e)}
        />
      </View>

      <View style={styles.stylePost}>
        <Text
          style={{
            marginBottom: 10,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
          }}
        >
          POST
        </Text>

        <Text style={styles.boxText}>Título</Text>
        <TextInput
          value={filme}
          onChangeText={(e) => {
            setFilme(e);
          }}
          style={styles.boxPost}
        />

        <Text style={styles.boxText}>Gênero</Text>
        <TextInput
          value={genero}
          onChangeText={(e) => {
            setGenero(e);
          }}
          style={styles.boxPost}
        />

        <Text style={styles.boxText}>Ano de Lançamento</Text>
        <TextInput
          value={ano}
          onChangeText={(e) => {
            setAno(e);
          }}
          style={styles.boxPost}
        />

        <Text style={styles.boxText}>Idioma</Text>
        <TextInput
          value={idioma}
          onChangeText={(e) => {
            setIdioma(e);
          }}
          style={styles.boxPost}
        />

        <Text style={styles.boxText}>Classificação</Text>
        <TextInput
          value={classif}
          onChangeText={(e) => {
            setClassif(e);
          }}
          style={styles.boxPost}
        />

        <Pressable style={styles.btn} onPress={enviar}>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>POST</Text>
        </Pressable>
      </View>
    </View>
  );
}
