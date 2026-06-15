const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API - Trabajo Práctico Backend/Frontend',
        description: 'API para gestión de Socios, Transacciones, Empleados y Publicaciones',
        version: '1.0.0'
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http'],
    tags: [
        { name: 'Socios', description: 'Operaciones con socios' },
        { name: 'Transacciones', description: 'Operaciones con transacciones/log' },
        { name: 'Empleados', description: 'Operaciones con empleados' },
        { name: 'Publicaciones', description: 'Operaciones con publicaciones' }
    ],
    definitions: {
        Socio: {
            nombre: 'Juan',
            apellido: 'Pérez',
            foto: 'data:image/png;base64,iVBORw0KGgo...',
            dni: '12345678',
            numeroSocio: 1001,
            activo: true
        },
        Transaccion: {
            IdiomaOrigen: 'es',
            TextoOrigen: 10,
            IdiomaDestino: 'en',
            TextoDestino: 10,
            emailCliente: 'cliente@email.com'
        },
        Empleado: {
            apellido: 'García',
            nombre: 'María',
            dni: '87654321',
            email: 'maria@empresa.com'
        },
        Publicacion: {
            Titulo: 'Mi primera publicación',
            Contenido: 'Contenido de ejemplo...',
            ImagenAsociada: 'data:image/png;base64,...',
            fechaPublicacion: '2024-06-14',
            vigente: true,
            empleadoId: 1
        }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('✅ Documentación Swagger generada en', outputFile);
});