import {
  AcceptedDeclinedConnector,
  ConfirmationPageConnector,
  MoneyTransferPageConnector,
  ServicePageConnector,
} from '@pages/ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabsNavigation } from '../tabs-navigation/tabs-navigation';
import { stackParamList } from './stackParamList';

const Stack = createNativeStackNavigator<stackParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabs" component={TabsNavigation} />
      <Stack.Screen name="services" component={ServicePageConnector} />
      <Stack.Screen name="salary" component={MoneyTransferPageConnector} />
      <Stack.Screen name="confirmation" component={ConfirmationPageConnector} />
      <Stack.Screen
        name="acceptedDeclined"
        component={AcceptedDeclinedConnector}
      />
    </Stack.Navigator>
  );
};