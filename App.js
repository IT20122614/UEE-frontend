import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigationBar from './components/BottomNavigationBar';
import ItemView from './components/ItemView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' options={{ headerShown: false }} component={BottomNavigationBar} />
        <Stack.Screen name='SingleView' options={{ headerShown: false }} component={ItemView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}