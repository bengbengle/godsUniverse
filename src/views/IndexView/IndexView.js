import React from 'react';
import { Section } from 'components/organisms';
import { GetStarted, Services, Hero } from './components';

const IndexView = ({ themeMode }) => {

  return (
    <div>
      <Hero themeMode={themeMode} />
      <Services />
      <Section narrow>
        <GetStarted />
      </Section>
    </div>
  );
};

export default IndexView;
