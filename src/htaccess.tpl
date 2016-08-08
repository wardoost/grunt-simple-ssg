# Disable directory indexes
Options -Indexes

# Redirect www to non-www
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [L,R=301]

# Redirect all domains to one domain
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} !<%= domain %>$ [NC]
RewriteRule ^(.*)$ http://<%= domain %>/$1 [L,R=301]

# Clean URL's
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^(.*)$ $1.html

# Error pages
ErrorDocument 401 <%= pathRelativeRoot %>error/401.html
ErrorDocument 403 <%= pathRelativeRoot %>error/403.html
ErrorDocument 404 <%= pathRelativeRoot %>error/404.html
ErrorDocument 500 <%= pathRelativeRoot %>error/500.html
