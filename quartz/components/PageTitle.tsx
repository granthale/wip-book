import { pathToRoot } from "../util/path"
import { CARDS } from "./Landing"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  // const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  // const card = CARDS[fileData.slug as keyof typeof CARDS]
  return (
    <>
      <a class={`page-title logo ${displayClass ?? ""}`} href={baseDir}>
        <img class="logo" height="180px" src="/static/seed.png" alt="seed" />
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

/* Add this to your CSS file or within a <style> tag in your HTML */

/* Default styles for larger screens */
.logo {
  margin-left: 0;
  margin-top: 0;
  height: 180px; /* Default height */
}

/* Media query for mobile devices */
@media (max-width: 1510px) { /* Adjust 600px as needed for your mobile breakpoint */
  .logo {
    height: 125px; /* Height for mobile devices */
  }
}

`

export default (() => PageTitle) satisfies QuartzComponentConstructor
