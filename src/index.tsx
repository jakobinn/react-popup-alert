import React, { useEffect } from 'react'
import {
  headerDefault,
  btnTextDefault,
  errorColor,
  successColor,
  warningColor
} from './constants'
import './styles.scss'

interface AlertProps {
  text: string
  onClosePress: Function
  show: boolean
  header?: string | undefined
  btnText?: string | undefined
  showBorderBottom?: boolean
  type?: string
  color?: string
  pressCloseOnOutsideClick?: boolean
  alertStyles?: object
  headerStyles?: object
  textStyles?: object
  buttonStyles?: object
}

const AlertReact = ({
  // text
  header = headerDefault,
  btnText = btnTextDefault,
  text,
  // visuals
  show = false,
  showBorderBottom = true,
  type,
  color,
  // functions
  onClosePress,
  pressCloseOnOutsideClick = true,
  // styles
  alertStyles = {},
  headerStyles = {},
  textStyles = {},
  buttonStyles = {}
}: AlertProps) => {
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
    // Add event listener if it is shown
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
    if (color) {
      return color
    } else if (type === 'error') return errorColor
    else if (type === 'success') return successColor
    else if (type === 'warning') return warningColor
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
        <div role='alert'>
          <div className='backdrop' />
          <div className='alert-main' style={getAlertStyle()}>
            <h3 className='alert-header' style={headerStyles}>
              {header}
            </h3>
            <p className='alert-body' style={textStyles}>
              {text}
            </p>
            <a
              onClick={() => onClosePressClick()}
              className='alert-button'
              role='button'
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
