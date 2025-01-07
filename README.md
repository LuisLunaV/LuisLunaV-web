
# 0. Creamos el proyecto

 ## npm init -y

# 1. Instalar TypeScript y demás dependencias

## npm i -D typescript @types/node ts-node nodemon rimraf

# 2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
 npx tsc --init --outDir dist/ --rootDir src

# 3. Crear archivo de configuración Nodemon - nodemon.json
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```
# 4. Agregamos en scripts de package.json las siguietes dependencias
```
  "dev": "nodemon",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

# 5. Ejecutar proyecto en modo desarrollo
npm run dev

Fin