import { colors } from '@/shared/styles/colors';
import { fontFamily } from '@/shared/styles/font-family';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  titleCallout: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.gray[600],
  },
  addressCallout: { fontFamily: fontFamily.regular, fontSize: 12, color: colors.gray[400] },
  imageCallout: {
    height: 80,
    width: '100%',
    borderRadius: 8,
  },
});
