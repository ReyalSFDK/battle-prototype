import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Home } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Home />
    </ChakraProvider>
  </React.StrictMode>
);
