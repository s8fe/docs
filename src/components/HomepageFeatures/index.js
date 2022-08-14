import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Community driven Smart Contracts',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Readymade SmartContracts free for developers
      </>
    ),
    page: 'category/smart-contracts',
  },
  {
    title: 'Easy to start with',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SDK'S readymade available in frontend languages like Typescript, Javascript, C# and for Frameworks like React, Unreal, and Unity
      </>
    ),
  },
  {
    title: 'Full Interopability between dApps',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        All dApps use the same data structure, and therefore are fully compatible and share their liquidity with each other. 
      </>
    ),
  },
];

function Feature({Svg, title, description, page}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={'docs/'+ page}>{title}</a></h3>
        <p><a href={'docs/'+ page}>{description}</a></p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
