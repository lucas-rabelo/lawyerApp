import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';

// pages
import { Home } from "@pages/Home";

// components
import { Loading } from "@components/Controllers/Loading";

// hooks
import { useTheme } from '@hooks/useTheme';

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
      <Home />
    </ThemeProvider>
  );
}
