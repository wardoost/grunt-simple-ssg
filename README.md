#Grunt Simple SSG

A static site generator build on grunt with boostrap, jQuery, SEO optimization, ...

*****

##Installation

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [getting started](http://gruntjs.com/getting-started) guide. Open terminal and install Grunt command line interface globally. You may need to use sudo.
```
npm install -g grunt-cli
```

Install Grunt Dependencies.
```
npm install
```

Edit Gruntfile.js and the source files to your needs and run grunt. This setup requires a correctly configured MAMP and is configured for OS X.
```
grunt
```

*****

##Variables

###Gruntfile.js
- **deployDomain**: Your domain name without trailing slash. Site will be deployed to this server and domain will be used for absolute links
- **deploySubDir**: Subdirectory where your website will be uploaded to.
- **deployURL**: Url composed of deployDomain and deploySubDir.

###JADE
- **websiteTitle**: Website title in title case. Derived from project directory name. Logically overwritten in base.jade.
- **pageTitle**: Page title in title case. Derived from filename. Logically overwritten in example.jade.
- **fileName**: Filename of current page without extension. Do not overwrite.
- **baseUrl**: Relative path with trailing slash. Add the flag 'absolute' to your Grunt command to have absolute paths in al html.
- **deploySubDir**: DeploySubDir as defined in Gruntfile.js.
- **deployUrl**: Url to website derived from deployDomain and deploySubDir in Gruntfile.js.
- **absoluteUrl**: Absolute url to the current page based on deployUrl from gruntfile.js and filename.
- **shareImgFound**: Boolean value that detects if you have a social-share.png image.
- **timeStamp**: Date of today, format: DD/MM/YYYY.

*****

##Commands

The default grunt command builds a dev version of your site without minification and starts a local MAMP server.
```
grunt
```

The grunt dev command is the default grunt command.
```
grunt dev
```

The grunt prod command builds a production version of your site with minification and seo and starts a local MAMP server.
```
grunt prod
```

The grunt deploy command builds a production version of your site with minification and seo and uploads the site with ftp. You need to create a .ftppass file in de root of the grunt project with authentification of your FTP server. More info on the [Grunt FTP deploy task GitHub page](https://github.com/zonak/grunt-ftp-deploy) about this.
```
grunt deploy
```

You can add the flag "absolute" to have absolute paths in your HTML. This is practically only useful when deploying the site.
```
grunt deploy --absolute
```

*****

##Todo
- Implement [grunt-uncss](https://github.com/addyosmani/grunt-uncss)
- Implement [grunt-responsive-images](http://grunt-tasks.com/responsive-images/)
- Implement [grunt-iconfont](https://github.com/poppinlp/grunt-iconfont) or [grunt-webfont](https://github.com/sapegin/grunt-webfont)
