# arenaOA
To set expectations:

1. Assume none of the strings contain commas, newlines, malicious constructs or any edge cases
2. We recommend that candidates use their strongest language
3. We care more about readability (variable names, formatting, complexity, etc.) and correctness than performance
4. Tests aren't required but submissions that come with unit tests are much more likely to be correct

The attached text file contains the favorite musical artists of 1000 users from Some Popular Music Review Website. Each line is a list of up to 50 artists, formatted as follows:

Radiohead,Pulp,Morrissey,Delays,Stereophonics,Blur,Suede,Sleeper,The La's,Super Furry Animals,Iggy Pop\nBand of Horses,Smashing Pumpkins,The Velvet Underground,Radiohead,The Decemberists,Morrissey,Television\n etc.

Write a program that, using this file as input, produces an output file containing a list of pairs of artists which appear TOGETHER in at least fifty different lists. For example, in the above sample, Radiohead and Morrissey appear together twice, but every other pair appears only once. Your solution should be a csv, with each row being a pair. For example:

Morrissey,Radiohead\n

Your solution MAY return a best guess, i.e. pairs which appear at least 50 times with high probability, as long as you explain why this tradeoff improves the performance of the algorithm. Please include, either in comments or in a separate file, a brief one-paragraph description of any optimizations you made and how they impact the run-time of the algorithm.
-----------------------
Instruction:

$ git clone git@github.com:lqbz220/arenaOA.git 

To run solution1 and generate csv: 
$ node solution1.js 

To run bruteForce and generate csv: 
$ node bruteForce.js 

Test(test both solutions):
$ npm test
