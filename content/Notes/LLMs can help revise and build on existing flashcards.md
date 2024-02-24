---
author: Grant
tags:
  - seed
---
## Approach
[[Desirable features for automating flashcard creation|Automating flashcard creation]] is potentially a misnomer. Not only can LLMs aid in from-scratch creation, they are also promising when it comes to revision and [[LLMs can slowly push the boundaries of what we know|extension]]. In practice, LLM-powered SRS tools could sculpt our existing flashcards or web-build questions around concepts we'd like to understand.

Here's a quick example of an existing GPT programmed by [Mark Nagelberg](https://www.marknagelberg.com/). While his GPT input is not open-source, it relies on [Piotr Wozniak's Twenty Rules of Formulating Knowledge](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge).

---
## GPT Results
**Here's my original prompt:**
>**Q:** What are people keeping a close eye on with the GE poplars that China planted?

>**A:** Gene flow

**After plugging it into Mark's GPT:**
>**Q:** What do our intuitions prefer explanations in terms of? 

>**A:** Functions or purpose.

>**Q:** Why do humans tend to prefer explanations that involve functions or purpose? 

>**A:** Because such explanations provide a sense of understanding and order, making complex phenomena seem more predictable and manageable.

**I shot back with one of [[Andy's prompt writing principles]]:** 
>Can you write a few more to support that prompt? In them, differentiate between what it's similar to and different from?

**It returned with:**
>**Q:** How does preferring explanations in terms of functions or purpose compare to scientific explanations?

> **A:** Unlike scientific explanations, which often focus on cause and effect regardless of intent, explanations based on functions or purpose attribute a goal or reason behind phenomena, aligning more with human intuition than with objective analysis.

>**Q:** How is preferring explanations in terms of functions or purpose similar to teleological thinking? 

>**A:** Both involve attributing a purpose or end goal to objects or events, assuming that these occur for a specific reason related to their function.

...and a few more. Check out the [conversation](https://chat.openai.com/share/8277d8ad-65c0-40ed-b4c5-0b0122d481e8) if you'd like.

While the answers seem a bit wordy, one more prompt made them much more concise:

>**Q:** How do functional/purposive explanations compare to scientific ones?  

>**A:** Functional/purposive explanations attribute goals, while scientific ones focus on cause and effect without intent.

>**Q:** How are functional/purposive explanations similar to teleological thinking?  

>**A:** Both attribute a purpose or goal to phenomena.

---
## Takeaways
This seems like it solves a known alignment issue—[[How can we direct LLM-powered SRS towards what we want to learn about?|the system does not have to identify what the important concepts are]]. Instead by providing a prompt, a concept is chosen, and LLMs can work their vectorized magic.

This was value-add. In the prompts provided above, I would not have made the connection to scientific reasoning nor teleological thinking. (To be transparent, I didn't even know what teleological thinking was!) 

[[Concerns with LLM-powered Anki|Connections should still be sought]] but from this demonstration, LLM's potential for illuminating unknown unknowns seem great.

---
## Imagination
As of now, I'm envisioning this as an Anki plugin that lets a person click on different dropdown buttons to augment prompts in different ways. Maybe, providing the list of [[Prompt writing principles for flashcards]] would be a starting place.