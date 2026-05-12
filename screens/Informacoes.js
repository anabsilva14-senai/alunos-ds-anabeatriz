import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { styles as homeStyles } from './Home';

export default function Informacoes({ navigation }) {
    const informacoes = [
        { titulo: 'História da Instituição', descricao: 'O SENAI foi criado em 1942 e é a maior rede de educação profissional e tecnológica da América Latina.' },
        { titulo: 'Missão, visão e valores', descricao: 'Missão: Promover a educação profissional e tecnológica. Visão: Ser referência em inovação industrial.' },
        { titulo: 'Endereço', descricao: 'Rua da Instituição, 123 - Centro, Cidade - Estado, CEP 00000-000.' },
        { titulo: 'Unidades (estados)', descricao: 'O SENAI possui unidades em todos os 26 estados e no Distrito Federal.' },
    ];

    return (
        <View style={styles.container}>
            {}
            <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.textoVoltar}>← Voltar</Text>
            </Pressable>

            <Image source={require('../assets/senai_logo.png')} style={styles.logo} />
            <View style={homeStyles.actions}>
                <Text style={homeStyles.text}>Informações Gerais</Text>
                <ScrollView style={styles.lista}>
                    {informacoes.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text style={styles.titulo}>{item.titulo}</Text>
                            <Text style={styles.descricao}>{item.descricao}</Text>
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
        paddingHorizontal: 20,
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff50',
        paddingVertical: 10,
        marginBottom: 5,
    },
    titulo: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    descricao: {
        color: '#e0e0e0',
        fontSize: 14,
        marginTop: 4,
    },
});
