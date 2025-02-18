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

**_Talking about her work Pulling Threads_**- Artist List
- 


**_Article_**- Reading List
- In *Chroma Glitch: Data as Style*, Carolyn L. Kane explores how digital errors—glitches, compression artifacts, and distorted color—have been embraced as a distinct visual style. Rather than treating technological failure as a flaw, digital artists manipulate these errors intentionally, turning them into aesthetic choices that challenge mainstream ideas of perfection in digital media. Kane argues that these disruptions not only expose the hidden structures of digital technology but also serve as cultural critiques of its sanitized, polished appearance. A key focus of the chapter is *datamoshing*, a process that disrupts digital compression, causing frames to blend and smear unpredictably. This technique, often associated with early internet art and experimental video practices, highlights the instability of digital data. Kane writes, _**“In an era obsessed with seamless digital flow, the deliberate embrace of compression errors forces the viewer to confront the fragility of the digital image.”**_ Instead of presenting smooth, controlled visuals, datamoshing allows for unpredictable distortions, making the digital medium itself visible in ways that are usually concealed.
Kane situates glitch aesthetics within a broader artistic tradition that values imperfection. She draws connections between digital glitch art and earlier avant-garde movements, such as abstract expressionism and punk aesthetics, which sought to reject conventional beauty and embrace chaos. She notes, “The glitch, like the painter’s errant brushstroke or the musician’s distortion, is both an accident and a choice—one that disrupts our expectations of the medium.” By embracing mistakes, glitch artists resist the notion that digital technology should always function flawlessly.
The chapter also considers the cultural significance of digital breakdowns. Kane argues that in a world increasingly dominated by algorithms and automated processes, glitches remind us that technology is never truly neutral. _**“The glitch is a rupture,”**_ she explains, _**“a moment where the digital illusion collapses, revealing the systems of control beneath.”**_ In this sense, glitch art is not just about aesthetics—it is also about making technology’s underlying structures visible and open to critique.
Moreover, Kane highlights how digital error has been co-opted into mainstream culture. What was once an underground, subversive practice has been absorbed into corporate design, advertising, and even fashion. She describes how high-end brands and commercial artists now incorporate glitch aesthetics to signal digital authenticity or edginess. _**“As with all avant-garde styles,”**_ , _**“glitch, too, has been commodified—its rough edges polished just enough to make it palatable for the masses.”**_ This raises questions about whether glitch art retains its radical potential or if it has simply become another aesthetic trend.
Ultimately, *Chroma Glitch: Data as Style* presents glitch art as more than a passing visual trend. Kane sees it as a response to digital culture’s obsession with smoothness, efficiency, and control. By transforming errors into art, artists challenge the notion that digital media should be perfect, inviting viewers to see technology not as an invisible tool but as something messy, unstable, and deeply human.





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
- I decided to focus on the wave effect and learned from www.youtube.com from [Patt Vira](https://www.youtube.com/@pattvira) on where she learns about wave patterns, and looking back at the workshops codes that I previously did. Looking back at workshop 7, starting on the first code, I decided to change:
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
- I mostly similarly duplicated on what she did for her coding work, and also adding the few codes from the help of my friend, too. It was
```ruby
 for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * squareSize + squareSize / 2;
      let y = j * squareSize + squareSize / 2;
```
At to this limit of the code, I was quite confused on what to continue on to the next code, so I asked www.chatgpt.com, questioning _can you make the squares move like the wave motion?_, and it displayed up like this:
```ruby
 push();
      translate(x + xOffset, y + waveY + yOffset);
      rotate(angle);
      strokeWeight(random(0.5, 2)); // line thickness
      rect(0, 0, randomSize, randomSize);
      pop();
    }
  }

  time += 0.05; 
}
```
It's quite confusing at first and asked again on about the description of only the end of the code, as there was a lot of codes that I know for example; rotate(angle), rect, and even strokeWeight.

![Screenshot 2025-02-13 153847](https://github.com/user-attachments/assets/b8a5387d-c49d-4bd8-9fcb-05ffd7c92fd8)

- I just realized when the first animation was done, I wanted to add more details, and looked back into the artist's works. I thought about why not making a gif, but leaving the code, but upgraded.
https://www.youtube.com/watch?v=5CcMjtN_Q0g

 
