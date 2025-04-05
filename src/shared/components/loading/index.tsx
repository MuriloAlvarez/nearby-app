import { colors } from '@/shared/styles/colors';
import { ActivityIndicator } from 'react-native';

export default function Loading() {
  return <ActivityIndicator style={{ backgroundColor: colors.gray[100], flex: 1, justifyContent: 'center', alignItems: 'center' }} color={colors.green.base} />;
}
