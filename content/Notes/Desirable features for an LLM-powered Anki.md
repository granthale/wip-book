---
author: Grant
tags:
  - seed
---
*In attempting to answer: [[§ How can LLMs enhance spaced repetition software?]] many answers arise. This note collects those possibilities:*

First, it's important to reason through [[How important is it to create your own Anki prompts?]]

## Consuming content
- [[LLMs can consume content and output initial prompts]]
- Auto-generate Q&A from Readwise quotes. See [Smoothbrain-Anki](https://github.com/smoothbrain-ai/smoothbrain-anki)
## Creating and revising
- Writing prompts is generally a solitary act. It's been rare to find others interested in creating cards on the same topics. LLMs can act as a virtual copilot / tutor in this regard: 
	- [[LLMs can act as a revision & extension copilot]]
	- [[LLMs can act as training wheels for memory systems]]

## Reviewing
- If a prompt is consistently answered incorrectly, an LLM can add questions for context
	- From "4th president of the US?" → "Who was the president before James Madison?", "Who was the president after James Madison?"
- On the flip side, if a prompt is consistently reviewed correctly, combine that prompt with others to increase difficulty
- Rephrase the question in multiple ways, so that the concept itself is encoded

## Extending and deepening
- [[LLMs can slowly push the boundaries of what we know]]
- Ask questions to connect different concepts. Vector-encoding existing prompts could help an LLM understand what questions to ask to connect ideas.
	- Vector encoding as a visualization could be useful as well to see where the bulk of our encoding lies

---
## References

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
