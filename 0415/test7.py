# 爬取图片的demo
import time
from random import randint
from selenium import webdriver
from bs4 import BeautifulSoup
import requests
import urllib

url = 'https://mobile.alphacoders.com/by-device/800/iPhone-14-Wallpapers'

browser = webdriver.Chrome()
browser.get(url)
html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')

# 模拟浏览器行为，向下滚动至页面底部，让所有异步加载的图片都加载完成
browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')

# 获取所有图片标签
img_tags = soup.find_all('img', {'class': 'img-responsive'})
print(img_tags)
headers = {
	'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
}
# 提取所有图片的URL
for img in img_tags:
    img_url = img['src']

    # 下载图片
    filename = img_url.split("/")[-1]
    # time.sleep(randint(1, 3))
    req = urllib.request.Request(url=img_url, headers=headers)
    # urllib.request.urlretrieve(img_url, filename)
    with urllib.request.urlopen(req) as response:
        with open('./images/' + filename, 'wb') as out_file:
            out_file.write(response.read())

browser.quit()