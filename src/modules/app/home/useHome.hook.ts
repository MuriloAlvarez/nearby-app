import { api } from '@/services/api';
import { CategoriesProps } from '@/shared/components/categories/categories';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { PlaceProps } from '../places/components/place';

type MarketProps = PlaceProps;

export default function useHomePage() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [markets, setMarkets] = useState<MarketProps[]>([]);
  const [category, setCategory] = useState('');
  const [isLoadingMarkets, setIsLoadingMarkets] = useState(false);

  const initialLocation = {
    latitude: -23.558537644307734,
    longitude: -46.65950803196077,
  };

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories');
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as categorias.');
    }
  }

  async function fetchMarkets() {
    setIsLoadingMarkets(true);
    try {
      if (!category) return;
      const { data } = await api.get(`/markets/category/${category}`);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível carregar os estabelecimentos.');
    } finally {
      setIsLoadingMarkets(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return {
    state: { categories, category, markets, isLoadingMarkets, initialLocation },
    methods: { setCategories, setCategory, setMarkets },
  };
}
