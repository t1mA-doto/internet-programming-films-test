import { test, expect } from '@playwright/test'

test.describe('Детали фильма', () => {
  test('показывает детали', async ({ page }) => {
    await page.goto('/movie/Побег%20из%20Шоушенка')
    await expect(page.getByRole('heading', { name: 'Побег из Шоушенка' })).toBeVisible()
    await expect(page.getByText('Драма')).toBeVisible()
  })

  test('обрабатывает несуществующий фильм', async ({ page }) => {
    await page.goto('/movie/НеНайден')
    await expect(page.getByRole('heading', { name: 'Фильм не найден' })).toBeVisible()
  })
})
