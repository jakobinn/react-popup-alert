import * as ReactDOM from 'react-dom'
import * as React from 'react'
import AlertReact from './index'
import { getQueriesForElement } from '@testing-library/dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
  headerDefault,
  btnTextDefault,
  errorColor,
  successColor,
  warningColor,
  defaultColor
} from './constants'
// import { fireEvent } from '@testing-library/react'
// import sinon from 'sinon'
// import simulant from 'simulant'

function addTestContainerDiv() {
  const divId = 'test-container'
  const div = document.createElement('div')
  div.setAttribute('id', divId)
  document.body.appendChild(div)
  return divId
}

Enzyme.configure({ adapter: new Adapter() })

function renderDom(
  show: boolean,
  text: string,
  header: string | undefined,
  btnText: string | undefined,
  type?: string,
  color?: string,
  showBorderBottom?: boolean,
  onClick?: Function | undefined
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
        onClosePress={onClick !== undefined ? onClick() : () => {}}
        showBorderBottom={showBorderBottom}
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

  it('Component defaults exist', () => {
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
    const successRoot = renderDom(
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

    const errorRoot = renderDom(
      true,
      demoText,
      'Demo header',
      'Demo button',
      'error'
    )
    const errorButton = errorRoot.querySelector('.alert-button') as HTMLElement
    const errorColorTest = errorButton.style.backgroundColor
    expect(errorColorTest).toBe(errorColor)

    const warningRoot = renderDom(
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
    const customRoot = renderDom(
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

    const defaultRoot = renderDom(
      true,
      demoText,
      'Demo header',
      'Demo button',
      ''
    )
    const defaultButton = defaultRoot.querySelector(
      '.alert-button'
    ) as HTMLElement
    const defaultColorTest = defaultButton.style.backgroundColor
    expect(defaultColorTest).toBe(defaultColor)
  })

  it('Hide modal on outside click works', () => {
    const clickFunction = jest.fn()
    const isShow = true
    const testContainerId = addTestContainerDiv()

    const root = Enzyme.mount(
      <AlertReact
        show={isShow}
        text='Demo text'
        header='Demo header'
        btnText='Demo button'
        type='success'
        pressCloseOnOutsideClick={isShow}
        onClosePress={clickFunction}
      />,
      {
        attachTo: document.getElementById(testContainerId)
      }
    )

    // Click function should not have been called
    expect(clickFunction).not.toBeCalled()

    const role = root.find(`[role='alert']`)
    const rootInstanceRole = role.instance() as any
    rootInstanceRole.dispatchEvent(new Event('mousedown', { bubbles: true }))

    const backdrop = root.find(`.backdrop`)
    const rootInstance = backdrop.instance() as any
    rootInstance.dispatchEvent(new Event('mousedown', { bubbles: true }))

    expect(clickFunction).toBeCalled()
  })

  it('Function is not called when component is hidden', () => {
    const clickFunction = jest.fn()
    const isShow = true
    const testContainerId = addTestContainerDiv()

    Enzyme.mount(
      <AlertReact
        show={!isShow}
        text='Demo text'
        header='Demo header'
        btnText='Demo button'
        type='success'
        pressCloseOnOutsideClick={isShow}
        onClosePress={clickFunction}
      />,
      {
        attachTo: document.getElementById(testContainerId)
      }
    )

    expect(clickFunction).not.toBeCalled()
  })

  it('Button press works', async () => {
    const clickFunction = jest.fn()
    const isShow = true

    const root = Enzyme.mount(
      <div>
        <AlertReact
          show={isShow}
          text='dfsdf'
          header='sdfsfd'
          btnText='dsfsdf'
          type='success'
          onClosePress={clickFunction}
        />
      </div>
    )

    // Element found
    expect(root.find('.alert-button')).toHaveLength(1)

    // Press close button, then eventListener should be removed
    root.find('.alert-button').simulate('click')

    // click function is called
    expect(clickFunction).toBeCalledTimes(1)
  })

  it('Not showing border bottom works', () => {
    const root = renderDom(
      true,
      demoText,
      'Demo header',
      'Demo button',
      'success',
      undefined,
      false
    )
    const alert = root.querySelector('.alert-main') as HTMLElement
    const isBorderBottom = alert.style.borderBottom
    expect(isBorderBottom).toBeFalsy()
  })

  it('Component unmount works', () => {
    const isShow = false
    const root = Enzyme.mount(
      <AlertReact
        show={isShow}
        text='Demo text'
        header='Demo header'
        onClosePress={() => {}}
      />
    )

    root.unmount()
    expect(root.exists()).toBe(false)
  })
})

// console.log('outsideDiv: ', outsideDiv)
// .invoke("onMouseDown")(
//   {
//     nativeEvent: {
//       offsetX: 200,
//       offsetY: 180
//     }
//   },
//   9000
// )