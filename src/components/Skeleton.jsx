import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={350}
    viewBox="0 0 280 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-1" y="274" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="314" rx="0" ry="0" width="130" height="30" />
    <rect x="168" y="307" rx="25" ry="25" width="110" height="40" />
    <rect x="9" y="7" rx="0" ry="0" width="260" height="260" />
  </ContentLoader>
);

export default Skeleton;
