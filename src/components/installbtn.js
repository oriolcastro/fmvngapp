import React, { Component } from 'react'
import { FontIcon } from 'react-md'

class InstallBtn extends Component {
  constructor(props) {
    super(props)
    this.state = { installIcon: true }
    this.toogleInstallIcon = this.toogleInstallIcon.bind(this)
  }

  toogleInstallIcon() {
    this.setState(prevState => ({
      installIcon: !prevState.installIcon,
    }))
  }

  componentDidMount() {
    let deferredPrompt

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()

      deferredPrompt = e
      this.toogleInstallIcon()
    })

    btnInstall.addEventListener('click', e => {
      this.toogleInstallIcon()
      deferredPrompt.prompt()

      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')
        } else {
          console.log('USer dismissed the A2HS prompt')
        }
        deferredPrompt = null
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.installIcon && <FontIcon id="btnInstall">home</FontIcon>}
      </div>
    )
  }
}

export default InstallBtn
