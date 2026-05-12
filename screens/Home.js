import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={require('../assets/senai_logo.png')} style={styles.logo} />
            <View style={styles.actions}>
                <Text style={styles.text}>Desenvolvimento de Sistemas</Text>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('Calendario')}>
                    <Text style={styles.buttonText}>Calendário</Text>
                </Pressable>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('Contatos')}>
                    <Text style={styles.buttonText}>Contatos</Text>
                </Pressable>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('Links')}>
                    <Text style={styles.buttonText}>Links</Text>
                </Pressable>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('Informacoes')}>
                    <Text style={styles.buttonText}>Informações</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Projeto de estudo Alunos-DS-SENAI.</Text>
                <Text style={styles.footerText}>Desenvolvido por Ana Beatriz.</Text>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a237e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 75,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    actions: {
        paddingVertical: 24,
        paddingHorizontal: 24,
        backgroundColor: '#4180AB',
        width: '80%',
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#4180AB',
        gap: 52,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#199CFA',
        borderRadius: 32,
        padding: 15,
        alignItems: 'center',
        width: '60%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 18,
    },
    footer: {
        gap: 20,
        width: '80%',
        marginTop: 20,
    },
    footerText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 12.5,
    }
});
