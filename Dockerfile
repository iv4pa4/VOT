FROM php:apache

# Install the mysqli extension
RUN docker-php-ext-install mysqli
# Copy the PHP program into the container
COPY . /var/www/html

# Set the working directory
WORKDIR /var/www/html