import { Image, Text, View } from 'react-native';
import { Step } from './components/step/step';
import { Button } from '@/shared/components/button/button';
import { colors } from '@/shared/styles/colors';
import useWelcomePage from './useWelcome.hook';

export default function Welcome() {
  const {
    methods: { push },
  } = useWelcomePage();

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require('@/shared/assets/logo.png')} style={{ width: 48, height: 48, marginVertical: 28 }} />
        <View>
          <Text className="text-2xl font-bold text-gray-600" style={{ fontSize: 24, fontWeight: 'bold', color: colors.gray[600] }}>
            Boas-Vindas ao Nearby
          </Text>
          <Text style={{ color: colors.gray[500], fontSize: 16, marginTop: 8 }}>Tenha cupons de vantagens para usar em seus estabelecimentos favoritos.</Text>
        </View>
      </View>

      <Step />

      <Button onPress={() => push('/home')}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
