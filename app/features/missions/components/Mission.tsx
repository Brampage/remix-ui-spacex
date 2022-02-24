import {Link} from 'remix';

export default function Mission({mission}) {
  return (
    <div className="mission">
      <div className="mission__patch">
        <img src={mission.links?.patch?.small}></img>
      </div>
      <div className="mission__info">
        <h1>{mission?.name}</h1>
        {new Date(mission.date_utc).toLocaleString()}
        <div className="mission__button">
          <Link to={`/missions/${mission?.name}`} className="button">Go to Details</Link>
        </div>
      </div>
    </div>
  );
}
