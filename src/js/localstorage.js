import '.././styles.css'
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
};
const STORAGE_THEME_KEY = 'theme'
const refs = {
  $body: document.querySelector('body'),
  $themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
  $menuList: document.querySelector('.js-menu')
}
export{
  Theme, STORAGE_THEME_KEY, refs
}

