import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>Page not found</h1>
      <p>It's likely that this page is on the way. Check back later!</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
