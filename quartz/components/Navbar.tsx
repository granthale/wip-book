import { QuartzComponentConstructor } from "./types"
import navstyle from "./styles/navbar.scss"

export default (() => {
  function NavbarComponent() {
    return (
      <body>
        <nav class="navbar">
          <ul class="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </body>
    )
  }

  NavbarComponent.css = navstyle
  return NavbarComponent
}) satisfies QuartzComponentConstructor
