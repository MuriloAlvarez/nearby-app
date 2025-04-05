import Categories from '@/shared/components/categories/categories';
import { Text, View } from 'react-native';
import useHomePage from './useHome.hook';

export default function HomePage() {
  const {
    methods: { setSelected },
    state: { categories, selected },
  } = useHomePage();

  return (
    <View>
      <Categories data={categories} onSelected={setSelected} selected={selected} />
      <Text>Home</Text>
    </View>
  );
}
