---
title: Python script to find the current External IP
author: praseetha-kr
date: 2011-09-27
template: article.jade
---

Here is a simple python script for finding your current external IP address.

```python
import httplib 
import string

conn = httplib.HTTPConnection("checkip.dyndns.org") 
conn.request("GET","/index.html")
r1 = conn.getresponse() 
conn.close() 
if r1.status == 200:
   data1 = r1.read() 
else:
   print 'Error connecting to the server!! Check your internet connection'
   exit() 
startstr = string.find(data1,': ')+2 
endstr = string.find(data1,'</b') 
print data1[startstr:endstr]
```