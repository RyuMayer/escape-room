import { ReactNode } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { LoadingStatus } from '../../const';

type TLoadingProps = {
  children: ReactNode;
  loadingStatus: (typeof LoadingStatus)[keyof typeof LoadingStatus];
  isDataLoaded: boolean;
};

function Loading({ children, loadingStatus, isDataLoaded }: TLoadingProps) {
  const isLoading = loadingStatus === LoadingStatus.Loading;

  if (isLoading || !isDataLoaded) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <InfinitySpin width="200" color="#f2890f" />
      </div>
    );
  }

  return children;
}

export default Loading;
