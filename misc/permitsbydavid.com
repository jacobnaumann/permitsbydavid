server {
    listen 80;
    listen 443 ssl;
    listen [::]:80;
    listen [::]:443 ssl;

    ssl_certificate /etc/letsencrypt/live/permitsbydavid.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/permitsbydavid.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/permitsbydavid.com/chain.pem;

    root /var/www/permitsbydavid.com/html;
    index index.html index.htm index.nginx-debian.html;

    server_name permitsbydavid.com www.permitsbydavid.com;

    location / {
        try_files $uri $uri/ =404;
    }
}

