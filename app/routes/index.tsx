import {useLoaderData, Link} from 'remix';

import MissionUpcomingFeature, {
  links as MissionUpcomingFeatureStyles,
} from '../features/missions/mission-upcoming.feature';
import RocketShip from '../assets/rocket-ship.svg';

export const links = () => [...MissionUpcomingFeatureStyles()];

export async function loader() {
  const res = await fetch('https://api.spacexdata.com/v4/launches/latest');
  return res.json();
}

export default function Index() {
  const loaderData = useLoaderData();

  console.log('home: loader data', loaderData);

  return (
    <div>
      <div className="flex">
        <img src={RocketShip} alt="" width="512" className="rocketship" />
        <div>
          <MissionUpcomingFeature mission={loaderData} />
          <Link to="/missions" prefetch="render" className="button">
            View all missions
          </Link>
        </div>
      </div>
    </div>
  );
}
