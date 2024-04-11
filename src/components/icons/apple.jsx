import React from 'react';
import cl from 'classnames';

const Apple = ({ className }) => {
  return (
    <svg width='14' height='17' className={cl(className, 'fill-current')}>
      <path d='M10.2075 0.333252C10.2463 0.333252 10.2851 0.333252 10.3261 0.333252C10.4212 1.50862 9.97258 2.38685 9.42734 3.02284C8.89235 3.65444 8.15976 4.267 6.97488 4.17406C6.89584 3.01552 7.3452 2.20242 7.8897 1.5679C8.39469 0.976558 9.32049 0.45035 10.2075 0.333252Z' />
      <path d='M13.7948 12.5671C13.7948 12.5788 13.7948 12.589 13.7948 12.6C13.4618 13.6085 12.9868 14.4728 12.4072 15.275C11.878 16.0032 11.2296 16.9831 10.0718 16.9831C9.07133 16.9831 8.4068 16.3398 7.38146 16.3222C6.29684 16.3047 5.70038 16.8602 4.70871 17C4.59527 17 4.48183 17 4.37059 17C3.64239 16.8946 3.0547 16.3179 2.62656 15.7982C1.3641 14.2628 0.388533 12.2794 0.207031 9.74135C0.207031 9.49252 0.207031 9.24442 0.207031 8.99559C0.283877 7.17911 1.1665 5.70221 2.33967 4.98645C2.95883 4.60589 3.80998 4.28167 4.75774 4.42658C5.16392 4.48952 5.57889 4.62857 5.94262 4.76616C6.28733 4.89863 6.7184 5.13356 7.12677 5.12112C7.40342 5.11307 7.6786 4.96889 7.95744 4.86716C8.77419 4.57222 9.57485 4.2341 10.6302 4.39291C11.8985 4.58466 12.7987 5.1482 13.3549 6.01765C12.282 6.70047 11.4338 7.72947 11.5787 9.48667C11.7075 11.0829 12.6355 12.0167 13.7948 12.5671Z' />
    </svg>
  );
};

export { Apple };
