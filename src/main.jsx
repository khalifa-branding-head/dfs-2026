import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import './styles/index.css';

// Lazy load all page components for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Speakers = React.lazy(() => import('./pages/Speakers'));
const Agenda = React.lazy(() => import('./pages/Agenda'));
const Sponsors = React.lazy(() => import('./pages/Sponsors'));
const Exhibitors = React.lazy(() => import('./pages/Exhibitors'));
const Registration = React.lazy(() => import('./pages/Registration'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Media = React.lazy(() => import('./pages/Media'));
const FAQs = React.lazy(() => import('./pages/FAQs'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

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
