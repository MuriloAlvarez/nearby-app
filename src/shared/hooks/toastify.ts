import { Toast } from 'toastify-react-native';

export function useToastify() {
  const alert = (type: 'error' | 'success', message?: string) => {
    const fallbackMsgs = {
      error: 'Erro',
      success: 'Sucesso',
    };

    Toast.show({
      type: type,
      text1: fallbackMsgs[type],
      text2: message,
      position: 'top',
      visibilityTime: 5000,
      autoHide: true,
    });
  };
  return {
    methods: {
      alert,
    },
  };
}
