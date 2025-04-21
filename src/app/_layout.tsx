import { Stack, Slot } from 'expo-router';
import { useFonts, Rubik_700Bold, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium } from '@expo-google-fonts/rubik';
import Loading from '@/shared/components/loading';
import { colors } from '@/shared/styles/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.gray[100],
          },
        }}
      >
        <Slot />
      </Stack>
    </GestureHandlerRootView>
  );
}
