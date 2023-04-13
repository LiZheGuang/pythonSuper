import asyncio
from pyppeteer import launch

async def main():
    browser = await launch(headless=True)
    page = await browser.newPage()
    await page.goto('http://www.baidu.com')
    await page.emulateMedia('screen')
    html = await page.evaluate('() => { return document.querySelector("#wrapper").innerHTML; }')
    await page.pdf({
        'path': 'example.pdf',
        'format': 'A4',
        'printBackground': True
    })
    await browser.close()

asyncio.get_event_loop().run_until_complete(main())