import { Text, View } from 'react-native';
import { IconProps } from '@tabler/icons-react-native';
import { fontFamily } from '@/shared/styles/font-family';
import { colors } from '@/shared/styles/colors';

interface StepsProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export function Steps({ description, title, icon: Icon }: Readonly<StepsProps>) {
  return (
    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: 16 }}>
      {Icon && <Icon color={colors.red.base} size={32} />}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontFamily: fontFamily.semiBold, color: colors.gray[600] }}>{title}</Text>
        <Text style={{ fontSize: 14, fontFamily: fontFamily.regular, marginTop: 8, color: colors.gray[500] }}>{description}</Text>
      </View>
    </View>
  );
}
