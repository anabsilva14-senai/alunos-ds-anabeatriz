import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home.js';
import Calendario from './screens/Calendario.js';
import Contatos from './screens/Contatos.js';
import Links from './screens/Links.js';
import Informacoes from './screens/Informacoes.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Calendario' component={Calendario} />
        <Stack.Screen name='Contatos' component={Contatos} />
        <Stack.Screen name='Links' component={Links} />
        <Stack.Screen name='Informacoes' component={Informacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
