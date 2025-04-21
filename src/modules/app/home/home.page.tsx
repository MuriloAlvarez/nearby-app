import Categories from '@/shared/components/categories/categories';
import { Text, View } from 'react-native';
import useHomePage from './useHome.hook';
import PlacesPage from '../places/places.page';
import MapView from 'react-native-maps';

export default function HomePage() {
  const {
    methods: { setCategory },
    state: { categories, category, markets, isLoadingMarkets, initialLocation },
  } = useHomePage();

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} onSelected={setCategory} selected={category} />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      />
      <PlacesPage data={markets} isLoading={isLoadingMarkets} />
    </View>
  );
}
