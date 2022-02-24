import {Link} from "remix";

export default function NavigationFeature() {
  return(
    <nav>
      <Link to="/" className="logo" prefetch="render">Home</Link>
      <Link to="/missions" prefetch="render">Missions</Link>
    </nav>
  )
}