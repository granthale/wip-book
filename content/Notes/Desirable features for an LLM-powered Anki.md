---
author: Grant
tags:
  - seed
---
*In attempting to answer: [[§ How can LLMs enhance spaced repetition software?]] many answers arise. This note collects those possibilities:*

But first it's important to reason through [[How important is it to create your own Anki prompts?]].

## From me
- [[LLMs can slowly push the boundaries of what we know]]
	- If a  prompt is consistently answered incorrectly, use an LLM to add questions for context
	- From "4th president of the US?" → "Who was the president before James Madison?", "Who was the president after James Madison?"
- Writing prompts is generally a solitary act. It's been rare to find others interested in creating cards on the same topics. LLMs can act as a virtual copilot / tutor in this regard: 
	- [[LLM revision & extension copilot]]
	- [[LLMs can act as training wheels for users of spaced repetition systems]]

- Ask questions to connect different concepts. Vector-encoding existing prompts could help an LLM understand what questions to ask to connect ideas.
	- Vector encoding as a visualization could be useful as well to see where the bulk of our encoding lies

- LLMs can consume content and output initial prompts
	- To lay down signposts while reading. This is reminiscent of iterative reading, with consecutive passes further encoding the text
		- I find this to be particularly useful when reading about new concepts. It often takes me a few days to internalize foundations, which is greatly accelerated by Anki
		- If an LLM could do this iteratively after ingesting a piece of material (by identifying foundational concepts), this could be useful
	- Generate (likely imperfect) prompts to act as starting places for building out your own prompts
	- When it's all said and done, the LLM should be able to output prompts to CSV format

- Auto-generate Q&A from Readwise quotes. See [Smoothbrain-Anki](https://github.com/smoothbrain-ai/smoothbrain-anki)

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
