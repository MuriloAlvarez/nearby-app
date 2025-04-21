import Categories from '@/shared/components/categories/categories';
import { Text, View } from 'react-native';
import useHomePage from './useHome.hook';
import PlacesPage from '../places/places.page';

export default function HomePage() {
  const {
    methods: { setCategory },
    state: { categories, category, markets, isLoadingMarkets },
  } = useHomePage();

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} onSelected={setCategory} selected={category} />
      <PlacesPage data={markets} isLoading={isLoadingMarkets} />
    </View>
  );
}
