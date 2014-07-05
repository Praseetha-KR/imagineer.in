---
title: Reveal your Terminal’s most used Commands
author: praseetha-kr
date: 2011-09-11
template: article.jade
---

This small piece of code lets you know the top 10 most-used commands in terminal.

```bash
history | awk ‘{print $2}’| sort | uniq -c | sort -rn | head -10
```

We can also do the same using the following code:

```bash
cut -d\  -f 1 ~/.bash_history | sort | uniq -c | sort -rn | head -n 10 | sed ‘s/.*/  &/g’
```