import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {Theme} from '@twilio-paste/core/theme';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {
  return (
   <Provider store={store}>
    <ChakraProvider>
    <Theme.Provider theme="default">
     <Suspense fallback={<div>Loading...</div>}>
      <Outlet/>
    </Suspense>
   </Theme.Provider>
      </ChakraProvider>
   </Provider>
    
  );
}

export default App;
