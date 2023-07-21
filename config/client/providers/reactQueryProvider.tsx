"use client";

import React, { ReactNode, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

  const queryClientOptions ={
    
  }

export default function ReactQueryProvider({children}: {children: ReactNode}) {
  const [ queryClient ] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }));


  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
