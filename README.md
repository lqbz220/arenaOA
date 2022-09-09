# arenaOA

The attached text file contains the favorite musical artists of 1000 users from Some Popular Music Review Website. Each line is a list of up to 50 artists, formatted as follows:

Radiohead,Pulp,Morrissey,Delays,Stereophonics,Blur,Suede,Sleeper,The La's,Super Furry Animals,Iggy Pop\nBand of Horses,Smashing Pumpkins,The Velvet Underground,Radiohead,The Decemberists,Morrissey,Television\n etc.

Write a program that, using this file as input, produces an output file containing a list of pairs of artists which appear TOGETHER in at least fifty different lists. For example, in the above sample, Radiohead and Morrissey appear together twice, but every other pair appears only once. Your solution should be a csv, with each row being a pair. For example:

Morrissey,Radiohead\n

Your solution MAY return a best guess, i.e. pairs which appear at least 50 times with high probability, as long as you explain why this tradeoff improves the performance of the algorithm. Please include, either in comments or in a separate file, a brief one-paragraph description of any optimizations you made and how they impact the run-time of the algorithm.

------
## Instruction:
You need to set up a Node development environment to run this code. 
The link explains how to install Node.js and Node Package Manager (npm) on your operating system:
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment 

Clone the repo to your local machine:
```
$ git clone git@github.com:lqbz220/arenaOA.git 
```
To run solution1 and generate results in csv:
``` 
$ node solution1.js 
```

To run bruteForce solution and generate results in csv: 
```
$ node bruteForce.js 
```
Test(test both solutions):
```
$ npm install --save-dev jest
$ npm test
```
