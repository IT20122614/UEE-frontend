import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogCreateForm from "../BlogCreateForm";
import ComplainCreateForm from "../ComplainCreateForm";
import EventCreateForm from "../EventCreateForm";
import BlogsPage from "../BlogsPage";
import HomePage from "../HomePage";
import EventsPage from "../EventsPage";
import ComplainsPage from "../ComplainsPage";
const Stack = createNativeStackNavigator();

export default function ChemicalNavigation() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Chemical Management" component={HomePage} />
      <Stack.Screen name="Blogs" component={BlogsPage} />
      <Stack.Screen name="Event" component={EventCreateForm} />
      <Stack.Screen name="Events" component={EventsPage} />
      <Stack.Screen name="Complain" component={ComplainCreateForm} />
      <Stack.Screen name="Complains" component={ComplainsPage} />
      <Stack.Screen name="Blog" component={BlogCreateForm} />
    </Stack.Navigator>
  );
}
