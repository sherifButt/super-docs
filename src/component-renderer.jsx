import React from 'react'
/**
 *  Default Wrapper
 * 
 * @param {Object} props  - props 
 * @returns  {React.Component} - React Component
 * 
 */
const DefaultWrapper = (props) => (
  <div>{props.children}</div>
)

/**
 * Component Renderer
 * 
 * @class ComponentRenderer
 * @extends {React.Component}
 *  @param {Object} props  - props
 * @returns  {React.Component} - React Component
 * 
 */
class ComponentRenderer extends React.Component {
  constructor(props) {
    super(props)
    this.Wrapper = window._CustomWrapper || DefaultWrapper
    this.state = {
      hasError: false,
      error: null,
    }
  }

  componentDidCatch(error) {
    console.log(error.message)
  }
  
  render() {
    const { children } = this.props
    return (
      <this.Wrapper {...this.props}>
        {children}
      </this.Wrapper>
    )
  }
}

export default ComponentRenderer
