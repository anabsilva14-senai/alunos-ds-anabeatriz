import { StyleSheet, Text, View, Image, Linking, Pressable, useWindowDimensions } from 'react-native';
import { styles as homeStyles } from './Home';

export default function Calendario({ navigation }) {
    const calendarioUrl = 'https://sesibahia.sharepoint.com/:x:/s/FS5/IQA-xFBoXHo0SYLl6uvQiX9GAds0NyLB6t2UZCOHxzhL3bE?rtime=AeqqfL-v3kg';
    const { width } = useWindowDimensions();

    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    const isMobile = width < 768;

    const calendarioWidth = isMobile ? width * 0.85 : isTablet ? width * 0.6 : width * 0.5;
    const calendarioHeight = isMobile ? 250 : isTablet ? 350 : 400;
    const fontSize = isMobile ? 14 : isTablet ? 16 : 18;

    return (
        <View style={styles.container}>
            {}
            <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.textoVoltar}>← Voltar</Text>
            </Pressable>

            <Image
                source={require('../assets/senai_logo.png')}
                style={[styles.logo, { width: 120, height: 60 }]}
            />
            <View style={[homeStyles.actions, { width: isMobile ? '90%' : isTablet ? '80%' : '70%' }]}>
                <Text style={[homeStyles.text, { fontSize: fontSize + 4 }]}>Calendário Acadêmico</Text>

                <Image
                    source={require('../assets/calendario.png')}
                    style={[
                        styles.calendario,
                        {
                            width: calendarioWidth,
                            height: calendarioHeight,
                            maxWidth: 500,
                            maxHeight: 400
                        }
                    ]}
                />

                <Pressable
                    style={[styles.botaoLink, { width: isMobile ? '80%' : '60%' }]}
                    onPress={() => Linking.openURL(calendarioUrl)}
                >
                    <Text style={[styles.textoBotao, { fontSize: fontSize }]}>
                        📅 Acessar Calendário Online
                    </Text>
                </Pressable>
            </View>
            <View style={homeStyles.footer}>
                <Text style={[homeStyles.footerText, { fontSize: fontSize - 2 }]}>
                    Projeto de estudo Alunos-DS-SENAI.
                </Text>
                <Text style={[homeStyles.footerText, { fontSize: fontSize - 2 }]}>
                    Desenvolvido por Ana Beatriz.
                </Text>
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
        resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 10,
    },
    calendario: {
        resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 20,
    },
    botaoLink: {
        backgroundColor: '#199CFA',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 32,
        marginTop: 20,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
