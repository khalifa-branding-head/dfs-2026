import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import './styles/index.css';

// Import all page components statically to eliminate code-splitting chunk load issues
// and ensure compatibility with relative base path configuration ('./')
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Agenda from './pages/Agenda';
import Sponsors from './pages/Sponsors';
import Exhibitors from './pages/Exhibitors';
import Registration from './pages/Registration';
import Blog from './pages/Blog';
import Media from './pages/Media';
import FAQs from './pages/FAQs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

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
        <PageComponent />
      </Layout>
    </React.StrictMode>
  );
}
