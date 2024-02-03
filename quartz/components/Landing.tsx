import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"
import Search from "./Search"

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
        <p class="card-title">Internet & Computer History</p>
      </div>
    </a>
  ),
  global_economy: (
    <a href={"/economics"}>
      <div class="card card-3">
        <p class="card-title">Economics</p>
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
      <div class="landing">
        <div class="content-container">
          <div class="landing-header">Hello, welcome to our garden.</div>
          <p class="page-subhead">
            Check the <a href="/about">about section</a> to learn more.
          </p>
          <p>
            We believe that the chronological blog is an artifact of the past. Instead we believe in
            work in progress and keeping the garage door open. We don't wait until an answer is
            fully grown. We write above, below, and around powerful questions.
          </p>
          <p>
            We write by gardening. In each topic's case, a seed is planted. From that moment on, the
            questions generated become the sustaining nutrients. [include something about how this
            gives people context on what we're thinking]
          </p>
          <p>
            These seeds will grow into saplings, and with enough patience into full-fledged trees
            which will take the form of different answers and perspectives.
          </p>
          <p>
            In short, this website does two things.
            <ol>
              <li>It provides a platform for displayed and deconstructed curiosities.</li>
              <li>
                It gives room for intellectuals and entrepreneurs to build and grow on knowledge in
                the style of a digital garden, and through this, come to think about anything and
                everything in a more sophisticated way.
              </li>
            </ol>
          </p>
          <hr class="solid"></hr>
          <br />
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
