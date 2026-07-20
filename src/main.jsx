import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import './styles/index.css';

// Helper to safely load chunks, catching ChunkLoadErrors and forcing a page reload to get fresh assets
const safeLazy = (importFn) => {
  return React.lazy(() =>
    importFn().catch((err) => {
      console.error("Chunk load failed, forcing reload to fetch latest assets:", err);
      window.location.reload();
    })
  );
};

// Lazy load all page components for code splitting
const Home = safeLazy(() => import('./pages/Home'));
const About = safeLazy(() => import('./pages/About'));
const Speakers = safeLazy(() => import('./pages/Speakers'));
const Agenda = safeLazy(() => import('./pages/Agenda'));
const Sponsors = safeLazy(() => import('./pages/Sponsors'));
const Exhibitors = safeLazy(() => import('./pages/Exhibitors'));
const Registration = safeLazy(() => import('./pages/Registration'));
const Blog = safeLazy(() => import('./pages/Blog'));
const Media = safeLazy(() => import('./pages/Media'));
const FAQs = safeLazy(() => import('./pages/FAQs'));
const Privacy = safeLazy(() => import('./pages/Privacy'));
const Terms = safeLazy(() => import('./pages/Terms'));

const pages = {
  home: Home,
  about: About,
  speakers: Speakers,
  agenda: Agenda,
  sponsors: Sponsors,
  exhibitors: Exhibitors,
  registration: Registration,
  blog: Blog,
  media: Media,
  faqs: FAQs,
  privacy: Privacy,
  terms: Terms,
};

const rootEl = document.getElementById('root');
if (rootEl) {
  const pageKey = rootEl.getAttribute('data-page') || 'home';
  const PageComponent = pages[pageKey] || Home;

  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <Layout page={pageKey}>
        <Suspense fallback={
          <div className="h-screen w-screen bg-[#031116] flex flex-col items-center justify-center gap-4 text-white">
            <div className="w-12 h-12 border-4 border-brand-teal border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-semibold tracking-widest text-brand-teal/80 uppercase">Loading Dubai FinTech Summit...</p>
          </div>
        }>
          <PageComponent />
        </Suspense>
      </Layout>
    </React.StrictMode>
  );
}
