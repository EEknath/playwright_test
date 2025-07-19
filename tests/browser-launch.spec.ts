import {test, expect, Page, chromium} from '@playwright/test';

test('launch browser', ( async ({page}) => {
    const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const redirect = await context.newPage();
    await redirect.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=763039729888&hvpos=&hvnetw=g&hvrand=2347200050426688244&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061909&hvtargid=kwd-64107830&hydadcr=14452_2423443&gad_source=1');
}))
