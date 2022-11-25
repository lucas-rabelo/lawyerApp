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
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
      />
      { !fontsLoaded ? <Loading /> : <LawyerDetails /> }
      {/* <Home /> */}
    </ThemeProvider>
  );
}
