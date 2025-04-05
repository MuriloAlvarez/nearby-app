import Categories from '@/shared/components/categories/categories';
import { Text, View } from 'react-native';
import useHomePage from './useHome.hook';

export default function HomePage() {
  const {
    methods: {},
    state: { categories },
  } = useHomePage();

  return (
    <View>
      <Categories data={categories} />
      <Text>Home</Text>
    </View>
  );
}
