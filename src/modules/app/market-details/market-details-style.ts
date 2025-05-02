import { colors } from '@/shared/styles/colors';
import { fontFamily } from '@/shared/styles/font-family';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  buttonBack: { position: 'absolute', top: 24, left: 24, zIndex: 20, width: 56 },
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: colors.gray[300],
    height: 260,
    marginBottom: -20,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: colors.gray[600],
  },
  description: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[500],
  },
  couponsAvailable: {
    backgroundColor: colors.red.light,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  numerCoupon: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: colors.gray[600],
    marginLeft: 10,
  },
  titleCoupon: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[600],
    marginLeft: 4,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray[200],
  },
  titleDetails: {
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
    fontSize: 16,
    marginBottom: 8,
  },
  descriptionDetails: {
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    fontSize: 14,
    marginTop: 6,
  },
  contentDetails: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
});
