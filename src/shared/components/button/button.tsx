import { colors } from '@/shared/styles/colors';
import { fontFamily } from '@/shared/styles/font-family';
import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.9}
      style={{
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.green.base,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
      {...rest}
    >
      {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={{ fontSize: 16, fontFamily: fontFamily.regular, color: colors.gray[100] }}>{children}</Text>;
}

Button.Title = Title;

export { Button };
