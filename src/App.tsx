import "./App.css";
import { border } from "./common/utils";
import { useComposeField } from "./common/hooks/use-compose-field";
import { useAuthOptions } from "../src/common/hooks/use-auth-options";
import { Toaster } from "react-hot-toast";
import { ConnectWalletButton } from "./components/connect-wallet-button";

import React, { memo } from "react";
import {
  color,
  ColorModeProvider,
  Flex,
  Spinner,
  ThemeProvider,
} from "@stacks/ui";
import { Connect } from "@stacks/connect-react";

const AppWrapper: React.FC = memo(({ children }) => {
  const authOptions = useAuthOptions();
  return (
    <ThemeProvider>
      <ColorModeProvider defaultMode="light">
        <Toaster position="bottom-right" />
        <Connect authOptions={authOptions}>{children}</Connect>
      </ColorModeProvider>
    </ThemeProvider>
  );
});

function App() {
  const { onSubmit, isSignedIn, isLoading } = useComposeField();
  return (
    <AppWrapper>
      <ConnectWalletButton />
    </AppWrapper>
  );
}

export default App;
