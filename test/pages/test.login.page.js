describe("My 1st Record LoginPage", () => {
    it("tests My 1st Record LoginPage", async () => {
      await browser.setWindowSize(811, 629)
      await browser.url("https://the-internet.herokuapp.com/login")
      await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
      await browser.$("#username").click()
      await browser.$("#username").setValue("tomsmith")
      await browser.$("#password").click()
      await browser.$("#password").setValue("SuperSecretPassword!")
      await $('button[type="submit"]').click()
    //   await browser.$("aria/Login").click()
      await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
      await browser.$("//*[@id=\"content\"]/div/a").click()
      await browser.url("https://the-internet.herokuapp.com/login")
    });
  });