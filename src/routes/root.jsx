import { Link, Outlet } from "react-router-dom";


export default function Root() {
    return (
      <>
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/tempcon`}>House 1</Link>
              </li>
              <li>
                <Link to={`/tempcon2`}>House 2</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
          <hr/>
          <h1>Skyhawk Ranch LLC</h1>
          <hr/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyQ210vv9y6FxdtT_2sITjx-WpgrYrC_YpQ&usqp=CAU" alt="Skyhawk Plane Image" />
        </div>

      </>
    );
  }