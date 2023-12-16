import { ReactNode } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { LoadingStatus } from '../../const';

type TLoadingProps = {
  children: ReactNode;
  loadingStatus: (typeof LoadingStatus)[keyof typeof LoadingStatus];
};

function Loading({ children, loadingStatus }: TLoadingProps) {
  const isLoading = loadingStatus === LoadingStatus.Loading;

  if (isLoading) {
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
