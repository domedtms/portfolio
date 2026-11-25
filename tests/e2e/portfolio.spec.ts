import { expect, test } from '@playwright/test'

test.describe('Portfolio smoke tests', () => {
  test('renders the application without runtime errors', async ({ page }) => {
    const errors: string[] = []

    page.on('pageerror', (error) => {
      errors.push(error.message)
    })

    const response = await page.goto('/')

    expect(response?.ok()).toBe(true)

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.locator('#projects')).toBeAttached()
    await expect(page.locator('#contact')).toBeAttached()

    expect(errors).toEqual([])
  })

  test('supports navigation to the projects section', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: 'Explore Projects', exact: true }).click()

    await expect(page).toHaveURL(/#projects$/)
    await expect(page.locator('#projects')).toBeVisible()
  })
})
