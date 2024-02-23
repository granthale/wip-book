---
author: Grant
tags:
  - seed
---
*In attempting to answer: [[How can LLMs enhance spaced repetition software?]] Many different answers arise.This note collects those possibilities:*

## From me
- [[Revise and build on existing flashcards]]
- [[Automate learning with Anki]]
- To lay down signposts while reading. This is a reminiscent of iterative reading, with consecutive passes further encoding the text
	- I find this to be particularly useful when reading about new concepts. It often takes me a few days to internalize foundations, which is greatly accelerated by Anki
	- If an LLM could do this iteratively after ingesting a piece of material (by identifying foundational concepts), this could be useful
- Ask questions to connect different concepts
	- Vector-encoding existing prompts could help an LLM understand what questions to ask to connect ideas.
- Auto-generate Q&A from Readwise quotes. See [Smoothbrain-Anki](https://github.com/smoothbrain-ai/smoothbrain-anki).
- Generate (likely imperfect) prompts to act as starting places for building out your own prompts
- If a  prompt is consistently answered incorrectly, use an LLM to add questions for context
	- From "4th president of the US?" → "Who was the president before James Madison?", "Who was the president after James Madison?"
- Output LLM-created Q&A to CSV format

---
## From the culture

**[@Anton](https://twitter.com/atroyn/status/1565641497524985857)**:
>"I tell you something I want to learn about and you generate a spaced repetition program to learn that thing which adapts to my real measured progress. a.i generated quantum country"

**[@Milan Cvitkovik](https://twitter.com/MWCvitkovic/status/1614669124424155137)**:
>- **Generate from articles or my notes** - see [example](https://www.reddit.com/r/Anki/comments/sfbvbw/gpt3_can_generate_anki_cards_oo/)
>- Change the phrasing of a card each time I see it (but with exact same information). "**Muscle confusion**" for the brain.
>	- There could be a bank of cards that apply to the same prompt, one of them is pulled each time material should be reviewed
>- **Same concept in different contexts**
>- **Rephrase the flashcard in the style of a famous person**. I want Feynman to grill me on physics in a Feynman way
>- **Enable interactive cards**, like short convos in a new language or multi-step terminal commands.
>- First, enable me to give verbal answers via transcription. Then, keep a record of my past answers, and **force me to give a new answer/phrasing to a card if my past answers are too similar**
>- **Auto-merge related cards into harder mega-cards to force chunking**. Also maybe automatically split cards into smaller concepts if I keep blowing them
>- **Inject false or impossible cards randomly** into your deck. Keep your epistemics up! If you know there's always an answer, you'll get complacent


- [ ] ==TODO put all potential solutions on a scale of less human involvement → more human involvement==
