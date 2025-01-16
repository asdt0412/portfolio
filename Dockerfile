FROM php:8.1-apache

# Installer les extensions nécessaires
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Activer le module Apache rewrite (utile pour les frameworks PHP ou URLs propres)
RUN a2enmod rewrite

# Définir le répertoire de travail
WORKDIR /var/www/html
