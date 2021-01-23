import * as ReactDOM from 'react-dom'
import * as React from 'react'
import AlertReact from './index'
import { getQueriesForElement } from '@testing-library/dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import {
  headerDefault,
  btnTextDefault,
  errorColor,
  successColor,
  warningColor
} from './constants'

function renderDom(
  show: boolean,
  text: string,
  header: string | undefined,
  btnText: string | undefined,
  type: string,
  color?: string
) {
  const root = document.createElement('div')
  ReactDOM.render(
    <div>
      <AlertReact
        show={show}
        text={text}
        header={header}
        btnText={btnText}
        type={type}
        color={color}
        onClosePress={() => {}}
      />
    </div>,
    root
  )
  return root
}

describe('Alert tests', () => {
  it('Component exists', () => {
    expect(AlertReact).toBeTruthy()
  })

  const demoText = 'Demo text'

  it('Component defaults are correct', () => {
    const root = renderDom(true, demoText, undefined, undefined, 'success')
    const { getByText } = getQueriesForElement(root)
    expect(getByText(headerDefault)).not.toBeNull()
    expect(getByText(demoText)).not.toBeNull()
    expect(getByText(btnTextDefault)).not.toBeNull()
  })

  it('Setting text value to component works', () => {
    const root = renderDom(
      true,
      demoText,
      'Demo header',
      'Demo button',
      'success'
    )
    const { getByText } = getQueriesForElement(root)
    expect(getByText('Demo header')).not.toBeNull()
    expect(getByText(demoText)).not.toBeNull()
    expect(getByText('Demo button')).not.toBeNull()
  })

  it('Colors are correct', async () => {
    let successRoot = renderDom(
      true,
      demoText,
      'Demo header',
      'Demo button',
      'success'
    )
    const successButton = successRoot.querySelector(
      '.alert-button'
    ) as HTMLElement
    const successColorTest = successButton.style.backgroundColor
    expect(successColorTest).toBe(successColor)

    let errorRoot = renderDom(
      true,
      demoText,
      'Demo header',
      'Demo button',
      'error'
    )
    const errorButton = errorRoot.querySelector('.alert-button') as HTMLElement
    const errorColorTest = errorButton.style.backgroundColor
    expect(errorColorTest).toBe(errorColor)

    let warningRoot = renderDom(
      true,
      demoText,
      'Demo header',
      'Demo button',
      'warning'
    )
    const warningButton = warningRoot.querySelector(
      '.alert-button'
    ) as HTMLElement
    const warningColorTest = warningButton.style.backgroundColor
    expect(warningColorTest).toBe(warningColor)

    const customColor = 'rgb(40, 60, 80)'
    let customRoot = renderDom(
      true,
      demoText,
      'Demo header',
      'Demo button',
      'warning',
      customColor
    )
    const customButton = customRoot.querySelector(
      '.alert-button'
    ) as HTMLElement
    const customColorTest = customButton.style.backgroundColor
    expect(customColorTest).toBe(customColor)
  })

  it('Hide modal on outside click and show it again works', () => {
    let isShow = true
    const component = Enzyme.mount(
      <AlertReact
        show={isShow}
        text={'Demo text'}
        header={'Demo header'}
        btnText={'Demo button'}
        type={'success'}
        pressCloseOnOutsideClick={true}
        onClosePress={() => {}}
      />
    )
    const alert = component.find('.alert-main')
    expect(alert).not.toBeNull()
    document.querySelector('body')?.click()
    expect(alert.length).toBe(1)
    isShow = true
    expect(alert).not.toBeNull()
  })
})
