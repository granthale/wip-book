import { pathToRoot } from "../util/path"
import { CARDS } from "./Landing"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  const card = CARDS[fileData.slug as keyof typeof CARDS]
  return (
    <>
      <a href={baseDir}>
        <img
          style={{ marginLeft: "20px" }}
          class="logo"
          height="180px"
          src="/static/seed.png"
          alt="seed"
        />
      </a>
    </>
    // <h1 class={`page-title ${displayClass ?? ""}`}>
    //   <a href={baseDir}>{title}</a>
    //   <div class="header-card desktop-only">{card}</div>
    // </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
