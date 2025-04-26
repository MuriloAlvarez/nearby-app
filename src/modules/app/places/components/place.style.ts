import { colors } from '@/shared/styles/colors';
import { fontFamily } from '@/shared/styles/font-family';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    borderColor: colors.gray[200],
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: { height: 104, width: 116, backgroundColor: colors.gray[200], borderRadius: 8 },
  content: { gap: 6, flex: 1 },
  title: { fontFamily: fontFamily.semiBold, fontSize: 14, color: colors.gray[600] },
  description: { fontFamily: fontFamily.regular, fontSize: 12, color: colors.gray[500] },
  footer: { display: 'flex', gap: 7, flexDirection: 'row' },
  tickets: { fontFamily: fontFamily.regular, fontSize: 12, color: colors.gray[400] },
});
