# Hexo Theme Clean

![](https://i.imgur.com/mHzxF6j.png)

This is a theme base on [Hexo Clean Blog Theme](https://github.com/klugjo/hexo-theme-clean-blog), and modfy for more feature and coding style.

[Demo](https://blog.lusw.dev)

## Features

- Disqus and Gitalk
- Google Analytics
- Post toc
- MathJax support
- Cover image for posts and pages
- Tags and Categories Support
- Responsive Images
- Light Gallery support
- Code syntax highlighting
- Bootstrap Alert, Card and Label support
- Hexo local search 

## Installation

```
$ git clone https://github.com/luswdev/hexo-theme-clean.git themes/clean
```

Then update your blog's main `_config.yml` to set the theme to `clean`:

```
# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: clean
```

## Configuration

### Top Left Label

The top left label is configured in the theme's `_config.yml`. When clicked it will lead to the Home Page.

```
# Title on top left of menu. Leave empty to use main blog title
menu_title: Configurable Title
```

### Home Page cover image

The Home Page cover is configured in the theme's `_config.yml`. It will be the same for all index type pages.

```
# URL of the Home page image
index_cover: /img/home-bg.jpg
```

### Default post title

The default post title (used when no title is specified) is configured in the theme's `_config.yml`.

```
# Default post title
default_post_title: Untitled
```

### MathJax

You can write `LaTeX` code in `Markdown` file and render on post. Just enable in the theme's `_config.yml`.

```
# Enable post mathjax
mathjax:
  enable: true
```

And set mathjax to `true` in the posts front-matter:

```
mathjax: true
---
```

### TOC

We implement TOC and back to top on the TOC menu, which is a dropup menu on the bottom right. Enable it in the theme's `_config.yml`.

```
toc: true
```

### Comments

The comments provider is specified in the theme's `_config.yml`.

```
# Comments. Choose one by filling up the information
comments:
  # Disqus comments
  disqus_shortname: 
  # Gitalk
  gitalk:
    enable: true
    owner: 'luswdev' 
    repo: 'hexo-gitalk-comment'
    oauth:
      accessToken: 'b554e5cfdb57826c448b9b147bc46ccc7a872cfb'    
      clientId: '97c34b7bba491c6a5007'
      clientSecret: '6140d208bae6bbbc69c65e3e332a46d090094fc8'
    admin: 'luswdev'
```

You can too hide the comment in the posts front-matter:

```
comment: false
---
```

### Google Analytics

The Google Analytics Tracking ID is configured in the theme's `_config.yml`.

```
# Google Analytics Tracking ID
google_analytics:
```

### Busuanzi

The Busuanzi is configured in the theme's `_config.yml`.

```
# Busuanzi Staticals
busuanzi:
  enable: true
  cdn: //busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js
  totalTraffic: true
  totalNumberOfvisitors: true 
```

It will render site traffic at footer and post traffic at post meta field.

### Start Year

This will set archives page button group starting year, if not set, it will start at current year.

```
# Archive page start year
start_year: 2018
```

### Social Account

Setup the links to your social pages in the theme's `_config.yml`. Links are in the footer.

```
# Social Accounts
twitter_url:
facebook_url:
github_url: https://github.com/klugjo/hexo-theme-clean-blog
linkedin_url:
mailto:
```

### Author

The post's author is specified in the posts front-matter:

```
author: Klug Jo
---
```

### Post's Cover Image

By default, posts will use the home page cover image. You can specify a custom cover in the front-matter:

```
title: Excerpts
date: 2013-12-25 00:23:23
tags: ["Excertps"]
cover: /assets/contact-bg.jpg
---
```

### Post's Excerpt

This theme does not support traditional excerpts. To show excerpts on the index page, use `subtitle` in the front-matter:

```
title: Excerpts
date: 2013-12-25 00:23:23
tags: ["Excertps"]
subtitle: Standard Excerpts are not supported in Clean Blog but you can use subtitles in the front matter to display text in the index.
---

```

---

## Tags page.

> Follow these steps to add a `tags` page that contains all the tags in your site.

- Create a page named `tags`

```
$ hexo new page "tags"
```

- Edit the newly created page and set page type to `tags` in the front matter.

```
title: All tags
type: "tags"
```

- Add `tags` to the menu in the theme `_config.yml`:

```
# Footer menu
footer_menu:
  Home: /
  Archives: /archives
  Tags: /tags
```

## Categories page.

> Follow these steps to add a `categories` page that contains all the categories in your site.

- Create a page named `categories`

```
$ hexo new page "categories"
```

- Edit the newly created page and set page type to `categories` in the front matter.

```
title: All categories
type: "categories"
```

- Add `Categories` to the menu in the theme `_config.yml`:

```
# Footer menu
footer_menu:
  Home: /
  Archives: /archives
  Categories: /categories
```

## About page.

> Follow these steps to add a `about` page that can write some information about you.

- Create a page named `about`

```
$ hexo new page "about"
```

- Edit the newly created page and set page type to `categories` in the front matter.

```
title: About
type: "about"
```

- Add `Categories` to the menu in the theme `_config.yml`:

```
# Footer menu
footer_menu:
  Home: /
  Archives: /archives
  About: /about
```

## Creator

This theme was created by [Blackrock Digital](https://github.com/BlackrockDigital), adapted for Hexo by [Jonathan Klughertz](http://www.codeblocq.com/) and modfy by [LuSkywalker](https://blog.lusw.dev/)

## License

MIT
