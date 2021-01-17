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

  function onShowModal(type: string) {
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
