# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de configuración de la aplicación
COPY server.js .

# Copia el archivo index.html y las carpetas css y js al contenedor
COPY index.html .
COPY css/ ./css
COPY js/ ./js

# Instala Express
RUN npm install express

# Expone el puerto en el contenedor
EXPOSE 3000

# Inicia el servidor
CMD ["node", "server.js"]
