import { test, expect } from '@playwright/test'

test.describe('Фильмотека', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('показывает список фильмов', async ({ page }) => {
    await expect(page).toHaveTitle(/route-6lab/)
    await expect(page.getByRole('heading', { name: 'Список фильмов' })).toBeVisible()
    await expect(page.locator('.movie-card')).toHaveCount(4)
  })

  test('поиск фильмов работает', async ({ page }) => {
    await page.fill('input[placeholder*="Поиск"]', 'Побег')
    await expect(page.locator('.movie-card')).toHaveCount(1)
    await expect(page.getByText('Побег из Шоушенка')).toBeVisible()
  })

  test('открывает детали фильма', async ({ page }) => {
    await page.getByText('Тёмный рыцарь').click()
    await expect(page).toHaveURL(/movie\/Тёмный%20рыцарь/)
    await expect(page.getByRole('heading', { name: 'Тёмный рыцарь' })).toBeVisible()
  })
})
