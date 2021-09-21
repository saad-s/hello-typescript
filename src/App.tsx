import './App.css';
import { border } from './common/utils';
import { Fade, Box, Stack, Flex, color, transition } from '@stacks/ui';
import { useComposeField } from './common/hooks/use-compose-field';
import { ConnectWalletButton } from './components/connect-wallet-button';

function App() {
  const {onSubmit, isSignedIn, isLoading } = useComposeField();
  return (
    <ConnectWalletButton  />
  );
}

export default App;
