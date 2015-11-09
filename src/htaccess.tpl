# Disable directory indexes
Options -Indexes

# Clean URL's
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^(.*)$ $1.html

# Secure htaccess file
<Files ~ “^.*\.([Hh][Tt][Aa])”>
order allow,deny
deny from all
satisfy all
</Files>

# Error pages
ErrorDocument 401 <%= pathRelativeRoot %>/error/error-401.html
ErrorDocument 403 <%= pathRelativeRoot %>/error/error-403.html
ErrorDocument 404 <%= pathRelativeRoot %>/error/error-404.html
ErrorDocument 500 <%= pathRelativeRoot %>/error/error-500.html