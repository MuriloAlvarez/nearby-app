import { api } from '@/services/api';
import { CategoriesProps } from '@/shared/components/categories/categories';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function useHomePage() {
  const [categories, setCategories] = useState<CategoriesProps>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories');
      setCategories(data);
    } catch (error) {
      Alert.alert('Categorias', 'Não foi possível carregar as categorias.');
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    state: { categories },
    methods: { setCategories },
  };
}
