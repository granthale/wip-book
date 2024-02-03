import { QuartzComponentConstructor } from "./types"
import navstyle from "./styles/nav.scss"
import Search from "./Search"

export default (() => {
  function NavComponent() {
    const SearchComponent = Search()

    return (
      <body>
        <nav class="navbar">
          <a href="/">
            <img
              style={{ marginLeft: "20px", marginTop: "20px" }}
              class="logo"
              height="100px"
              src="/static/seed.png"
              alt="seed"
            />
          </a>
        </nav>
      </body>
    )
  }

  NavComponent.css = navstyle
  return NavComponent
}) satisfies QuartzComponentConstructor
