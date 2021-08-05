// TODO -- Refactor Styles

import { createGlobalStyle } from "styled-components"

export const Theme = {
  colors: {
    primary: "#05f",
    primaryHover: "#1d1de8",
    secondary: "#2b2b2b",
    secondaryHover: "#000",
    tertiary: "#c14d9a",
    tertiaryHover: "#b13888",
    lightBlue: "#09f",
    white: "#fff",
    silver: "#ccc",
    black: "#000",
    gradientText: "linear-gradient( -70deg,#0055ff,#8dc1fd)",
    darkTeal: "#33475b",
    dark: "#212b36",
    dashboardBackground: "#f5f6f9",
    errorSolid: "#ffe6e6",
    errorBorder: "#ffaeaec9",
    successSolid: "#e5f8f6",
    successBorder: "#7fded2",
  },
}

export const GlobalStyle = createGlobalStyle`
body,
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  @media (min-width: 768px) {
    overflow-x: hidden;
  }
  color: ${Theme.colors.black};
  line-height: 1.5;
  font-weight: 400;
}

a {
  color: ${Theme.colors.primary};
  font-weight: 700;
  &:hover {
    color: ${Theme.colors.primary};
  }
  &.no-styles {
    color: inherit;
    font-weight: inherit;
    &:hover {
      text-decoration: none;
    }
  }
}

.f-400 {
  font-weight: 400;
}

.f-500 {
  font-weight: 500;
}

.f-600 {
  font-weight: 600;
}

.f-700 {
  font-weight: 700;
}

.mw-500 {
  max-width: 500px;
}

.mw-600 {
  max-width: 600px;
}

.mw-700 {
  max-width: 700px;
}

.mw-800 {
  max-width: 800px;
}

.mw-900 {
  max-width: 900px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: 800;
}

.f-600 {
  font-weight: 600;
}

button,
input,
select,
textarea {
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.text-inverted {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul li,
  ol li {
    color: ${Theme.colors.white} !important;
  }
}

.BoxShadowActive {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.05),
    0 10px 30px rgba(0, 0, 0, 0.06);
}

.roi-input {
  font-weight: 600;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.step__one {
  &::before {
    max-width: 25% !important;
    transition-delay: 0.2s;
  }
}

.step__two {
  &::before {
    max-width: 50% !important;
    transition: 0.3s ease;
  }
}

.step__three {
  &::before {
    max-width: 75% !important;
    transition: 0.3s ease;
  }
}

body {
  .disabled {
    filter: grayscale(100);
    opacity: 1;
    pointer-events: none;
    box-shadow: none;
    transition: 0.2s ease;
  }
}

.__react_component_tooltip {
  font-weight: 700;
}
@keyframes rotation {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

// Modal Notification

.modal-backdrop.show.transparent {
  opacity: 0;
}

.modal-backdrop.show.extreme-light {
  opacity: 0.2;
}

.close-button {
  figure {
    margin: 0;
  }
}

.UICloseButton__CloseIcon-sc-1s0n2rw-1 {
  display: block;
  -webkit-box-flex: 1;
  flex-grow: 1;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  cursor: pointer;
  .kmMQRc {
    fill: currentcolor;
    stroke: currentcolor;
    stroke-width: 2;
  }
}

.modal-content {
  border-radius: 0;
  border: none;
}

.modal-notification {
  color: ${Theme.colors.darkTeal};
  &__title {
    font-weight: 700;
  }
  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
  }
  &__body {
    font-size: 0.8rem;
    font-weight: 400;
    border-style: solid;
    border-width: 1px;
    min-height: 60px;
    padding: 8px 20px;
    position: relative;
    text-align: left;
    &-error {
      border-color: ${Theme.colors.errorBorder};
      background-color: ${Theme.colors.errorSolid};
    }
    &-success {
      background-color: ${Theme.colors.successSolid};
      border-color: ${Theme.colors.successBorder};
    }
  }
}

// Date Picker
.react-datepicker-wrapper {
  display: block;
  input {
    align-items: center;
    background-color: white;
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    cursor: default;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 50px;
    outline: 0 !important;
    position: relative;
    transition: all 100ms;
    box-sizing: border-box;
    font-weight: 600;
    padding: 0 0.6rem;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
}

.react-datepicker {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  border: 2px solid #eee;
}

.react-datepicker__month .react-datepicker__month-text,
.react-datepicker__month .react-datepicker__quarter-text {
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 4px;
}

.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.white};
  padding: 0.75rem;
  font-size: 1.25rem;
  font-weight: 800;
}

.react-datepicker__month-text--keyboard-selected {
  background-color: ${Theme.colors.primary};
  &:hover {
    background-color: ${Theme.colors.primary} !important;
  }
}

.react-datepicker__month--disabled,
.react-datepicker__quarter--disabled {
  background-color: #fff !important;
  color: #ccc;
}

.react-datepicker__triangle {
  display: none;
}

.react-datepicker__navigation--previous,
.react-datepicker__navigation--next {
  top: 20px;
}

.no-styles {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
}

.active-link {
  pointer-events: none;
  color: ${Theme.colors.primary};
  > div {
    background-color: rgba(225, 225, 252, 0.74);
    transition: 0.2s ease;
  }
}

// Table
.table {
  tbody {
    font-weight: 400;
  }
}

.table thead th {
  border: none;
}

.table > thead {
  background-color: #f9fafb;
}

.text-info {
  color: #847613;
}

.br-10px {
  border-radius: 10px;
}

.table-responsive {
  background-color: #fff;
  border: 2px solid #eee;
  border-radius: 10px;
  box-shadow: 1px 0 5px RGB(0 0 0/1%);
  .table {
    &:not(.no-min-width) {
      min-width: 1800px;
    }
  }
}

.show-after-768 {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}


// Funnel
.dashboard-funnel {
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
  > div {
    min-width: 700px;
    > div:nth-child(2) {
      > div {
        animation-delay: 0s !important;
        animation-duration: 0.3s !important;
        padding: 1rem 1.5rem;
        position: relative;
      }
    }
    > div:nth-child(1) {
      svg {
        path {
          animation-delay: 0.2s !important;
          animation-duration: 0.4s !important;
        }
      }
    }
  }
}

.text-color-primary {
  color: ${Theme.colors.primary}
}

// Recharts

.recharts-cartesian-axis { 
  font-family: inherit;
  color: #33475b;
  cursor: default;
  font-size: 12px;
  fill: #33475b;
}
.recharts-default-tooltip {
  background-color: #fff;
  border-radius : 4px;
  border: 2px solid #eee !important;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.9;
}

.flex-responsive-container {
  width: 100%;
  @media (min-width: 768px) {
    max-width: 70%;
  }
}

.recharts-pie {
  font-size: 13px;
  font-weight: 600;
}

.recharts-legend-item {
    font-weight: 700;
    font-size: 13px;
    svg {
      border-radius: 6px;
    }
    &-text {
      position: relative;
      top: 1px;
    }
}

.recharts-legend-wrapper {
  bottom: 10px !important;
}

.funnel-info-text {
  display: block;
  font-size: 0.8rem;
  color: #33475b;
  font-weight: 600;
}


.interactive-tip {
  &__wrapper {
    display: flex;
    background-color: #f7f7f7;
    border-radius: 5px;
    border: 1px solid #eee;
    position: absolute;
    top: unset;
    bottom: 0;
    width: 100%;
    left: 50%;
    max-width: 75%;
    transform: translateX(-50%);
    margin-bottom: 1rem;
  }
  &__symbol-wrapper, &__value-wrapper {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: .7rem;
    font-weight: 600;
    color: #34485c;
  }
  &__symbol-wrapper {
    width: 100%;
    cursor: pointer;
    max-width: 25%;
    &:hover {
      background-color: #eee;
    }
    &-left {
      border-right: 2px solid #eee;
    }
    &-right {
      border-left: 2px solid #eee;
    }
  }
  &__value-wrapper {
    width: 100%;
    padding: 0.25rem;
    max-width: 50%;
  }
  &__symbol {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.funnel-button {
  display: none;
}

.interactive-funnel {
  .funnel-button {
    display: block;
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    outline: none;
    border: none;
    background-color: #0055ff;
    border-radius: 4px;
    padding: 0.15rem 1rem;
    font-size: 0.7rem;
    font-weight: 600;
    border: 1px solid #eee;
    color: #fff;
  }
}


`
