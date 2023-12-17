import { useEffect } from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';

import { AppRoute } from '../../const';

type TCustomLocation = Omit<Location, 'state'> & {
  state: {
    prevUrl: string;
  };
};

function PrevNavigate() {
  const location = useLocation() as TCustomLocation;
  const navigate = useNavigate();

  useEffect(() => {
    navigate(location?.state?.prevUrl ? location.state.prevUrl : AppRoute.Main);
  }, [location.state, navigate]);

  return null;
}

export default PrevNavigate;
