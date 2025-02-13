# Studio-project

## Introduction
- For my studio project, I decided to choose ‘Glitches’ because I thought it would be fun to play around in a p5.js sketch. It’s merely focusing on playfulness and randomness, instead of aiming for difficult word coding or perfection. What I really wanted to try is to do the unexpected, and I wanted to lead where it goes wild and crazy into this sketch. 
- During my 10 workshops, there was some uncompleted work due to the past few weeks, but I was quite proud of the final result of what I have done. Even I was very thankful on Leo's feedback, saying that it was **"good level of experimentation with coding skills introduced in the workshop videos. Some of your experimentation with interactivity and 2D primitive shapes gave rise to interesting visual experiences."** But there were some missing points happening, which was the student linking and also 2 missing workshops. I did understand on the reason, but for this final assignment, I had a feeling that it'll get much improved. I also learnt a lesson about computer coding, where it's not about perfecting the sketch, but tempting to learn and getting to understand the code structure, while making a sketch. 
- I was quite a beginner at first, and I was really nervous about studying computer coding for the first lesson but at least there were good experiences. Because of the help from my classmate [Emily](https://github.com/mremily9) and professor, Leo, I felt very comfortable, and was very helpful from them in the beginning.
- Moving on, this project, during the concept theme of ‘Glitches’ is where the viewers will experience disorientation & surprise (unexpected shapes and movements) even added to creativity (of what Vera Molnar said “Computers allow artists to establish processes and experiment with the results, rather than sanctifying the output, as if it came from a godly inspiration." [Her interview](https://www.rightclicksave.com/article/an-interview-with-vera-molnar)
- Again, I want to challenge myself on having fun in coding and getting to see the beauty and playfulness, existing in digital and generative art. 

## Working notes
- During the research from the [Artist List](https://canvas.auckland.ac.nz/courses/121821/pages/artist-list), I wanted to choose Frieder Nake, whom his artwork amazed me, but somehow the theme for his and my theme were quite different, because of his math computer art. It wasn't mostly a glitch but using mathematical problems. So I questioned Leo, about the artist that I chose, if his theme relates to glitches, and I knew the answer was no. But he gave me an artist that I should try whom was Vera Molnar (hungarian artist).
- So again with another different research, I googled her name, and find her artwork quite interesting too. This is the site to her computer art and her journels. [Vera_Molnar](http://www.veramolnar.com/)

**_Talking about Vera Molnar_**- Artist List
- The reason why I was drawn to Velna Molnar's work explores structure and disruption, which is that it creates a rhythmic yet unpredictable composition. At first, the composition appears neat, but her small shifts break up the pattern, drawing attention to the unexpected. Molnar, a pioneer of computer-generated art, introduces randomness into strict geometric designs, creating a sense of controlled imperfection. This balance between order and mostly disruption is what draws me into _Interruptions_.  This piece encouraged me to close observation, revealing how minor changes can alter perception and meaning. It becomes slightly unsettled, making the viewer more aware of the way structures can subtly break down. This links with my interest in glitch aesthetics on how small disruptions can create new ways of seeing.
[Vera Molnár at the 2022 Venice Biennale](https://magazine.artland.com/vera-molnar/#:~:text=Vera%20Moln%C3%A1r%20at%20the%202022%20Venice%20Biennale&text=Moln%C3%A1r%20wrote%20an%20algorithm%20that,shapes%20collide%20and%20generating%20friction.) Her work shows a playful and thoughtful approach to disorder. Her interruptions are not concidental but carefully placed, making her art both intentional and organic. The way she manipulates structure with slight variations reminds that rigid systems can be flexible, open to transformation. Her coding work _Interruptions_ ultimately challenge the idea of perfection, shows how controlled unevenness can make the artwork more enegaging and dynamic. Her work _Interruptions_ again a computer generated artwork, her composition built on a grid of geometric forms, but introducing slight distortions (shifted liens, elements, and patterns breaking apart. I think on what it means of this artwork is it challenges the idea of perfecction in art and technology. It even suggests seen as a metaphor for instability and tranformation. (continue writing). I believe what Molnár was motivated was by the relationship between order and randomness. The theme of 'glitches' addresses to the artwork _Interruptions_, because again, the glitch aesthetics, but emobodies it by making errors into the design. It happens to be more noticeable and beautiful too. Glitches make both visual and conceptual ways ( ) 

**_Article_**- Reading List
- writing on about the article on glitches  (chroma glitch: data as style)





## Coding
- I wanted to plan out on about my 'glitch' project and decided to make multiple of cubes, but adding the movement of a waves. It's mostly similar to the artist that I chose: Velna Molnar, where it explores a lot of randomness, and playing with grids, lines and simple shapes to generate complex compositions. 

**the planning**
![IMG_1983](https://github.com/user-attachments/assets/3467d774-fe04-4088-95e0-0491b890f475)
- The most essential point is where on making the column and rows and filling it with cubes. So I started to research [column and row p5.js](https://www.google.com/search?q=column+and+row+p5.js&rlz=1C1GCEA_enNZ1149&oq=column+and+row+p5.js&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRigATIHCAIQIRiPAjIHCAMQIRiPAtIBCDM5OTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8)
on www.google.com when I came to find out this one youtube video, that helped me to get on track. 

[p5.js sketch tutorial|2D Grid w Nested Loop](https://www.youtube.com/watch?v=UKxB2j4h7Ag)

![Screenshot 2025-02-12 162243](https://github.com/user-attachments/assets/05296ab1-d26c-480b-bbae-38aaf35e55c7)
![Screenshot 2025-02-12 162604](https://github.com/user-attachments/assets/7850e0cc-bcd8-482e-80ba-bf293b97f31e)

She first started using the first code which was setting up
```ruby
let columns; let rows;
let colSize; let rowSize;
```
![Screenshot 2025-02-12 163926](https://github.com/user-attachments/assets/5cd2d3e6-6789-4af0-8a07-70f3b18edab9)
- It was quite complicated on how it worked throughout the glitch code, but I never gave up and plenty researched on google and youtube the same time. Thanks to [Patt Vira](https://www.youtube.com/@pattvira), I had a lot of help from her on youtube, and followed her course video along.
- I decided to focus on the wave effect and learned from www.youtube.com from [Patt Vira](https://www.youtube.com/@pattvira) on where she learns about wave pattern, and looking back at the workshops codes that I previously did. Looking back at workshops
- starting the first code, I decided to change to
```ruby
let cols = 10;  
let rows = 10;  
let squareSize = 40; 
let time = 0; 

function setup() {
  createCanvas(500, 500);
  noFill(); 
  rectMode(CENTER);
}
```
- talk about strokeWeight, deltaTime, time and wave motion (from p5.js)




 
