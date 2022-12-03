import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="main">
      <Header />
      <Footer />
    </section>
    <PageFooter />
  </Layout>
);

export default IndexPage;

export const Head = () => (
  <>
    <title>{config.siteTitle}</title>
    <meta name="description" content="Personal website"></meta>
    <meta name="keywords" content="site,web"></meta>
    <html lang="en" />
  </>
);
