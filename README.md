Bot Welcomer v2
====================

## Install using npm:

``` bash
npm install whats-cord
```

## Example usage

```javascript

const welcome = require('whats-cord');
var groupName = "Group1" //string
var memberName = "Felix" //string
var background = "https://telegra.ph/file/4b1b48bd0db4bd80fed7f.jpg" //string
var avatar = "https://telegra.ph/file/7fd2bb9815768b4db7ab1.jpg" //string
var welcome = "Welcome To Our group" //string
// Enter Value

await welcome(groupName, memberName, background , avatar, welcome)
.then(buffer => {
console.log(buffer)
})

<img align="center" fit="fill" alt="JPG" src="https://i.ibb.co/sgDvxrK/IMG-20210727-WA1305.jpg" />

```
## Sources

canvacord

## License

MIT
