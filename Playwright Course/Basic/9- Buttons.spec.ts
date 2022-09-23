/* Check the checkbox
await page.locator('#agree').check();

// Assert the checked state
expect(await page.locator('#agree').isChecked()).toBeTruthy()

// Uncheck by input <label>.
await page.locator('#subscribe-label').uncheck();

// Select the radio button
await page.locator('text=XL').check(); 

// Single selection matching the label
await page.locator('select#colors').selectOption({ label: 'Blue' });

// Multiple selected items
await page.locator('select#colors').selectOption(['red', 'green', 'blue']); */