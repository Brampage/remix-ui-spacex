import Countdown from 'react-countdown';

import styles from './mission-upcoming.feature.css';

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function MissionUpcomingFeature({ mission }) {
  const { name, date_local } = mission;
  const countdownDate = new Date(date_local);

  // Set fixed to the 30
  countdownDate.setDate(30);

  return (
    <div className="mission-upcoming">
      <div className="mission-upcoming-details">
        <h1>Upcoming launch</h1>
        <h2>{name}</h2>
        <div className="countdown-wrapper">
          <img src={mission.links?.patch?.small} width="128"></img>
          <Countdown date={countdownDate} className="countdown" />
        </div>
      </div>
    </div>
  )
}