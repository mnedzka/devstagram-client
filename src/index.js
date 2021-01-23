import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CommentContext, CommentContextProvider } from './Components/Context/CommentContext';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CommentContextProvider >
        <App />
      </CommentContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


