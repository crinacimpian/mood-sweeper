# MoodSweeper

A twist of the MineSweeper game. The bombs are replaced with bad moods and you are given tips to change those moods when you encounter them.


cd mobile
yarn ios
yarn web
yarn android


## Test

`npm test test/**.js`

## Debug

`npm run test:repl`

Type a variable name to see its current value
Type next or n to proceed onto the next line of code
Type step or s to step into a function, and out or o to step out of it

[https://nodejs.org/api/debugger.html#debugger_command_reference]

### Debug with Chrome Dev Tool

`npm run test:debug`