import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build the right product!',
    Svg: require('@site/static/img/check-mark-svgrepo-com.svg').default,
    description: (
      <>
        Build products by working backwards with a focus on solving the customer problem. 
      </>
    ),
  },
  {
    title: 'Build it right!',
    Svg: require('@site/static/img/check-mark-svgrepo-com.svg').default,
    description: (
      <>
        Build the product right using cloud software engineering best practices to allow for rapid innovation
        with high quality and confidence to deploy to production quickly and often.
      </>
    ),
  },
  {
    title: 'With Cloud Native Expertise',
    Svg: require('@site/static/img/check-mark-svgrepo-com.svg').default,
    description: (
      <>
        Experienced with AWS, Kubernetes, Spring Boot, Java, TypeScript, React, GitHub, CICD, Kafka.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
