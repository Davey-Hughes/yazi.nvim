import { flavors } from "@catppuccin/palette"
import { rgbify } from "@tui-sandbox/library/dist/src/client/color-utilities"

const darkTheme = flavors.macchiato.colors

export const yaziText = "NOR"

export function isFileSelectedInYazi(text: string): void {
  cy.contains(text).should(
    "have.css",
    "background-color",
    rgbify(darkTheme.text.rgb),
  )
}

export function isDirectorySelectedInYazi(text: string): void {
  cy.contains(text).should(
    "have.css",
    "background-color",
    rgbify(darkTheme.blue.rgb),
  )
}

export function isFileNotSelectedInYazi(text: string): void {
  cy.contains(text).should(
    "have.css",
    "background-color",
    rgbify(darkTheme.base.rgb),
  )
}
