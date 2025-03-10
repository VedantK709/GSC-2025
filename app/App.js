import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

// Import screens
import Welcome from './src/screens/Welcome/Welcome';
import UserType from './src/screens/Welcome/UserType';
import PatientLogin from './src/screens/Patient/PatientLogin';
import ResearcherLogin from './src/screens/Researcher/ResearcherLogin';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer
      {...(Platform.OS === 'web' && {
        linking: {
          prefixes: ['http://localhost:19006', 'https://researchrx.com'],
          config: {
            screens: {
              Welcome: '',
              UserType: 'choose-role',
              ResearcherLogin: 'researcher/login',
              PatientLogin: 'patient/login',
            },
          },
        },
      })}
    >
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === 'web' ? 'none' : 'default',
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={Welcome}
          options={{
            title: 'Welcome to ResearchRx',
          }}
        />
        <Stack.Screen 
          name="UserType" 
          component={UserType}
          options={{
            title: 'Choose Your Role',
          }}
        />
        <Stack.Screen 
          name="PatientLogin" 
          component={PatientLogin}
          options={{
            title: 'Patient Login',
          }}
        />
        <Stack.Screen 
          name="ResearcherLogin" 
          component={ResearcherLogin}
          options={{
            title: 'Researcher Login',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
