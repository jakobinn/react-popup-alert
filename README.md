# react-popup-alert


[![NPM](https://img.shields.io/npm/v/react-popup-alert.svg)](https://www.npmjs.com/package/react-popup-alert) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![coverage branches badge](https://github.com/jakobinn/react-popup-alert/blob/main/coverage/badge-branches.svg)
![coverage functions](https://github.com/jakobinn/react-popup-alert/blob/main/coverage/badge-functions.svg)
![coverage lines badge](https://github.com/jakobinn/react-popup-alert/blob/main/coverage/badge-lines.svg)
![coverage statements badge](https://github.com/jakobinn/react-popup-alert/blob/main/coverage/badge-statements.svg)

```bash
npm install --save react-popup-alert
```

## Use example

![open and close alert boxes](https://github.com/jakobinn/react-popup-alert/blob/main/alertgif.gif)

## Usage

```jsx
import React from 'react'

import Alert from 'react-popup-alert'

const App = () => {
  const [alert, setAlert] = React.useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })

  function onCloseAlert() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }

  function onShowAlert(type) {
    setAlert({
      type: type,
      text: 'Demo alert',
      show: true
    })
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        <button onClick={() => onCloseAlert()}>Hide alert</button>
        <button onClick={() => onShowAlert('success')}>
          Show success alert
        </button>
        <button onClick={() => onShowAlert('error')}>Show error alert</button>
        <button onClick={() => onShowAlert('warning')}>
          Show warning alert
        </button>
      </div>
      <Alert
        header={'Header'}
        btnText={'Close'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
    </div>
  )
}

export default App
```

## Parameters

<table>
<thead>
<tr>
<th style="text-align:left;">Prop</th>
<th style="text-align:center;">Type</th>
<th style="text-align:center;">Description</th>
<th style="text-align:left;">Default</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">show</td>
<td style="text-align:center;"><code>boolean</code></td>
<td style="text-align:center;">Show / Hide alert</td>
<td style="text-align:left;">false</td>
</tr>
<tr>
<td style="text-align:left;">header</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;">Header text</td>
<td style="text-align:left;">Warning</td>
</tr>
<tr>
<td style="text-align:left;">text</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;">Alert text</td>
<td style="text-align:left;"></td>
</tr>
<tr>
<td style="text-align:left;">btnText</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;">Text on the button</td>
<td style="text-align:left;">Close</td>
</tr>
<tr>
<td style="text-align:left;">showBorderBottom</td>
<td style="text-align:center;"><code>boolean</code></td>
<td style="text-align:center;">Show colored line at the bottom of the alert</td>
<td style="text-align:left;">true</td>
</tr>
<tr>
<td style="text-align:left;">type</td>
<td style="text-align:center;"><code>success | warning | error</code></td>
<td style="text-align:center;"> Show different types of alert</td>
<td style="text-align:left;"></td>
</tr>
<tr>
<td style="text-align:left;">color</td>
<td style="text-align:center;"><code>string (hex color)</code></td>
<td style="text-align:center;">Hex color of the alert (#22ffaa for example)</td>
<td style="text-align:left;"></td>
</tr>
<tr>
<td style="text-align:left;">onClosePress</td>
<td style="text-align:center;"><code>function</code></td>
<td style="text-align:center;">Function that runs when alert closes</td>
<td style="text-align:left;"></td>
</tr>
<tr>
<td style="text-align:left;">pressCloseOnOutsideClick</td>
<td style="text-align:center;"><code>boolean</code></td>
<td style="text-align:center;">Trigger onClosePress function when user clicks outside of the alert</td>
<td style="text-align:left;">true</td>
</tr>
<tr>
<td style="text-align:left;">alertStyles</td>
<td style="text-align:center;"><code>object</code></td>
<td style="text-align:center;">Object of styles that affect the popup.</td>
<td style="text-align:left;"></td>
</tr>
<tr>
<td style="text-align:left;">headerStyles</td>
<td style="text-align:center;"><code>object</code></td>
<td style="text-align:center;">Object of styles that affect the header.</td>
<td style="text-align:left;"></td>
</tr>
<tr>
<td style="text-align:left;">textStyles</td>
<td style="text-align:center;"><code>object</code></td>
<td style="text-align:center;">Object of styles that affect the text of the popup.</td>
<td style="text-align:left;"></td>
</tr>
<tr>
<td style="text-align:left;">buttonStyles</td>
<td style="text-align:center;"><code>object</code></td>
<td style="text-align:center;">Object of styles that affect the popup button.</td>
<td style="text-align:left;"></td>
</tr>

</tbody>
</table>

## License

MIT © [jakobinn](https://github.com/jakobinn)
