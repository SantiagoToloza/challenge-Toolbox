# Proyecto: Aplicación Full Stack con React, Node.js y Docker

¡Bienvenido a mi proyecto! Este repositorio contiene una aplicación full stack que consta de un frontend construido con **React** y un backend construido con **Node.js** y **Express**. La aplicación está containerizada utilizando **Docker** y orquestada con **Docker Compose**.
Este proyecto cuenta con todo lo solicitado, **incluso con los puntos adicionales**, tanto del back como el front!

---

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Arquitectura](#arquitectura)
- [Prerrequisitos](#prerrequisitos)
- [Instalación y Ejecución](#instalación-y-ejecución)
  - [Configuración del Backend](#configuración-del-backend)
  - [Configuración del Frontend](#configuración-del-frontend)
  - [Ejecutar con Docker Compose](#ejecutar-con-docker-compose)
- [Uso de la Aplicación](#uso-de-la-aplicación)
- [Testing](#testing)
- [Documentación y Recursos](#documentación-y-recursos)
- [Licencia](#licencia)

---

## Descripción del Proyecto

Esta aplicación permite a los usuarios visualizar y filtrar datos de archivos CSV a través de una interfaz web intuitiva. El backend proporciona endpoints para listar archivos disponibles y obtener datos procesados de archivos específicos, mientras que el frontend permite al usuario interactuar con estos datos de manera eficiente.

---

## Características

- **Endpoint GET `/files/list`**: Devuelve una lista de archivos disponibles.
- **Endpoint GET `/files/data`**: Permite obtener datos de archivos CSV procesados, con la opción de filtrar por nombre de archivo usando el query parameter `fileName`.
- **Frontend con React**: Interfaz de usuario que permite visualizar los datos en una tabla y filtrar por nombre de archivo.
- **Gestión de Estado con Redux**: Implementación de Redux para manejar el estado global de la aplicación.
- **Tests Unitarios con Jest**:
  - **Backend**: Pruebas para los endpoints utilizando Mocha y Chai.
  - **Frontend**: Pruebas de componentes y lógica utilizando Jest y React Testing Library.
- **Docker y Docker Compose**: Containerización de la aplicación para facilitar el despliegue y la ejecución.
- **Validación y Estilo de Código**: Uso de StandardJS para mantener un estilo de código consistente.
- **Git y Github**: Se implmento la metodologia de proyecto de **GitFlow** teniendo las siguientes ramás : Main ,Develop como las principales, y las features, feature-docker, feature-frontend y files-data-endpoint.
- A su vez tambien se utilizo la estandarizacion para los commits : feat: Para agregar una nueva funcionalidad.
- refactor: Para cambios en el código que no corrigen errores ni agregan funcionalidades.
- chore: Para tareas menores o de mantenimiento.
- fix: Para corregir errores.

---

## Tecnologías Utilizadas

- **Frontend**:

  - React
  - Redux
  - React Bootstrap
  - Axios
  - Jest
  - React Testing Library

- **Backend**:

  - Node.js (versión 14)
  - Express
  - Axios
  - Mocha y Chai
  - StandardJS

- **DevOps**:

  - Docker
  - Docker Compose

- **README**:
  - [https://readme.so/es/editor](https://readme.so/es/editor)

---

## Arquitectura

![Arquitectura del Proyecto](https://cs1.ssltrust.me/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=567&a=true&file=fullstackflowdiagram.png&t=6u9aC5hCTEhTpT1&scalingup=0)

La aplicación está dividida en dos servicios principales:

1. **Backend**:

   - Proporciona APIs RESTful.
   - Procesa archivos CSV y devuelve datos estructurados en formato JSON.
   - Implementa lógica de negocio y validaciones.

2. **Frontend**:
   - Interfaz de usuario construida con React.
   - Consume las APIs del backend.
   - Permite al usuario visualizar y filtrar datos.

Ambos servicios están containerizados y comunicados a través de una red definida en Docker Compose.

---

## Prerrequisitos

- **Node.js**:

  - Backend: Node.js 14.x
  - Frontend: Node.js 16.x

- **Docker Desktop** instalado:

  - [Descargar Docker Desktop](https://www.docker.com/products/docker-desktop)

- **Git** instalado:
  - [Descargar Git](https://git-scm.com/downloads)

---

## Instalación y Ejecución

### Clonar el Repositorio

```bash
git clone https://github.com/SantiagoToloza/challenge-Toolbox.git

```

### Ejecutar con Docker Compose

Navegar al direction del proyecto

```bash
cd challenge-Toolbox
```

Construye y levanta los contenedores:

```bash
docker-compose up --build
```

Accede a la aplicación en tu navegador:

- Frontend: [http://localhost:3001](http://localhost:3001)
- Backend: [http://localhost:3000](http://localhost:3000)

---

## Uso de la Aplicación

### Visualizar Datos:

- Al cargar la aplicación, se muestran los datos de todos los archivos disponibles.
- Los datos se presentan en una tabla con las columnas: File Name, Text, Number, y Hex.

### Filtrar por Nombre de Archivo:

- Utiliza el campo de entrada en la parte superior para ingresar el nombre de un archivo específico.
- Haz clic en "Filter" para aplicar el filtro.
- La tabla se actualizará para mostrar solo los datos del archivo seleccionado.

---

## Testing

- En front deberia mostrar:

  Fetch a la data ✅

  Filtración del dato por nombre de archivo ✅

  App component✅

- En back End deberia mostrar:

  Debe retornar la lista de archivos procesados✅

  Debe manejar errores correctamente al fallar una petición✅

### Backend

- Se han implementado tests unitarios utilizando Mocha y Chai.
- Los tests cubren los endpoints `/files/list` y `/files/data`, incluyendo casos con parámetros válidos e inválidos.

Ejecutar los tests del backend:

```bash
cd backend
npm test
```

### Frontend

- Los tests del frontend se han implementado con Jest y React Testing Library.
- Se cubren pruebas de renderizado de componentes, interacción con el usuario y lógica de filtrado.

Ejecutar los tests del frontend:

```bash
cd frontend
npm test
```

---

## Documentación y Recursos

Durante el desarrollo de este proyecto, he consultado y aprendido de diversos recursos para asegurar la calidad y funcionalidad de la aplicación.

### Recursos Utilizados

**Documentación Oficial**:

- [Documentacion brindada por ToolBox - Swagger](https://echo-serv.tbxnet.com/explorer/#/Secret)
- [React Documentation](https://reactjs.org/)
- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Express Documentation](https://expressjs.com/)
- [Docker Documentation](https://docs.docker.com/)

**Tutoriales y Videos**:

- [Learn React Redux in 30 Minutes](https://www.youtube.com/watch?v=drPK9sznPDc)
- [Docker base ](https://craftech.io/) - Recibí capacitacion por parte de Craftech y a su vez ya contaba con experiencia y el modelo de implementación
- [Testing React Applications with Jest](https://www.youtube.com)
- [Node.js Express Crash Course](https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/) -[Redux Toolkit](https://www.youtube.com/watch?v=A8gd1EWOCyA)

**Artículos y Blogs**:

- [Understanding React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
- [Implementing Redux in React Applications](https://dev.to/khriztianmoreno/redux-explicado-de-manera-simple-y-sucinta-para-los-desarrolladores-de-react-2kl2)

### Aprendizajes y Retos

**Integración de Redux**:

- Implementar Redux en la aplicación me permitió manejar el estado de forma centralizada, mejorando la gestión de datos y la escalabilidad del frontend.
- Redux desde cero - ¡Primeros pasos e introducción a Redux en español! (FullStack Bootcamp - minuto 4:17): [Redux desde cero - ¡Primeros pasos e introducción a Redux en español! (FullStack Bootcamp)](https://www.youtube.com/watch?v=QEsukdXFxxs)

**Testing**:

- Aprendí a escribir tests unitarios efectivos tanto para el backend como para el frontend, lo que aumentó la confiabilidad del código.

- Utilice el un blog de medium que detalla correctamente y facilmente como hacer la implentación [MOCHA Y CHAI](https://medium.com/kanssfer-consulting/testing-expressjs-rest-api-with-mocha-and-chai-90bf4178f15e)
- Artículo útil: [Nodejs Testing con Jest y Supertest](https://www.youtube.com/watch?v=lZJ1mar_znk)
- [Introducción a Unit Testing en React con Jestt](https://www.youtube.com/watch?v=n5qbzhZUMsY)

**Dockerización de la Aplicación**:

- Containerizar la aplicación con Docker simplificó el proceso y me garantizó la consistencia entre entornos.
- Tutorial seguido: [Docker compose: running frontend and backend on own containers](https://www.youtube.com/watch?v=dWnxzX_cQGw)

---

## Licencia

Este proyecto está bajo la Licencia . Consulta el archivo LICENSE para más detalles.

---

## Contacto

Autor: [Santiago Toloza](https://santiagotoloza.netlify.app/?v=Q2FtaWxh)  
Email: santiago.b.toloza@gmail.com  
GitHub: [santiagotoloza](https://github.com/santiagotoloza)
