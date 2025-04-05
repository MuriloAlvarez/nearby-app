import { colors } from '@/shared/styles/colors';
import { fontFamily } from '@/shared/styles/font-family';
import { categoriesIcons } from '@/shared/utils/categories-icons';
import { Pressable, Text, PressableProps } from 'react-native';

type Props = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export default function Categorie({ iconId, isSelected = false, name, ...rest }: Props) {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable
      style={{
        backgroundColor: isSelected ? colors.green.base : colors.gray[100],
        borderColor: isSelected ? colors.green.base : colors.gray[300],
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 36,
        flexDirection: 'row',
        maxWidth: 200,
        flex: 1,
      }}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={{ color: isSelected ? colors.gray[100] : colors.gray[500] }}>{name}</Text>
    </Pressable>
  );
}
