import { StyleSheet, Text, View, Image, ScrollView, Linking, Pressable } from 'react-native';
import { styles as homeStyles } from './Home';

export default function Links({ navigation }) {
    const links = [
        { titulo: 'Site da Instituição', url: 'https://www.senaibahia.com.br' },
        {
            titulo: 'Sobre o curso', url: 'https://tecnico.senaibahia.com.br/curso/tecnico-em-desenvolvimento-de-sistemas/' },
        { titulo: 'Link do calendário', url: 'https://sesibahia.sharepoint.com/:x:/s/FS5/IQA-xFBoXHo0SYLl6uvQiX9GAds0NyLB6t2UZCOHxzhL3bE?rtime=AeqqfL-v3kg' },
        { titulo: 'Portal do Aluno', url: 'https://senaiweb6.fieb.org.br/framehtml/web/app/edu/PortalEducacional/login/' },
    ];

    return (
        <View style={styles.container}>
            {}
            <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.textoVoltar}>← Voltar</Text>
            </Pressable>

            <Image source={require('../assets/senai_logo.png')} style={styles.logo} />
            <View style={homeStyles.actions}>
                <Text style={homeStyles.text}>Links Úteis</Text>
                <ScrollView style={styles.lista}>
                    {links.map((item, index) => (
                        <Pressable
                            key={index}
                            style={styles.item}
                            onPress={() => Linking.openURL(item.url)}
                        >
                            <Text style={styles.linkTexto}>{item.titulo}</Text>
                        </Pressable>
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
        paddingVertical: 12,
    },
    linkTexto: {
        color: '#ffffff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
