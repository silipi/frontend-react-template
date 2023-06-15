import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={theme}
        toastOptions={{
          defaultOptions: { position: "top-right", isClosable: true },
        }}
      >
        <Router />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
