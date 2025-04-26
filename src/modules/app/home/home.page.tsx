import Categories from '@/shared/components/categories/categories';
import { Image, Text, View } from 'react-native';
import useHomePage from './useHome.hook';
import PlacesPage from '../places/places.page';
import MapView, { Callout, Marker } from 'react-native-maps';
import { s } from './home.styles';

export default function HomePage() {
  const {
    methods: { setCategory, push },
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
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: initialLocation.latitude,
            longitude: initialLocation.longitude,
          }}
          identifier="current"
          image={require('@/shared/assets/location.png')}
        />

        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            image={require('@/shared/assets/pin.png')}
          >
            <Callout
              onPress={() =>
                push({
                  pathname: '/market-details',
                  params: { id: item.id },
                })
              }
            >
              <View>
                <Image style={s.imageCallout} source={{ uri: item.cover }} />
                <View style={{ height: 12 }} />
                <Text style={s.titleCallout}>{item.name}</Text>
                <Text style={s.addressCallout}>{item.address}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <PlacesPage data={markets} isLoading={isLoadingMarkets} />
    </View>
  );
}
