import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecyclableItemsList from './RecyclableItemsList';
import MyRecyclableItems from './MyRecyclableItems';
import AddRecyclableItem from './AddRecyclableItem';

const Tab = createBottomTabNavigator();

export default function BottomNavigationBar() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarActiveBackgroundColor: "green",
            tabBarInactiveTintColor: "black",
            tabBarInactiveBackgroundColor: "#dcfcdc",
            tabBarIconStyle: { display: "none" },
            tabBarStyle: { height: 50 },
            tabBarLabelStyle: { fontSize: 12, marginBottom: 13, fontWeight: '500' }
        }}>
            <Tab.Screen name="Recyclable Items List" component={RecyclableItemsList} />
            <Tab.Screen name="Add Recyclable Item" component={AddRecyclableItem} />
            <Tab.Screen name="My Recyclable Items" component={MyRecyclableItems} />
        </Tab.Navigator>
    );
}