import {Theme, STORAGE_THEME_KEY, refs} from './localStorage.js'
const {$body, $themeSwitchToggle} = refs
$themeSwitchToggle.addEventListener('change',handleThemeSwitchToggle )
function handleThemeSwitchToggle({target}){

  const {checked}=target

  checked
  ?$body.classList.replace(Theme.LIGHT, Theme.DARK)
  :$body.classList.replace(Theme.DARK, Theme.LIGHT)

  const theme=checked?Theme.DARK:Theme.LIGHT
  localStorage.setItem(STORAGE_THEME_KEY,theme)
}
function getCurrentTheme(){
  const selectedTheme = localStorage.getItem(STORAGE_THEME_KEY)
  if(selectedTheme){
    $themeSwitchToggle.checked=selectedTheme===Theme.DARK
  }
  return selectedTheme?selectedTheme:Theme.LIGHT
}
function initTheme(){
  const theme=getCurrentTheme()
  $body.classList.add(theme)
}
initTheme()