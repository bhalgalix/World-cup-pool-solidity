<h1>Pool App</h1>

This is a pool for the FIFA world cup in solidity using rinkeby as the Test net, truffle for the compilation, metamask for the wallets.

The group results is a series of 1(qualified) or 0(not) depending if the team qualified for next round or not, then the World Cup results are another series of 2(qualified) or 1(not) depending if the team qualified or not. Both results will add up and in the resulting number, the number of 3's will be the number of points you get.

For the rest of rounds each team will have a number. The results will be in another series that will be all the team qualified, and the function will compare oach series of every player with the World Cup result series.

<h3>Example:</h3>

11. Brazil
12. Germany

13. Panama
14. Senegal

15. Mexico
16. Russia

17. New Zealand
18. Spain

In this example we have 8 teams, each pair will play each other to see who advance to the next round 
the series to this stage will be: 11 12 13 14 15 16 17 18 (the teams that classified from group stage)(without spaces)

12. Germany
13. Panama

15. Mexico
18. Spain

Then we have the 4 teams that won their match and will play next round
The series to this stage will be: 111213141516171812131518 (same as the previous but with team that won)

12. Germany
18. Spain

The series to this stage will be: 1112131415161718121315181218

18. Spain ("wins the world cup")

The series will be: 111213141516171812131518121818 and each player will have their own depending on the reults they believe will happen.
