import { test, expect } from '@playwright/test'

test.describe('Навигация', () => {
  test('переходит на movies по умолчанию', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL(/movies/)
  })

  test('router-link работает', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Список фильмов' }).click()
    await expect(page).toHaveURL(/movies/)
  })
})
