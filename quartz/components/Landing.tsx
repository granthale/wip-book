import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import RecentNotes from "./RecentNotes"
import { SimpleSlug } from "../util/path"
import Search from "./Search"
import Graph from "./Graph"

export const TOTAL_CARDS = 6
export const CARDS = {
  purpose: (
    <a href={"Plots/purpose"} class="card card-1">
      <p class="card-title">Purpose</p>
    </a>
  ),
  reading_learning: (
    <a href={"Plots/reading-learning"} class="card card-1">
      <p class="card-title">Reading & Learning</p>
    </a>
  ),
  self_stories: (
    <a href={"Plots/self-stories"} class="card card-1">
      <p class="card-title">Self Stories</p>
    </a>
  ),
  thinking: (
    <a href={"Plots/thinking"} class="card card-1">
      <p class="card-title">Thinking</p>
    </a>
  ),
  work: (
    <a href={"Plots/work"} class="card card-1">
      <p class="card-title">Work</p>
    </a>
  ),
  writing: (
    <a href={"Plots/writing"} class="card card-1">
      <p class="card-title">Writing</p>
    </a>
  ),
}

// configs defined once
const graphConfig = {
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
}

// instantiate once outside the component
const GraphComponent = Graph(graphConfig)

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
              <div class="issue-container">{Object.values(CARDS)}</div>
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
