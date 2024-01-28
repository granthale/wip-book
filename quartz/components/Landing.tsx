import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"

export const TOTAL_CARDS = 4
export const CARDS = {
  tools_for_thought: (
    <a href={"/tools-for-thought"}>
      <div class="card card-1">
        <p class="card-title">Tools for Thought</p>
      </div>
    </a>
  ),
  tech_history: (
    <a href={"/tech-history"}>
      <div class="card card-2">
        <p class="card-title">Internet & Tech History</p>
      </div>
    </a>
  ),
  global_economy: (
    <a href={"/global-economy"}>
      <div class="card card-3">
        <p class="card-title">Global Economy</p>
      </div>
    </a>
  ),
  energy: (
    <a href={"/energy"}>
      <div class="card card-4">
        <p class="card-title">Energy</p>
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
          <p class="page-subhead">
            Check the <a href="/about">about section</a> to learn more.
          </p>
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
