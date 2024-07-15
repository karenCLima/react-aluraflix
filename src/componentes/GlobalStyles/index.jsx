import { createGlobalStyle } from 'styled-components'
import SourceSansBlack from '../../assets/fonts/SourceSans3-Black.ttf'
import SourceSansBold from '../../assets/fonts/SourceSans3-Bold.ttf'
import SourceSansSemiBold from '../../assets/fonts/SourceSans3-SemiBold.ttf'
import RobotoBlack from '../../assets/fonts/Roboto-Black.ttf'
import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf'


const GlobalStyles = createGlobalStyle`
:root{
  --cor-de-fundo: #262626;
  --cor-da-shadow:#2271D1;
  --cor-de-texto: #f5f5f5;
  --cor-de-border:#6BD1FF;
}

@font-face {
  font-family: 'SourceSansBlack';
  src: local('Source Sans Black'), local('SourceSansBlack'), url(${SourceSansBlack});
}
@font-face {
  font-family: 'SourceSansBold';
  src: local('Source Sans Bold'), local('SourceSansBold'), url(${SourceSansBold});
}

@font-face {
  font-family: 'SourceSansSemiBold';
  src: local('Source Sans SemiBold'), local('SourceSansSemiBold'), url(${SourceSansSemiBold});
}

@font-face {
  font-family: 'RobotoBlack';
  src: local('Roboto Black'), local('RobotoBlack'), url(${RobotoBlack});
}

@font-face {
  font-family: 'RobotoRegular';
  src: local('Roboto Regular'), local('RobotoRegular'), url(${RobotoRegular});
}

html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  min-height: 100vh;
  background-color: var(--cor-de-fundo);
}
main {
  display: block;
}
h1 {
  font-size: 16px;
  margin: 0;
}
hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
figure {
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  unicode-bidi: isolate;
}
`

export default GlobalStyles