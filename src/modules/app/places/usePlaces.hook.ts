import { useRouter } from 'expo-router';

export default function usePlacesPage() {
  const { push } = useRouter();

  return {
    methods: {
      push,
    },
  };
}
