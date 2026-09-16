# Brothers Coffee

Landing page de primera versión para Brothers Coffee, exportadora de café verde y
tostado de especialidad de Marcala, Honduras.

## Tecnologías

- React
- TypeScript
- Vite
- Lucide Icons

## Desarrollo local (Docker)

No hace falta instalar Node ni npm en la laptop. Con Docker Desktop:

```bash
docker compose up --build dev
```

Abre [http://localhost:5173](http://localhost:5173). El código se recarga al guardar.

Para servir la build de producción:

```bash
docker compose --profile prod up --build app
```

Abre [http://localhost:8080](http://localhost:8080).

Si cambias dependencias en `package.json`, vuelve a levantar con `--build` para reinstalar paquetes.

## Desarrollo local (npm)

```bash
npm install
npm run dev
```

La aplicación estará disponible en la dirección que muestra Vite en la terminal.

## Validación

Con Docker:

```bash
docker compose run --rm --no-deps --entrypoint sh dev -c "npm run lint && npm run build"
```

Con npm:

```bash
npm run lint
npm run build
```


## Nota de contenido

Esta versión evita afirmar certificaciones, puntajes, volúmenes o datos comerciales
no confirmados. El formulario prepara y copia una solicitud; debe conectarse a un
correo, CRM o WhatsApp cuando Brothers Coffee defina su canal comercial oficial.
