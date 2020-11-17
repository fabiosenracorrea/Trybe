import NewsFeed from './pages/NewsFedd';
import AppProvider from './hooks';

import './App.css';

function App() {
  return (
    <AppProvider>
      <NewsFeed />
    </AppProvider>
  );
}

export default App;
