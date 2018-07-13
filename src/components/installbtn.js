import React, { Component } from 'react'
import { FontIcon, Button } from 'react-md'

class InstallBtn extends Component {
  constructor(props) {
    super(props)
    this.state = { installIcon: false, event: null }
    this.toogleInstallIcon = this.toogleInstallIcon.bind(this)
    this.showInstallPrompt = this.showInstallPrompt.bind(this)
  }

  toogleInstallIcon() {
    this.setState(prevState => ({
      installIcon: !prevState.installIcon,
    }))
  }

  showInstallPrompt(deferredPrompt) {
    // hide our user interface that shows our A2HS button
    this.toogleInstallIcon()
    // Show the prompt
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt')
      } else {
        console.log('USer dismissed the A2HS prompt')
      }
      deferredPrompt = null
    })
  }

  componentDidMount() {
    let deferredPrompt

    window.addEventListener('beforeinstallprompt', e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      console.log(deferredPrompt)
      this.event = e
      this.toogleInstallIcon()
    })
  }

  render() {
    return (
      <div>
        {this.state.installIcon && (
          <div className="installbtn--wrapper">
            <span className="installbtn--text">Instalar</span>
            <Button
              icon
              secondary
              id="btnInstall"
              onClick={this.showInstallPrompt}
            >
              cloud_download
            </Button>
          </div>
        )}
      </div>
    )
  }
}

export default InstallBtn
