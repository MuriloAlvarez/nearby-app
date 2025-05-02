import { api } from '@/services/api';
import { CategoriesProps } from '@/shared/components/categories/categories';
import { useEffect, useState } from 'react';
import { PlaceProps } from '../places/components/place';
import { useRouter } from 'expo-router';
import { useToastify } from '@/shared/hooks/toastify';

type MarketProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

export default function useHomePage() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [markets, setMarkets] = useState<MarketProps[]>([]);
  const [category, setCategory] = useState('');
  const [isLoadingMarkets, setIsLoadingMarkets] = useState(false);
  const { push } = useRouter();

  const initialLocation = {
    latitude: -23.558537644307734,
    longitude: -46.65950803196077,
  };

  const toast = useToastify();

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories');
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      toast.methods.alert('error', 'Não foi possível carregar as categorias.');
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
      toast.methods.alert('error', 'Não foi possível carregar os estabelecimentos.');
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
    methods: { setCategories, setCategory, setMarkets, push },
  };
}
