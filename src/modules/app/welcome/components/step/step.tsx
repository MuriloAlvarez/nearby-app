import { Text, View } from 'react-native';
import { Steps } from './steps';
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native';
import { fontFamily } from '@/shared/styles/font-family';
import { colors } from '@/shared/styles/colors';

export function Step() {
  return (
    <View style={{ flex: 1, gap: 16, marginTop: 40 }}>
      <Text style={{ fontSize: 16, fontFamily: fontFamily.regular, color: colors.gray[600] }}>Veja como funciona:</Text>

      <View style={{ flex: 1, gap: 24 }}>
        <Steps icon={IconMapPin} description="Veja locais perto de você que são parceiros Nearby" title="Encontre estabelecimentos" />
        <Steps icon={IconQrcode} description="Veja locais perto de você que são parceiros Nearby" title="Encontre estabelecimentos" />
        <Steps icon={IconTicket} description="Veja locais perto de você que são parceiros Nearby" title="Encontre estabelecimentos" />
      </View>
    </View>
  );
}
