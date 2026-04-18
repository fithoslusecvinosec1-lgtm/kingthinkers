const { test, expect } = require('playwright/test');

async function mockKtApi(page) {
  await page.route('**/functions/v1/kt-api**', async (route) => {
    const url = new URL(route.request().url());
    const action = url.searchParams.get('action');

    if (action === 'student-login') {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          student: {
            name: 'Marcus',
            grade: '3',
            class_code: 'TEST-3A',
            xp: 60,
            crowns: 2,
            profile_complete: true,
            skin_id: 'skin-1',
            hair_id: 'hair-1',
            outfit_id: 'outfit-1',
            last_active: new Date().toISOString()
          }
        })
      });
    }

    if (action === 'teacher-login') {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          teacher: {
            id: 'teacher-1',
            username: 'demo',
            name: 'Ms. Demo',
            class_code: 'TEST-3A',
            school: 'KingThinkers Academy'
          },
          token: 'test-token'
        })
      });
    }

    if (action === 'get-roster') {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ roster: [] })
      });
    }

    if (action === 'teacher-mark-mission') {
      return route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    }

    return route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
  });
}

async function loginStudent(page) {
  await mockKtApi(page);
  await page.goto('/kingthinkers-login.html');
  await page.fill('#c0', '1');
  await page.fill('#c1', '2');
  await page.fill('#c2', '3');
  await page.fill('#c3', '4');
  await page.click('#btn-login');
  await page.waitForURL('**/kingthinkers-dashboard.html', { timeout: 10000 });
}

test('student can sign in and reach dashboard', async ({ page }) => {
  await loginStudent(page);
  await expect(page.locator('#next-mission-btn')).toBeVisible();
});

test('student can launch a lesson from dashboard', async ({ page }) => {
  await loginStudent(page);
  await page.click('#next-mission-btn');
  await page.waitForURL('**/lesson-player.html?id=*');
  await expect(page.locator('#lesson-content')).toBeVisible();
});

test('teacher can sign in and reach roster', async ({ page }) => {
  await mockKtApi(page);
  await page.goto('/kingthinkers-teacher-login.html');
  await page.fill('#t-username', 'demo');
  await page.fill('#t-password', 'password123');
  await page.click('#login-btn');
  await page.waitForURL('**/kingthinkers-teacher-roster.html', { timeout: 10000 });
  await expect(page.locator('#roster-list')).toBeVisible();
});
