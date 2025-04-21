import { colors } from '@/shared/styles/colors';
import { fontFamily } from '@/shared/styles/font-family';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: { backgroundColor: colors.gray[100] },
  content: { gap: 12, padding: 20, paddingBottom: 40 },
  indicator: { backgroundColor: colors.gray[300], width: 80 },
  title: { fontFamily: fontFamily.regular, fontSize: 18, color: colors.gray[500], marginBottom: 16 },
});
