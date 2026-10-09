import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Loading } from './components/common/Loading/Loading';
import { routes } from './app/routes';
import { useScrollToTop } from './hooks/useScrollToTop';

export default function App() {
  useScrollToTop();
  const element = useRoutes(routes);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Suspense fallback={<Loading />}>{element}</Suspense>
      </main>
      <Footer />
    </>
  );
}
