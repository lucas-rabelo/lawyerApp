import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';

// pages
import { Home } from "@pages/Home";
import { FindLawyer } from '@pages/FindLawyer';
import { AskLawyer } from '@pages/AskLawyer';

// components
import { Loading } from "@components/Controllers/Loading";

// hooks
import { useTheme } from '@hooks/useTheme';
import { LawyerDetails } from '@pages/LawyerDetails';
import { AuthProvider } from '@hooks/useAuth';

export default function App() {

  const { theme } = useTheme();

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold
  })

  // if (!fontsLoaded) {
  //   return <Loading />
  // }

  return (
    <>
        <StatusBar
            barStyle="light-content"
            translucent
        />
        <AuthProvider>
            { !fontsLoaded ? <Loading /> : <LawyerDetails /> }
        </AuthProvider>
    </>
  );
}
