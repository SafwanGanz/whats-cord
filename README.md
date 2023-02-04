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
// Enter Value

await welcome(groupName, memberName, background , avatar, welcome or goodbye )
.then(buffer => {
console.log(buffer)
})
```
## Sources

canvacord

## License

MIT
