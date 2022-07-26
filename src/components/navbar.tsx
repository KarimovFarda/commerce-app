import { useState, useEffect } from 'react'
export const Navbar = (props: any) => {
  const [favourites, setFavourites] = useState<any>()
  useEffect(() => {
    fetch("http://localhost:8502/favourites").then(response => response.json()).then(data => setFavourites(data))
  }, [favourites])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">MakeUp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: "space-between", flexDirection: "row-reverse", margin: "0 25px" }}>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/shopping" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3458 23H7.62886C5.9611 23 4.71029 22.5671 3.93459 21.7106C3.15889 20.8541 2.85829 19.6118 3.06191 18.0024L3.93459 10.9435C4.18669 8.86353 4.72968 7 8.51122 7H15.4925C19.2644 7 19.8074 8.86353 20.0692 10.9435L20.9418 18.0024C21.1357 19.6118 20.8449 20.8635 20.0692 21.7106C19.2644 22.5671 18.0233 23 16.3458 23ZM8.50152 8.41176C5.70899 8.41176 5.57325 9.48469 5.36963 11.1035L4.49697 18.1623C4.35153 19.3576 4.52605 20.2329 5.02056 20.7694C5.51507 21.3059 6.38774 21.5788 7.62886 21.5788H16.3458C17.5869 21.5788 18.4596 21.3059 18.9541 20.7694C19.4486 20.2329 19.6231 19.3576 19.4777 18.1623L18.605 11.1035C18.4014 9.47528 18.2754 8.41176 15.4731 8.41176H8.50152Z" fill="#292D32" />
                  <path d="M16.2105 10C15.7789 10 15.4211 9.63733 15.4211 9.2V5.46667C15.4211 4.31467 14.7158 3.6 13.5789 3.6H10.4211C9.28421 3.6 8.57895 4.31467 8.57895 5.46667V9.2C8.57895 9.63733 8.22105 10 7.78947 10C7.35789 10 7 9.63733 7 9.2V5.46667C7 3.42933 8.41053 2 10.4211 2H13.5789C15.5895 2 17 3.42933 17 5.46667V9.2C17 9.63733 16.6421 10 16.2105 10Z" fill="#292D32" />
                  <path d="M20.16 18.5H7.75C7.34 18.5 7 18.16 7 17.75C7 17.34 7.34 17 7.75 17H20.16C20.57 17 20.91 17.34 20.91 17.75C20.91 18.16 20.57 18.5 20.16 18.5Z" fill="#292D32" />
                </svg>

                <span>Səbətim</span>

              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-favourites" aria-current="page" href="/favourites" style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19.6496C10.69 19.6496 10.39 19.6096 10.14 19.5196C6.32 18.2096 0.25 13.5596 0.25 6.68961C0.25 3.18961 3.08 0.349609 6.56 0.349609C8.25 0.349609 9.83 1.00961 11 2.18961C12.17 1.00961 13.75 0.349609 15.44 0.349609C18.92 0.349609 21.75 3.19961 21.75 6.68961C21.75 13.5696 15.68 18.2096 11.86 19.5196C11.61 19.6096 11.31 19.6496 11 19.6496ZM6.56 1.84961C3.91 1.84961 1.75 4.01961 1.75 6.68961C1.75 13.5196 8.32 17.3196 10.63 18.1096C10.81 18.1696 11.2 18.1696 11.38 18.1096C13.68 17.3196 20.26 13.5296 20.26 6.68961C20.26 4.01961 18.1 1.84961 15.45 1.84961C13.93 1.84961 12.52 2.55961 11.61 3.78961C11.33 4.16961 10.69 4.16961 10.41 3.78961C9.48 2.54961 8.08 1.84961 6.56 1.84961Z" fill="#292D32" />
              </svg>

                <span>Favourites</span> <span style={{ color: "white", borderRadius: "50%", fontSize: "0.9rem", padding: "1px 7px", backgroundColor: "#f55a5a", width:"21px", display:"flex", justifyContent:"center" }}>{favourites && favourites.length}</span></a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/login" onClick={() => localStorage.removeItem("token")} data-tabindex="-1" aria-disabled="true">Log Out</a>
            </li>
          </ul>
          <form className="d-flex navbar-search-element">
            <input className="form-control me-2" value={props.value} onChange={evt => props.SearchElement(evt.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8854 3.36667C12.3295 3.36535 13.7415 3.79236 14.9429 4.5937C16.1443 5.39503 17.0809 6.53467 17.6345 7.86845C18.188 9.20224 18.3335 10.6702 18.0526 12.0867C17.7717 13.5032 17.077 14.8046 16.0563 15.8262C15.0357 16.8478 13.7349 17.5437 12.3187 17.8259C10.9025 18.1081 9.43433 17.9639 8.10004 17.4116C6.76575 16.8593 5.62525 15.9236 4.82282 14.723C4.02039 13.5224 3.59209 12.1108 3.59209 10.6667C3.60084 8.73444 4.37184 6.88374 5.73753 5.51681C7.10321 4.14988 8.9532 3.37719 10.8854 3.36667ZM10.8854 2C9.17132 2 7.4957 2.50829 6.07048 3.4606C4.64525 4.4129 3.53442 5.76645 2.87846 7.35008C2.22251 8.9337 2.05088 10.6763 2.38528 12.3574C2.71969 14.0386 3.54511 15.5829 4.75716 16.7949C5.96922 18.007 7.51347 18.8324 9.19464 19.1668C10.8758 19.5012 12.6184 19.3296 14.202 18.6736C15.7856 18.0177 17.1392 16.9068 18.0915 15.4816C19.0438 14.0564 19.5521 12.3808 19.5521 10.6667C19.5521 8.36812 18.639 6.16372 17.0137 4.53841C15.3884 2.91309 13.184 2 10.8854 2Z" fill="white" />
                <path d="M23.3327 22.1937L18.4193 17.2471L17.4727 18.1871L22.386 23.1337C22.4477 23.1959 22.5211 23.2453 22.6019 23.2791C22.6827 23.3129 22.7694 23.3305 22.857 23.3308C22.9446 23.3311 23.0314 23.3141 23.1124 23.2809C23.1935 23.2477 23.2672 23.1988 23.3293 23.1371C23.3915 23.0754 23.4409 23.002 23.4747 22.9212C23.5085 22.8404 23.5261 22.7537 23.5264 22.6661C23.5267 22.5785 23.5097 22.4917 23.4765 22.4107C23.4433 22.3296 23.3944 22.2559 23.3327 22.1937Z" fill="white" />
              </svg>

            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
