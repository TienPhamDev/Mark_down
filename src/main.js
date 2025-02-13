import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import iconMenu from '/icon-menu.svg'
import { setupCounter } from './counter.js'
import logo from '/logo.svg';
document.querySelector('#app').innerHTML = `
  <div>
    <img src =${logo}>
  </div>
`

setupCounter(document.querySelector('#counter'))
