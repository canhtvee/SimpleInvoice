import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {AppContent} from './containers';

const queryClient = new QueryClient();

/**
 * Usually, App Component is dedicated for general configs such as QueryClient, CodePush
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
