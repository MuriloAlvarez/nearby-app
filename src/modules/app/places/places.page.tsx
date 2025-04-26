import { useRef } from 'react';
import Place, { PlaceProps } from './components/place';
import { Text, useWindowDimensions } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { s } from './places.style';
import Loading from '@/shared/components/loading';
import usePlacesPage from './usePlaces.hook';

type Props = {
  data: PlaceProps[];
  isLoading: boolean;
};

export default function PlacesPage({ data, isLoading }: Props) {
  const {
    methods: { push },
  } = usePlacesPage();
  const dimensions = useWindowDimensions();
  const snapPoints = {
    min: 128,
    max: dimensions.height - 200,
  };
  const BottomSheetRefs = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      enableOverDrag={false}
      backgroundStyle={s.container}
      ref={BottomSheetRefs}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
    >
      <BottomSheetFlatList
        ListHeaderComponent={() => (isLoading && !data ? <Loading /> : <Text style={s.title}>Explore locais perto de você</Text>)}
        contentContainerStyle={s.content}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} onPress={() => push({ pathname: '/market-details', params: { id: item.id } })} />}
      />
    </BottomSheet>
  );
}
