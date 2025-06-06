// Importa as bibliotecas React e React Native necessárias
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import './../../translate/i18n';
import { useTranslation } from "react-i18next";

// Importa os estilos personalizados
import styles from "../../assets/styles";
import { ScrollView } from "react-native-web";

// Define o componente funcional About, que recebe props como argumento
export default function About(props) {

    const {t, i18n} = useTranslation()

    // Desestrutura a prop item das props recebidas
    const { item } = props;

    // Define um estado local abilities, inicializado como um array vazio
    const [abilities, setAbilities] = useState([]);

    // useEffect é usado para executar um efeito colateral após a renderização do componente
    useEffect(() => {
        // Função para extrair as habilidades do item e atualizar o estado abilities
        function getAbility() {
            let arr = [];
            for (let i = 0; i < item.abilities.length; i++) {
                arr.push(t(item.abilities[i].ability.name));
            }
            return setAbilities(arr);
        }

        // Chama a função getAbility para atualizar o estado abilities
        getAbility();
    }, []); // O array vazio [] indica que o efeito será executado apenas uma vez, após a montagem do componente

    const hConversion = item.height * 10

    const wConversion = item.weight / 10

    // Renderiza a interface do usuário
    return (
        <ScrollView>
            {/* Exibe a espécie do item */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>{t('Species')}</Text>
                <Text style={styles.about__text}>{item.species}</Text>  
            </View>

            {/* Exibe a altura do item */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>{t('Height')}</Text>
                <Text style={styles.about__text}>{hConversion} cm</Text>
            </View>

            {/* Exibe o peso do item */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>{t('Weight')}</Text>
                <Text style={styles.about__text}>{wConversion} Kg</Text>
            </View>

            {/* Exibe as habilidades do item */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>{t("Abilities")}</Text>
                <Text style={styles.about__text}>{abilities.join(', ')}</Text>
            </View>
        </ScrollView>
    );
}
/*
Explicação Passo a Passo:
Importações:
React, useState e useEffect são importados do React.
Text e View são componentes do React Native.
styles é importado de um arquivo de estilos personalizado.
Definição do Componente About:
O componente About é definido como uma função que recebe props como argumento.
A prop item é desestruturada das props.
Estado Local:
abilities é um estado local inicializado como um array vazio, usando useState.
Efeito Colateral com useEffect:
useEffect é usado para executar a função getAbility após a montagem do componente.
getAbility cria um array arr e o preenche com os nomes das habilidades do item.
setAbilities é chamado para atualizar o estado abilities com o array arr.
Renderização:
O componente retorna uma View contendo várias View internas.
Cada View interna exibe uma propriedade do item (species, height, weight, abilities).
As habilidades são exibidas como uma string, unidas por vírgulas.
*/