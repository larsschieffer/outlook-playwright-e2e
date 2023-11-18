import { test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page, context }) => {
  const username = process.env.USERNAME;

  if (!username) {
    console.error("Username is missing. See README.md how to set value");
    return;
  }

  const password = process.env.PASSWORD;
  if (!password) {
    console.error("Password is missing. See README.md how to set value");
    return;
  }

  // Go to login page
  await page.goto("https://outlook.live.com/");

  // Go to sign in
  const [loginPage] = await Promise.all([
    context.waitForEvent("page"),
    page.getByLabel("Sign in about Microsoft").click(),
  ]);

  // Bring focus to the new page
  await loginPage.bringToFront();

  // Fill username
  await loginPage.getByPlaceholder("Email, phone, or Skype").fill(username);
  await loginPage.getByRole("button", { name: "Next" }).click();

  // Insert password
  await loginPage.getByPlaceholder("Password").fill(password);
  await loginPage.getByRole("button", { name: "Sign in" }).click();

  // Answer "Stay signed in?"
  await loginPage.getByRole("button", { name: "No" }).click();

  await loginPage.context().storageState({ path: authFile });
});
