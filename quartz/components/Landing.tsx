import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import RecentNotes from "./RecentNotes"
import { SimpleSlug } from "../util/path"
import Search from "./Search"

export const TOTAL_CARDS = 8
export const CARDS = {
  agency_identity: (
    <a href={"Plots/agency-identity"} class="card card-1">
      <p class="card-title">Chapter 1</p>
      <p className="card-subhead">Agency & Identity</p>
    </a>
  ),
  creativity_self_expression: (
    <a href={"Plots/creativity-self-expression"} class="card card-2">
      <p class="card-title">Chapter 2</p>
      <p className="card-subhead">Creativity & Self-expression</p>
    </a>
  ),
  wellbeing_selfcare_mindfulness: (
    <a href={"Plots/wellbeing-selfcare-mindfulness"} class="card card-3">
      <p class="card-title">Chapter 3</p>
      <p className="card-subhead">Wellbeing, self-care, & mindfulness</p>
    </a>
  ),
  writing: (
    <a href={"Plots/thinking-writing"} class="card card-5">
      <p className="card-title">Chapter 4</p>
      <p className="card-subhead">Thinking & Writing</p>
    </a>
  ),
  thinking_learning: (
    <a href={"Plots/reading-learning"} class="card card-4">
      <p class="card-title">Chapter 5</p>
      <p className="card-subhead">Reading & Learning</p>
    </a>
  ),
  conversation_relationship_community: (
    <a href={"Plots/conversation-relationships-community"} class="card card-6">
      <p className="card-title">Chapter 6</p>
      <p className="card-subhead">Conversation, Relationship, & Community</p>
    </a>
  ),
  technology_humanity: (
    <a href={"Plots/technology-humanity"} class="card card-7">
      <p className="card-title">Chapter 7</p>
      <p className="card-subhead">Technology & Humanity</p>
    </a>
  ),
  purpose_meaning: (
    <a href={"Plots/purpose-meaning"} class="card card-8">
      <p className="card-title">Chapter 8</p>
      <p className="card-subhead">Purpose & Meaning</p>
    </a>
  ),
}

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
            <div class="landing-header">Hello, welcome to a book in progress...</div>
            <p class="page-subhead"></p>
            <div class="flexer">
              <div>
                <div class="intro-box">
                  <div class="intro-text">
                    <span class="styled-quote">
                      “The skill of writing is to create a context in which other people can think”
                      <span class="quote-author">—Edwin Schlossberg</span>
                    </span>
                    <p>
                      <strong>
                        We believe that the web’s words are thought-provoking, but its context is
                        not.
                      </strong>{" "}
                      We’ve all bookmarked articles and saved links, only to lose them in the
                      endless deluge of the internet.
                    </p>

                    <p>
                      <strong>That’s why we’re making a book—</strong>a real-world, tangible,
                      annotatable, throwable, sharable book. This website offers a window into our
                      work in progress.
                    </p>

                    <p>
                      <strong>What’s the book about?</strong> We’re curating the internet’s answer
                      on how to live the good life. “Curating” because rather than weaving a
                      tapestry from scratch, this book builds on the thoughts of others. Think of it
                      as an anthology—or better yet, a quilt. Short and medium-form essays from
                      various authors will serve as patches, with gentle transitions stitching the
                      pieces together.
                    </p>

                    <p>
                      <strong>What does this mean for the authors we feature?</strong> Copyright
                      protects internet writing, which means the quality of this book depends on our
                      ability to obtain authors’ permissions to print their work. To accomplish
                      this, we’re using this website to demonstrate our intentions and commitment to
                      thoughtful collaboration.
                    </p>

                    <p>
                      <strong>Thanks for checking in!</strong> We hope this site is a cozy place to
                      follow along as we work. Here is the{" "}
                      <a href="https://g-ha.notion.site/a461c8f959d149fb8d696dbcc87e253b?v=b71608fc002f4c7da130cc1c8bb996f6&pvs=4">
                        master list of pieces
                      </a>{" "}
                      we’re considerings. More generally, feel free to explore, break things, and{" "}
                      <a href="mailto:granthale10@gmail.com,youfoundneel@gmail.com">let us know</a>{" "}
                      if there are any writings you’d love to see in print!
                    </p>
                  </div>
                </div>
              </div>
              <br />
              {/* <div class="recent-notes"> */}
              {/* <br /> */}
              {/* <RecentPiecesComponent {...componentData} />
                <RecentNotesComponent {...componentData} /> */}
              {/* </div> */}
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
          </div>
        </div>
      </>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor
