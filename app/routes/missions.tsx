import {Form, Outlet, useLoaderData, useOutletContext, useParams} from 'remix';
import { Launch } from '~/types';

import MissionListFeature, { links as MissionListFeatureStyles } from '../features/missions/mission-list.feature';

export const links = () => [
  ...MissionListFeatureStyles()
];


export async function loader({ request }) {
  let url = new URL(request.url);
  let searchParam = url.searchParams.getAll('search');
  
  let res = await fetch('https://api.spacexdata.com/v4/launches');
  res = await res.json();
  if (searchParam) {
    return res.filter((element) => element.name.includes(searchParam))
  }

  return res;
}

export function useLaunches() {
  return useOutletContext<Launch>();
}

export default function Index() {
  const loaderData = useLoaderData() || [];
  const { slug } = useParams();

  console.log('missions: ', loaderData);

  return (
    <div>
      <h1>Missions</h1>

      <Form method="get" action="/missions">
        <label>
          Launch title: <input type="text" name="search" className='search' />
        </label>
        <button type="submit">Filter</button>
      </Form>

      <div className="page">
        <div className="page__list">
          <MissionListFeature missions={loaderData} />
        </div>
        <div className="page__detail">
          {slug ? (<Outlet context={loaderData.find((element) => element?.name === slug)} />) : (<div>
            <p>No mission selected</p>
          <img src="/assets/elon.jpg" alt="" />

          </div>)}
        </div>
      </div>
      

    </div>
  )
}