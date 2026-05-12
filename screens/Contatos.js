import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { styles as homeStyles } from './Home';

export default function Contatos({ navigation }) {
    const contatos = [
        { titulo: 'Professores', info: 'professores@senai.br' },
        { titulo: 'Coordenação', info: 'coordenacao@senai.br' },
        { titulo: 'Secretária', info: 'secretaria@senai.br' },
        { titulo: 'CAA', info: 'caa@senai.br' },
    ];

    return (
        <View style={styles.container}>
            {}
            <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.textoVoltar}>← Voltar</Text>
            </Pressable>

            <Image source={require('../assets/senai_logo.png')} style={styles.logo} />
            <View style={homeStyles.actions}>
                <Text style={homeStyles.text}>Contatos</Text>
                <ScrollView style={styles.lista}>
                    {contatos.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text style={styles.titulo}>{item.titulo}</Text>
                            <Text style={styles.info}>{item.info}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={homeStyles.footer}>
                <Text style={homeStyles.footerText}>Projeto de estudo Alunos-DS-SENAI.</Text>
                <Text style={homeStyles.footerText}>Desenvolvido por Ana Beatriz.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a237e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoVoltar: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: '#4180AB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        zIndex: 10,
    },
    textoVoltar: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 120,
        height: 60,
        resizeMode: 'contain',
        marginTop: 20,
    },
    lista: {
        width: '100%',
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff50',
        paddingVertical: 10,
    },
    titulo: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    info: {
        color: '#e0e0e0',
        fontSize: 14,
    },
});
