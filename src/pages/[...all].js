import dynamic from 'next/dynamic';
import React from 'react';
const App = dynamic(() => import('../features/application/AppShell'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
