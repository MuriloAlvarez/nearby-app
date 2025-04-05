import { FlatList, View } from 'react-native';
import Categorie from './components/categorie';

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
};

export default function Categories({ data }: Props) {
  return (
    <View style={{ position: 'absolute', top: 64, zIndex: 1, width: '100%' }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Categorie name={item.name} iconId={item.id} />}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 16 }}
        style={{ maxHeight: 36 }}
      />
    </View>
  );
}
