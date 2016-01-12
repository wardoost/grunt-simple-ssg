#Personal Site

A static site generator build on grunt with boostrap, pjax, modernizr, SEO optimization, ...

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

Edit Gruntfile.js and the source files to your needs and run grunt. This setup requires MAMP and is configured for OS X.
```
grunt
```

*****

##Variables

###Gruntfile.js
- **deployDomain**: Your domain name without trailing slash nor subdomain. Site will be deployed to this server and domain will be used for absolute links
> wardoosterlijnck.be
- **deploySubDir**: Subdirectory where your website will be uploaded to.
> root/
- **deployURL**: Url composed of deployDomain and deploySubDir.
> wardoosterlijnck.be/root/

###example.jade (or other jade file)
- **websiteTitle**: Website title in title case. Derived from project directory name. Logically overwritten in base.jade.
> Static Site Generator
- **pageTitle**: Page title in title case. Derived from filename. Logically overwritten in example.jade.
> Example
- **fileName**: Filename of current page without extension. Do not overwrite.
> example
- **baseUrl**: Relative path with trailing slash. Add the flag 'absolute' to your Grunt command to have absolute paths in al html.
> ../
- **deploySubDir**: DeploySubDir as defined in Gruntfile.js.
> root/
- **deployUrl**: Url to website derived from deployDomain and deploySubDir in Gruntfile.js.
> http://www.wardoosterlijnck.be/root/
- **absoluteUrl**: Absolute url to the current page based on deployUrl from gruntfile.js and filename.
> http://www.wardoosterlijnck.be/root/example-dir/example
- **timeStamp**: Date of today, format: DD/MM/YYYY
> 09/04/2015

*****

##Commands

The default grunt command builds the site and starts a local server.
```
grunt
```

The grunt dev command builds the site and seo and starts a local server.
```
grunt dev
```

The grunt deploy command builds the site and seo and uploads the site with ftp. You need to create a .ftppass file in de root of the grunt project with authentification of your FTP server. More info on the [Grunt FTP deploy task GitHub page](https://github.com/zonak/grunt-ftp-deploy) about this.
```
grunt deploy
```

You can add the flag "absolute" to have absolute paths in your HTML. This is practically only useful when deploying the site.
```
grunt deploy --absolute
```

*****

##Todo
- Implement grunt-uncss
