from selenium.webdriver import Firefox
from selenium.webdriver.common.proxy import Proxy, ProxyType
from selenium import webdriver
import time, sys
import requests
from stem import Signal
from stem.control import Controller
from selenium.webdriver.firefox.options import Options
from http_request_randomizer.requests.proxy.requestProxy import RequestProxy
req_proxy = RequestProxy() #you may get different number of proxy when  you run this at each time
proxies = req_proxy.get_proxy_list() #this will create proxy list
PROXY = proxies[0].get_address()
webdriver.DesiredCapabilities.FIREFOX['proxy']={
    "httpProxy":PROXY,
    "ftpProxy":PROXY,
    "sslProxy":PROXY,
    
    "proxyType":"MANUAL",
    
}
opts = Options()
opts.set_headless()
assert opts.headless  # Operating in headless mode
from fake_useragent import UserAgent
headers = { 'User-Agent': UserAgent().random }
browser = webdriver.Firefox()
browser.get('https://www.opentextingonline.com/')
phone_form = browser.find_element_by_id('phone')
phone_form.send_keys(sys.argv[1])
time.sleep(1)
i = 1
j = 1
k = sys.argv[1]
while i <= int(sys.argv[2]):
    print(k)
    print(i)
    i += 1
    #msg_form = browser.find_element_by_id('tmessage')
    #msg_form.send_keys(sys.argv[3])
    #button = browser.find_element_by_id('btsend')
    #button2 = browser.find_element_by_id('hideModal')
    #button.click()
    if j < 2:
       time.sleep(10)
       j += 1
       j += 1
       j += 1
    else:
       time.sleep(3)
    #button2.click()
browser.close()
quit()