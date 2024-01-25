import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"
import Search from "./Search"

export const TOTAL_CARDS = 12
export const CARDS = {
  basics: (
    <a href={"/tools-for-thought"}>
      <div class="card card-1">
        <p class="card-title">Tools for Thought</p>
      </div>
    </a>
  ),
  "getting-started": (
    <a href={"/internet-n-tech-history"}>
      <div class="card card-2">
        <p class="card-title">Internet & Technology History</p>
      </div>
    </a>
  ),
  "growing-people": (
    <a href={"/global-economy"}>
      <div class="card card-3">
        <p class="card-title">Global Economy</p>
      </div>
    </a>
  ),
}

export default (() => {

  function LandingComponent() {
    return (
      <div>
        <div class="content-container">
        <div class="landing-header">Hello, welcome to our garden.</div>
        <br />
        {/* TODO, add search and navbar */}
          <div class="issue-container">
            {Object.values(CARDS)}
            {Array(TOTAL_CARDS - Object.keys(CARDS).length)
              .fill(0)
              .map(() => (
                <div class="card card-coming">
                  <p class="card-title">Coming Soon</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor
