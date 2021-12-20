import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabsParamList } from './tabsParamList';
import { useTheme } from 'styled-components';
import { Icons } from '@shared/ui/core/atoms';
import { PlugPage } from '@shared/ui/core/pages';
import { TabBarIcon } from '@shared/ui/core/molecules';
import { PaymentPageConnector } from '@pages/ui';

function Home() {
  return <PlugPage headerTitle="Главная" title={'Главная'} />;
}

function Atm() {
  return <PlugPage headerTitle="Банкоматы" title={'Банкоматы'} />;
}

function Profile() {
  return <PlugPage headerTitle="Профиль" title={'Профиль'} />;
}

const Tabs = createBottomTabNavigator<tabsParamList>();

export const TabsNavigation = () => {
  const theme = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.palette.background.primary,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: 'Главная',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Главная" Icon={Icons.Wallet} focused={focused} />
          ),
        })}
      />
      <Tabs.Screen
        name="Payment"
        component={PaymentPageConnector}
        options={{
          headerShown: false,
          title: 'Платежи',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Платежи"
              Icon={Icons.Payment}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Atm"
        component={Atm}
        options={{
          title: 'Банкоматы',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Банкоматы" Icon={Icons.Atm} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Профиль',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Профиль"
              Icon={Icons.Profile}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
