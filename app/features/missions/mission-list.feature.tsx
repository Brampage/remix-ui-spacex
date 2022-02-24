import Mission from './components/Mission';
import styles from './mission-list.feature.css';

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function  MissionListFeature({missions}: {missions: any}) {
  // search bar
  //  mission list
  return (
    <div>
      <h2>Missions</h2>
      {!missions.length && (<p>No results found</p>)}
      {missions && missions.map((mission) => <Mission key={mission.id} mission={mission} />)}
    </div>
  );
}