import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import RecentNotes from "./RecentNotes"
import { SimpleSlug } from "../util/path"
import Search from "./Search"
import Graph from "./Graph"

export const TOTAL_CARDS = 11
export const CARDS = {
  agency: (
    <a href={"Plots/agency"} class="card card-1">
      <p class="card-title">Agency</p>
    </a>
  ),
  creativity_self_expression: (
    <a href={"Plots/creativity-self-expression"} class="card card-1">
      <p class="card-title">Creativity & Self-Expression</p>
    </a>
  ),
  identity: (
    <a href={"Plots/identity"} class="card card-1">
      <p class="card-title">Identity</p>
    </a>
  ),
  purpose_meaning: (
    <a href={"Plots/purpose-meaning"} class="card card-1">
      <p class="card-title">Purpose & Meaning</p>
    </a>
  ),
  reading_learning: (
    <a href={"Plots/reading-learning"} class="card card-1">
      <p class="card-title">Reading & Learning</p>
    </a>
  ),
  relationships_community: (
    <a href={"Plots/relationships-community"} class="card card-1">
      <p class="card-title">Relationships & Community</p>
    </a>
  ),
  technology: (
    <a href={"Plots/technology"} class="card card-1">
      <p class="card-title">Technology</p>
    </a>
  ),
  thinking: (
    <a href={"Plots/thinking"} class="card card-1">
      <p class="card-title">Thinking</p>
    </a>
  ),
  wellbeing_selfcare: (
    <a href={"Plots/wellbeing-selfcare-mindfulness"} class="card card-1">
      <p class="card-title">Wellbeing, Self-Care & Mindfulness</p>
    </a>
  ),
  work_career: (
    <a href={"Plots/work & career"} class="card card-1">
      <p class="card-title">Work & Career</p>
    </a>
  ),
  writing: (
    <a href={"Plots/writing"} class="card card-1">
      <p class="card-title">Writing</p>
    </a>
  ),
}

const GraphComponent = Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 1.1,
    repelForce: 0.1,
    centerForce: 0.5,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: ["index", "tag", "folder"],
    showTags: false,
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: ["index", "tag", "folder"],
    showTags: false,
  },
})

const RecentPiecesComponent = RecentNotes({
  title: "Recent Pieces",
  limit: 4,
  filter: (f) =>
    f.slug!.startsWith("Pieces/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
  linkToMore: "Pieces/" as SimpleSlug,
})
const RecentNotesComponent = RecentNotes({
  title: "Recent Notes",
  limit: 2,
  filter: (f) => f.slug!.startsWith("Notes/") && !f.frontmatter?.noindex,
  linkToMore: "Notes/" as SimpleSlug,
})

export default (() => {
  function LandingComponent(componentData: QuartzComponentProps) {
    const SearchComponent = Search()
    // const DarkmodeComponent = Darkmode()
    return (
      <>
        <div class="landing">
          <div class="content-container">
            <div class="navbar" style="margin-top:0">
              <a href="/" class="page-title">
                <img
                  height="240px"
                  src="static/tree-arch.png"
                  alt="seed"
                  style="margin-bottom: -55px;"
                />
              </a>
              <SearchComponent {...componentData} />
            </div>
            <div class="landing-header">Hello, welcome to a garden.</div>
            <p class="page-subhead">
              Explore this web of living ideas. Check out the <a href="/about">about section</a> to
              learn more.
            </p>
            <div class="flexer">
              <div class="recent-notes">
                <br />
                <div class="graph-container">
                  <GraphComponent {...componentData} />
                </div>
                <RecentPiecesComponent {...componentData} />
                <RecentNotesComponent {...componentData} />
              </div>
              <div class="issue-container">
                {Object.values(CARDS)}
                {/* {Array(TOTAL_CARDS - Object.keys(CARDS).length)
                .fill(0)
                .map(() => (
                  <div class="card card-coming">
                    <p class="card-title">Coming Soon</p>
                  </div>
                ))} */}
              </div>
            </div>
            <footer class="landing-footer">
              <div class="footer-links">
                <a href="https://twitter.com/grant__hale" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a
                  href="https://www.are.na/grant-hale/channels"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Are.na
                </a>
                <a href="mailto:granthale10@gmail.com">Email</a>
              </div>
            </footer>
          </div>
        </div>
      </>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor
