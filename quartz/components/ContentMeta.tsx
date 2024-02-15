import { formatDate, getDate, getCreatedDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"

export default (() => {
  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    if (text) {
      const segments: string[] = []
      // const { text: timeTaken, words: _words } = readingTime(text)

      if (fileData.dates) {
        const planted = formatDate(getCreatedDate(fileData)!)
        const last_watered = formatDate(getDate(cfg, fileData)!) // Default is "modified"

        segments.push(`Planted ${planted}`)
        if (planted !== last_watered) {
          segments.push(`Last Watered ${last_watered}`)
        }
      }
      return <p class={`content-meta ${displayClass ?? ""}`}>{segments.join(", ")}</p>
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
