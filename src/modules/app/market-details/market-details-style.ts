import { colors } from '@/shared/styles/colors';
import { fontFamily } from '@/shared/styles/font-family';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  buttonBack: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 20,
    width: 40,
    height: 40,
    backgroundColor: colors.green.base,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: colors.gray[300],
    height: 210,
    marginBottom: -20,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    flex: 1,
    marginBottom: 20,
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
    fontSize: 14,
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
    gap: 16,
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
    marginBottom: 10,
  },
  descriptionDetails: {
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    fontSize: 14,
  },
  contentDetails: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  actionMap: {
    width: 56,
  },
  actionQRCode: {
    flex: 1,
  },
  textQRCode: {
    fontFamily: fontFamily.semiBold,
    color: colors.gray[100],
    fontSize: 14,
    marginLeft: 16,
  },
});
