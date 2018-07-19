import React, { Component } from 'react'
import { Button } from 'react-md'

class InstallBtn extends Component {
  constructor(props) {
    super(props)
    this.state = { installIcon: false }
    this.toogleInstallIcon = this.toogleInstallIcon.bind(this)
  }

  toogleInstallIcon() {
    this.setState(prevState => ({
      installIcon: !prevState.installIcon,
    }))
  }

  // showInstallPrompt(deferredPrompt) {
  //   // hide our user interface that shows our A2HS button
  //   this.toogleInstallIcon()
  //   // Show the prompt
  //   deferredPrompt.prompt()
  //   // Wait for the user to respond to the prompt
  //   deferredPrompt.userChoice.then(choiceResult => {
  //     if (choiceResult.outcome === 'accepted') {
  //       console.log('User accepted the A2HS prompt')
  //     } else {
  //       console.log('USer dismissed the A2HS prompt')
  //     }
  //     deferredPrompt = null
  //   })
  // }

  componentDidMount() {
    let deferredPrompt

    window.addEventListener('beforeinstallprompt', e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      console.log(e.platforms)
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      this.toogleInstallIcon()
    })
    document.getElementById('btnInstall').addEventListener('click', e => {
      // hide our user interface that shows our A2HS button
      this.toogleInstallIcon() // Show the prompt
      deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')
        } else {
          console.log('User dismissed the A2HS prompt')
        }
        deferredPrompt = null
      })
    })
  }

  render() {
    return (
      <div
        className={
          this.state.installIcon
            ? 'installbtn--wrapperShow'
            : 'installbtn--wrapperHide'
        }
        id="btnInstall"
      >
        <span className="installbtn--text">Instalar</span>
        <Button icon secondary>
          cloud_download
        </Button>
      </div>
    )
  }
}

export default InstallBtn
