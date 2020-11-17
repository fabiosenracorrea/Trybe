import { NewsProvider } from './news';

function AppProvider({ children }) {
  return (
    <NewsProvider>
      {children}
    </NewsProvider>
  );
}

export default AppProvider;
