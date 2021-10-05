## Documentation for Project 1

For this project, my initial concepts or sketches are trying to show the loop of one day, so I want to make the beginning part and the end part exactly the same. I thought about elements that can loop infinitely or endlessly, and finally I have four ideas, maze, Mobius ring, sunrise/sunset, and the growth of a flower.
![sketch1](https://github.com/kanodesu/dvia-fall21/blob/master/01time/Screen%20Shot%202021-09-21%20at%2000.34.53.png "sketch1")

But after having last week's class, I think my coding skills just cannot visualize these concepts for now, so I tried to simplify my 'growth' idea, and  to visualize it by using shapes instead of a flower.    
![sketch2](https://github.com/kanodesu/dvia-fall21/blob/master/01time/Screen%20Shot%202021-09-21%20at%2000.55.33.png "sketch2")

I watched some tutorial videos of p5.js on [The Coding Train](https://www.youtube.com/user/shiffman) 's Youtube channel, especially these three, [Coding Challenge #74: Clock with p5.js](https://www.youtube.com/watch?v=E4RyStef-gY), [9.1: Transformations Pt.1 (Translate, Rotate, Push/Pop) - p5.js Tutorial](https://www.youtube.com/watch?v=o9sgjuh-CBM), and [CP1: Animation in P5JS – Basics: Rotation](https://www.youtube.com/watch?v=-YhzDuF_kLs) by Jeff Thompson.
And I decided to combine the second and the third idea together.  Instead of using last week class's code provided by Zach, I used the reference hour(),  minute(), and second() to let p5.js communicates with the clock on my computer, and to know the current time. 

For my final output, the three squares represent hour, minute, and second separately. The width and the length of the square will grow 8px by 1 second/minute/hour with a beginning size of 1px. And these three squares are also rotating clockwise according to time, for example, the 'second' square will complete one revolution in one minute, so it will rotate 6 degrees in one second.
![sketch3](https://github.com/kanodesu/dvia-fall21/blob/master/01time/assignment01.png "sketch3")

There is still a problem that if the number of seconds is the same as the number of minutes, the upper layer square will cover the lower layer square. I haven’t thought of a perfect way to solve it, but there will be such situations in the clock, such as the second hand and the hour hand overlap with each other.

The website: [01](https://kanodesu.github.io/dvia-fall21/01time/)
