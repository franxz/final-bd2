# final-bd2

Proyecto final de la asignatura Base de Datos II (Facultad de Ingeniería de la UNMdP).

## Participantes

- Jessica Miguel
- Franco Martucci

## Comenzar

1. Ejecutar `docker-compose up` en la raíz del proyecto (`sudo docker-compose up` en Linux)
2. Para utilizar Adminer, en el navegar ingresar a `http://localhost:8080`

## Finalizar

- Ejecutar `docker-compose down` (`sudo docker-compose down` en Linux)

## Próximos pasos

### General
- [ ] Ejecutar `npm init` en `/server/node` para comenzar el proyecto de Node.js
- [ ] Definir el tag de node en `/server/node/Dockerfile`
- [ ] Agregar volumen a Postgres en `docker-compose.yml`
- [ ] [Purgar componentes de Tailwind](https://tailwindcss.com/docs/guides/create-react-app#configure-tailwind-to-remove-unused-styles-in-production)

### Frontend
- [ ] Navbar/Content -> Crear componente para sección
- [ ] Revisar estilos en Action.tsx
- [ ] Terminar medidores de consumo
- [ ] Organizar DBDetail.tsx (crear componentes)
- [ ] Agregar paginación a la tabla de resultados (del lado del cliente o del servidor?)
- [ ] Organizar DBDetail.tsx (estructura y estilos)
