import {
  AcceptedDeclinedConnector,
  ConfirmationPageConnector,
  ErrorPageConnector,
  EverythingGoodPageConnector,
  MoneyTransferPageConnector,
  OtpConfirmationPageConnector,
  PasswordPageConnector,
  PhoneAuthPageConnector,
  ServicePageConnector,
} from '@pages/ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useStore } from 'effector-react';
import { $isAuthorised } from '../../../../models';
import { TabsNavigation } from '../tabs-navigation';
import { stackParamList } from './stackParamList';

const Stack = createNativeStackNavigator<stackParamList>();

export const StackNavigation = () => {
  const isAuthorised = useStore($isAuthorised);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isAuthorised ? (
        <>
          <Stack.Screen name="phoneAuth" component={PhoneAuthPageConnector} />
          <Stack.Screen
            name="otpAuth"
            component={OtpConfirmationPageConnector}
          />
          <Stack.Screen name="passwordAuth" component={PasswordPageConnector} />
          <Stack.Screen
            name="everythingGood"
            component={EverythingGoodPageConnector}
          />
          <Stack.Screen name="error" component={ErrorPageConnector} />
        </>
      ) : (
        <>
          <Stack.Screen name="tabs" component={TabsNavigation} />
          <Stack.Screen name="services" component={ServicePageConnector} />
          <Stack.Screen name="salary" component={MoneyTransferPageConnector} />
          <Stack.Screen
            name="confirmation"
            component={ConfirmationPageConnector}
          />
          <Stack.Screen
            name="acceptedDeclined"
            component={AcceptedDeclinedConnector}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
