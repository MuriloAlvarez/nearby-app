import { useRouter } from 'expo-router';

export default function useWelcomePage() {
  const { push } = useRouter();

  return {
    methods: {
      push,
    },
  };
}
