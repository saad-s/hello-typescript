
import { useUser } from './use-user';
import { useLoading } from './use-loading';
import { LOADING_KEYS } from '../../store/ui';
import { useCallback } from 'react';

export const useComposeField = () => {
  const { isSignedIn } = useUser();
  const { isLoading } = useLoading(LOADING_KEYS.SEND_HEY);


  const onSubmit = useCallback(() => {
    if (!isSignedIn) {
      return;
    }
  }, [isSignedIn]);

  return {
    onSubmit,
    isSignedIn,
    isLoading,
  };
};
