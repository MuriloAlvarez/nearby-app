import { useRouter } from 'expo-router';

export default function useWelcomePage() {
  const { navigate } = useRouter();

  return {
    methods: {
      navigate,
    },
  };
}
