import React, { useEffect } from 'react'
import './styles.scss'

interface Props {
  header: string
  text: string
  btnText: string
  show: boolean
  showBorderBottom?: boolean
  type?: string
  color?: string
  onClosePress: Function
  pressCloseOnOutsideClick?: boolean
  alertStyles?: object
  headerStyles?: object
  textStyles?: object
  buttonStyles?: object
}

const AlertReact = ({
  //text
  header = 'Warning',
  text,
  btnText = 'Close',
  //visuals
  show = false,
  showBorderBottom = true,
  type,
  color,
  //functions
  onClosePress,
  pressCloseOnOutsideClick = true,
  //styles
  alertStyles = {},
  headerStyles = {},
  textStyles = {},
  buttonStyles = {}
}: Props) => {
  /* LIFECYCLE METHODS */
  const handleClickOutsideAlert = (e: Event): void => {
    if (show) {
      const target = e?.target as HTMLInputElement
      if (target?.className === 'backdrop') {
        onClosePressClick()
      }
    }
  }

  useEffect(() => {
    //Add event listener if it is shown
    if (pressCloseOnOutsideClick && show) {
      document.addEventListener('mousedown', handleClickOutsideAlert)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideAlert)
    }
  }, [show])

  /* LISTENER FUNCTIONS */

  const onClosePressClick = () => {
    document.removeEventListener('mousedown', handleClickOutsideAlert)
    onClosePress()
  }

  /* GET DATA */

  const getColor = () => {
    if (color && color.includes('#')) {
      return color
    } else if (type === 'error') return '#dc3545'
    else if (type === 'success') return '#28a745'
    else if (type === 'warning') return '#ffc107'
    else return '#333'
  }
  const colorToUse = getColor()

  const getAlertStyle = () => {
    if (showBorderBottom) {
      return { borderBottom: '3px solid' + colorToUse + '', ...alertStyles }
    } else {
      return alertStyles
    }
  }

  return (
    <div>
      {show ? (
        <div>
          <div className='backdrop'></div>
          <div className={'alert-main'} style={getAlertStyle()}>
            <p className='alert-header' style={headerStyles}>
              {header}
            </p>
            <p className='alert-body' style={textStyles}>
              {text}
            </p>
            <a
              onClick={() => onClosePressClick()}
              className={'alert-button'}
              style={{ backgroundColor: colorToUse, ...buttonStyles }}
              href='#'
            >
              {btnText}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AlertReact
