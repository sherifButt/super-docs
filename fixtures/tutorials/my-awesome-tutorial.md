# Memory Extension Web App
This project aims to simulate human memory processes to provide long-term memory support for ChatGPT, particularly when dealing with complex tasks such as coding a large application.

<div class='mdc'>
<div class='ic'>

### How to send?

particularly when dealing with complex tasks such as coding a large application.

```javascript
function hashToLink(doclet, hash) {
  var url

  if ( !/^(#.+)/.test(hash) ) {
    return hash
  }

  url = helper.createLink(doclet)
  url = url.replace(/(#.+|$)/, hash)

  return '<a href="' + url + '">' + hash + '</a>'
}
```

</div>

<div class='ic'>


```mermaid
---
title: sequence diagram for the proccess
---
gantt
title Writing my thesis
dateFormat  MM-DD
axisFormat  %m-%d
section Research
Procrastinate           :a1, 01-01, 59d
Do it     :after a1  , 10d
section Write-up
Should I start?     :03-01 , 20d
Ugh ok      : 6d
```

</div>
</div>

| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| Codecademy Tee    |  False   | 19.99 |
| Codecademy Hoodie |  False   | 42.99 |

## Examples

Here are some examples of how to use this project:


- To authenticate a user, use the NextAuth library.
- To manage state, use the Redux RTK Query library.
- To style the UI, use the Tailwind library.
- To store data, use the PostgreSQL database.
- To document the API, use the Swagger library.

## Target Audience

This project is intended for developers who use ChatGPT and need long-term memory support for complex tasks such as coding a large application.

## chart

```mermaid
sequenceDiagram
    participant U as User
    participant F as Function
    U->>F: Calls cleanCode(response)
    F->>F: Checks validity of response
    Note over F: If response is invalid, returns empty codeBlocks, cleanedResponse, noMarkdown
    F->>F: Creates startMarker and endMarker
    F->>F: Finds startMarkerIndex in response
    F->>F: Creates cleanedInput by removing content before startMarker
    F->>F: Finds endMarkerIndex in cleanedInput
    F->>F: Removes everything after endMarker in cleanedInput
    F->>F: Matches code blocks with regex
    F->>F: Creates codeBlocks and cleanedResponse
    F->>F: Matches any unmatched backticks in cleanedResponse
    F->>F: Creates final cleanedResponse and noMarkdown
    F-->>U: Returns CodeBlocks, cleanedResponse, noMarkdown
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.