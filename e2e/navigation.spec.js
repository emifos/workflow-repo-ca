import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("navigates to the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("http://localhost:5500/");
  });

  test("waits for the venue list to load", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#venue-container")).toBeVisible();
  });

  test("clicks the first venue, verify that venue details are displayed", async ({
    page,
  }) => {
    await page.goto("/");
    const venueList = page.locator("#venue-container");
    const firstVenue = venueList.locator("a").first();
    await firstVenue.click();

    await expect(page.locator("h1")).toContainText("Venue details:");
  });
});
