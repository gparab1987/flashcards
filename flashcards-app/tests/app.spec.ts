import { test, expect } from '@playwright/test';

test.describe('Flashcards App E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('/');
  });

  test('should display the main page with navigation options', async ({ page }) => {
    // Check for the main heading
    await expect(page.getByRole('heading', { name: 'French Flashcards' })).toBeVisible();

    // Check for the welcome message
    await expect(page.getByRole('heading', { name: 'Welcome! Choose an activity:' })).toBeVisible();

    // Check that the main navigation buttons are visible
    await expect(page.getByRole('link', { name: 'Study Mode' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Quiz Mode' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Stats Page' })).toBeVisible();
  });

  test('should navigate to the category selection page', async ({ page }) => {
    // Click the "Study Mode" button
    await page.getByRole('link', { name: 'Study Mode' }).click();

    // Check that we are on the category selection page
    await expect(page).toHaveURL('/study');
    await expect(page.getByRole('heading', { name: 'Study Mode' })).toBeVisible();

    // Check that the categories are displayed
    await expect(page.getByRole('link', { name: 'Animals' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Food' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Verbs' })).toBeVisible();
  });

  test('should allow a full study session with navigation', async ({ page }) => {
    // Navigate to the study mode and select the "Animals" category
    await page.getByRole('link', { name: 'Study Mode' }).click();
    await page.getByRole('link', { name: 'Animals' }).click();

    // --- On the Flashcard Page ---
    await expect(page).toHaveURL('/study/animals');

    // Check for the category title and initial card counter
    await expect(page.getByRole('heading', { name: 'Studying: Animals' })).toBeVisible();
    await expect(page.getByText('Card 1 of 6')).toBeVisible();

    // Check the first card's content
    await expect(page.getByText('le chien')).toBeVisible();
    await expect(page.getByText('/lə ʃjɛ̃/')).toBeVisible();

    // Flip the card
    await page.locator('.flashcard-container').click();
    await expect(page.getByText('the dog')).toBeVisible();

    // Navigate to the next card
    const nextButton = page.getByRole('button', { name: 'Next Card' });
    await nextButton.click();

    // Check the second card's content and counter
    await expect(page.getByText('Card 2 of 6')).toBeVisible();
    await expect(page.getByText('le chat')).toBeVisible();

    // Navigate back to the previous card
    const prevButton = page.getByRole('button', { name: 'Previous Card' });
    await expect(prevButton).toBeEnabled();
    await prevButton.click();

    // Check we are back on the first card
    await expect(page.getByText('Card 1 of 6')).toBeVisible();
    await expect(page.getByText('le chien')).toBeVisible();
    await expect(prevButton).toBeDisabled(); // Previous button should be disabled now
  });
}); 