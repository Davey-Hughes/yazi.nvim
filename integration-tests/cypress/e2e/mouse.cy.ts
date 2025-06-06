describe("mouse support", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("can close the YaziFloatingWindow when clicked outside of it", () => {
    cy.startNeovim().then((nvim) => {
      // wait until text on the start screen is visible
      cy.contains("If you see this text, Neovim is ready!")

      // open yazi
      cy.typeIntoTerminal("{upArrow}")

      // yazi should be showing adjacent files
      cy.contains(nvim.dir.contents["file2.txt"].name)

      // click outside of the yazi floating window. This should close it
      // because it's designed to close when it loses focus
      cy.contains("If you see this text, Neovim is ready!").click()

      // clicking outside of the yazi window should close it, after which
      // Neovim should not be showing adjacent files
      cy.contains(nvim.dir.contents["file2.txt"].name).should("not.exist")
    })
  })
})
