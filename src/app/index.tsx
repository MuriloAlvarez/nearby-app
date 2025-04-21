import Welcome from '@/modules/app/welcome/welcome.page';
import { colors } from '@/shared/styles/colors';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, backgroundColor: colors.gray[100] }}>
      <Welcome />
    </View>
  );
}
