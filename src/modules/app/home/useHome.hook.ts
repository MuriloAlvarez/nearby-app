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
    try {
      if (!category) return;
      const { data } = await api.get(`/markets/category/${category}`);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível carregar os estabelecimentos.');
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return {
    state: { categories, category, markets },
    methods: { setCategories, setCategory, setMarkets },
  };
}
