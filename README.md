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
      <div style={{ margin: 'auto', marginTop: 50 }}>
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
        text={alert.texxt}
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

## License

MIT © [jakobinn](https://github.com/jakobinn)
