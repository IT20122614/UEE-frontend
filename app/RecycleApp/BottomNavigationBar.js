import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecyclableItemsList from './RecyclableItemsList';
import MyRecyclableItems from './MyRecyclableItems';
import AddRecyclableItem from './AddRecyclableItem';

const Tab = createBottomTabNavigator();

export default function BottomNavigationBar() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#969696",
            tabBarIconStyle: { display: "none" },
            tabBarStyle: { paddingVertical: 0, backgroundColor: 'white', position: 'absolute', height: 54 },
            tabBarLabelStyle: { fontSize: 12, marginBottom: 13, fontWeight: '500', paddingBottom: 3 },
            tabBarItemStyle: { backgroundColor: '#00ff00', margin: 1, borderRadius: 5 }
        }}>
            <Tab.Screen name="Recyclable Items List" component={RecyclableItemsList} />
            <Tab.Screen name="Add Recyclable Item" component={AddRecyclableItem} />
            <Tab.Screen name="My Recyclable Items" component={MyRecyclableItems} />
        </Tab.Navigator>
    );
}