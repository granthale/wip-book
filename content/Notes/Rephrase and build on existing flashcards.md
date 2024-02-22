---
author: Grant
tags:
  - seed
---
A [[Desirable features for automating flashcard creation|desirable feature for automating flashcard creation]] is to rephrase and build around existing Anki prompts. Here's a quick example of an existing solution with [Mark Nagelberg's](https://www.marknagelberg.com/) Flashcard Generator GPT:

Here's my original prompt:
>**Q:** What are people keeping a close eye on with the GE poplars that China planted?
>**A:** Gene flow

Here's what the GPT outputs:
>**Q:** What is the primary concern with the genetically engineered (GE) poplars planted in China? 
>**A:** Gene flow.

>**Q:** What does "gene flow" refer to in the context of genetically engineered (GE) plants? 
>**A:** The transfer of genetic material from GE plants to wild relatives or other closely related species, potentially spreading genetic modifications outside of intended areas.

Here's the [continued conversation](https://chat.openai.com/share/8277d8ad-65c0-40ed-b4c5-0b0122d481e8) with other prompts as well, including prompts to test similarity and difference with related concepts.

**Implementation**: I'm imagining this as an Anki plugin that lets you click a button to reinforce prompts in different ways (Matuschak's conceptual categories, etc.)

While his GPT is not open-source, he relies on encoding [Piotr Wozniak's Twenty Rules of Formulating Knowledge](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge).

