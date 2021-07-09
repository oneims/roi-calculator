// TODO -- Refactor Styles

import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    primary: "#818cf8",
    secondary: "#111827",
    headingColor: "#111827",
    bodyColor: "#4b505a",
    purple: "#a855f7",
    red: "#ec4899",
    orange: "#fb923c",
    green: "#4ade80",
    dark: "#111827",
    white: "#fff",
    lightGray: "#eee",
    silver: "#6b7280",
    gray: "#6b7280",
    primaryGradient:
      "linear-gradient(140deg, rgba(129,140,248,1) 0%, rgba(14,165,233,1) 100%)",
    purpleGradient: "linear-gradient(140deg, #a855f7 0%, #6366f1 100%)",
    redGradient: "linear-gradient(140deg, #ec4899 0%, #f43f5e 100%)",
    orangeGradient: "linear-gradient(140deg, #fb923c 0%, #db2777 100%)",
    greenGradient: "linear-gradient(140deg, #4ade80 0%, #06b6d4 100%)",
    sectionLightPrimary: "#06b6d40f",
    sectionLightPurple: "#fbf7ff",
    sectionLightGreen: "#f8fffb",
    sectionWhite: "#fff",
  },
  hoverIntensity: 0.1,
  sectionWhite: "#fff",
  sectionLightPrimary: "#06b6d40f",
  defaultBorderRadius: "0.25rem",
  primaryBoxShadow:
    "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
}

export const GlobalStyle = createGlobalStyle`
// $primary_color: #05f;
// $primary_hover: #1d1de8;
// $white: #fff;

body,
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  @media (min-width: 768px) {
    overflow-x: hidden;
  }
  color: #000;
  line-height: 1.5;
  font-weight: 300;
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
  // letter-spacing: -0.04em;
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
    color: #fff !important;
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
  color: #33475b;
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
      border-color: #ffaeaec9;
      background-color: #ffe6e6;
    }
    &-success {
      background-color: #e5f8f6;
      border-color: #7fded2;
    }
  }
}

.json-data {
  background-color: #fdeddc;
  padding: 2rem;
  border-radius: 4px;
  font-weight: 500;
  position: relative;
  border: 2px solid #eee;
  text-align: left;
  line-height: 3;
  min-height: 500px;
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
  background-color: $primary_color;
  color: $white;
  padding: 0.75rem;
  font-size: 1.25rem;
  font-weight: 800;
}

.react-datepicker__month-text--keyboard-selected {
  background-color: $primary_color;
  &:hover {
    background-color: $primary_color !important;
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
  color: $primary_color;
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

`
