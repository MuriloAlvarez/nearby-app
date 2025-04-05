import Welcome from '@/modules/app/welcome/welcome.page';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40 }}>
      <Welcome />
    </View>
  );
}
