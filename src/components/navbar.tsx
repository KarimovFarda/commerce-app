import { useState, useEffect } from 'react'
export const Navbar = (props: any) => {
  const [favourites, setFavourites] = useState<any>()
  useEffect(() => {
    fetch("http://localhost:8502/favourites").then(response => response.json()).then(data => setFavourites(data))
  }, [favourites])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#test">MakeUp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/products">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/favourites">Favourites <span style={{ color: "white", borderRadius: "50%", fontSize: "0.9rem", padding: "1px 7px", backgroundColor: "#f55a5a" }}>{favourites && favourites.length}</span></a>
            </li>
     
            <li className="nav-item">
              <a className="nav-link" href="/login" onClick={() => localStorage.removeItem("token")} data-tabindex="-1" aria-disabled="true">Log Out</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" value={props.value} onChange={evt => props.SearchElement(evt.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Navbar