# react-popup-alert

[![NPM](https://img.shields.io/npm/v/react-popup-alert.svg)](https://www.npmjs.com/package/react-popup-alert) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-popup-alert
```

## Usage

```jsx
import React from 'react'

import Alert from 'react-popup-alert'
import 'react-popup-alert/dist/index.css'

const App = () => {
  const [alert, setAlert] = React.useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })

  function onCloseModal() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }

  function onShowModal(type) {
    setAlert({
      type: type,
      text: 'Demo modal',
      show: true
    })
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        <button onClick={() => onCloseModal()}>Hide modal</button>
        <button onClick={() => onShowModal('success')}>
          Show success modal
        </button>
        <button onClick={() => onShowModal('error')}>Show error modal</button>
        <button onClick={() => onShowModal('warning')}>
          Show warning modal
        </button>
      </div>
      <Alert
        header={'Header'}
        btnText={'Close'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseModal}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        modalStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
    </div>
  )
}

export default App
```

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
<td style="text-align:center;">Show / Hide awesome alert</td>
<td style="text-align:left;">false</td>
</tr>
<tr>
<td style="text-align:left;">useNativeDriver</td>
<td style="text-align:center;"><code>boolean</code></td>
<td style="text-align:center;">Use native driver for animations</td>
<td style="text-align:left;">false</td>
</tr>
<tr>
<td style="text-align:left;">showProgress</td>
<td style="text-align:center;"><code>boolean</code></td>
<td style="text-align:center;">Show / Hide progress bar</td>
<td style="text-align:left;">false</td>
</tr>
<tr>
<td style="text-align:left;">title</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;">Title text to display</td>
<td style="text-align:left;">hidden</td>
</tr>
<tr>
<td style="text-align:left;">message</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;">Message text to display</td>
<td style="text-align:left;">hidden</td>
</tr>
<tr>
<td style="text-align:left;">closeOnTouchOutside</td>
<td style="text-align:center;"><code>bool</code></td>
<td style="text-align:center;">Dismiss alert on clicking outside</td>
<td style="text-align:left;">true</td>
</tr>
<tr>
<td style="text-align:left;">closeOnHardwareBackPress</td>
<td style="text-align:center;"><code>bool</code></td>
<td style="text-align:center;">Dismiss alert on hardware back press (android)</td>
<td style="text-align:left;">true</td>
</tr>
<tr>
<td style="text-align:left;">showCancelButton</td>
<td style="text-align:center;"><code>bool</code></td>
<td style="text-align:center;">Show a cancel button</td>
<td style="text-align:left;">false</td>
</tr>
<tr>
<td style="text-align:left;">showConfirmButton</td>
<td style="text-align:center;"><code>bool</code></td>
<td style="text-align:center;">Show a confirmation button</td>
<td style="text-align:left;">false</td>
</tr>
<tr>
<td style="text-align:left;">cancelText</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;">Cancel button text</td>
<td style="text-align:left;">Cancel</td>
</tr>
<tr>
<td style="text-align:left;">confirmText</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;">Confirm button text</td>
<td style="text-align:left;">Confirm</td>
</tr>
<tr>
<td style="text-align:left;">onCancelPressed</td>
<td style="text-align:center;"><code>func</code></td>
<td style="text-align:center;">Action to perform when Cancel is pressed</td>
<td style="text-align:left;">-</td>
</tr>
<tr>
<td style="text-align:left;">onConfirmPressed</td>
<td style="text-align:center;"><code>func</code></td>
<td style="text-align:center;">Action to perform when Confirm is pressed</td>
<td style="text-align:left;">-</td>
</tr>
<tr>
<td style="text-align:left;">onDismiss</td>
<td style="text-align:center;"><code>func</code></td>
<td style="text-align:center;">Callback for when alert is dismissed</td>
<td style="text-align:left;">-</td>
</tr>
<tr>
<td style="text-align:left;">customView</td>
<td style="text-align:center;"><code>object</code></td>
<td style="text-align:center;">Custom view to render inside alert</td>
<td style="text-align:left;">null</td>
</tr>
<tr>
<td style="text-align:left;">modalProps</td>
<td style="text-align:center;"><code>object</code></td>
<td style="text-align:center;">Additional props to pass for Modal</td>
<td style="text-align:left;">-</td>
</tr>
</tbody>
</table>

## License

MIT © [jakobinn](https://github.com/jakobinn)
