import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { PlaceProps } from '../places/components/place';
import { useToastify } from '@/shared/hooks/toastify';
import { api } from '@/services/api';

type DetailsProps = PlaceProps & {
  phone: string;
  categoryId: string;
  rules: {
    id: string;
    description: string;
  }[];
};

export default function useMarketDetails() {
  const { back } = useRouter();
  const [isLoadingMarkets, setIsLoadingMarkets] = useState(false);
  const [detailsMarket, setDetailsMarket] = useState<DetailsProps>();
  const toast = useToastify();
  const params = useLocalSearchParams<{ id: string }>();

  async function fetchMarkets() {
    setIsLoadingMarkets(true);
    try {
      const { data } = await api.get(`/markets/${params.id}`);
      setDetailsMarket(data);
    } catch (error) {
      console.log(error);
      toast.methods.alert('error', 'Não foi possível carregar os estabelecimentos.');
    } finally {
      setIsLoadingMarkets(false);
    }
  }

  useEffect(() => {
    fetchMarkets();
  }, [params.id]);

  return {
    methods: {
      back,
    },
    state: {
      detailsMarket,
      isLoadingMarkets,
    },
  };
}
