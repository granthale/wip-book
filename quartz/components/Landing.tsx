import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import RecentNotes from "./RecentNotes"
import { SimpleSlug } from "../util/path"

export const TOTAL_CARDS = 4
export const CARDS = {
  tools_for_thought: (
    <a href={"Acres/tools-for-thought"}>
      <div class="card card-1">
        <p class="card-title">Tools for Thought</p>
      </div>
    </a>
  ),
  tech_history: (
    <a href={"Acres/tech-history"}>
      <div class="card card-2">
        <p class="card-title">Internet & Computer History</p>
      </div>
    </a>
  ),
  global_economy: (
    <a href={"Acres/economics"}>
      <div class="card card-3">
        <p class="card-title">Economics</p>
      </div>
    </a>
  ),
  energy: (
    <a href={"Acres/energy"}>
      <div class="card card-4">
        <p class="card-title">Energy</p>
      </div>
    </a>
  ),
}

const RecentWritingComponent = RecentNotes({
  title: "Recent Writing",
  limit: 4,
  filter: (f) =>
    f.slug!.startsWith("Writing/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
  linkToMore: "Writing/" as SimpleSlug,
})
const RecentNotesComponent = RecentNotes({
  title: "Recent Notes",
  limit: 2,
  filter: (f) => f.slug!.startsWith("Notes/") && !f.frontmatter?.noindex,
  linkToMore: "Notes/" as SimpleSlug,
})

export default (() => {
  function LandingComponent(componentData: QuartzComponentProps) {
    return (
      <div class="landing">
        <div class="content-container">
          {/* <div class="landing-header">Hello, welcome to our garden.</div>
          <p class="page-subhead">
            Check the <a href="/about">about section</a> to learn more.
          </p> */}
          <div class="flexer">
            <div class="recent-notes">
              <RecentWritingComponent {...componentData} />
              <RecentNotesComponent {...componentData} />
            </div>
            <div class="about">
              {/* <hr class="solid"></hr> */}
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
        </div>
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor
