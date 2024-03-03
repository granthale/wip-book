import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>Coming soon...</h1>
      <p>Stay tuned!</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
