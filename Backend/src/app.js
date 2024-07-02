//* Archivo principal app.js

const express = require('express');
const bodyParser = require('body-parser');

//* Importación de las rutas
const CategoriasAlimentosRoutes = require('./routes/Categorias_Alimentos_routes');
const AlimentosRoutes = require('./routes/Alimentos_routes');
const RecetasRoutes = require('./routes/Recetas_routes');
const IngredientesRoutes = require('./routes/Ingredientes_routes');

const MusculosRoutes = require('./routes/Musculos_routes');
const EjerciciosMusculosRoutes = require('./routes/Ejercicios_Musculos_routes');
const GruposMuscularesRoutes = require('./routes/Grupos_Musculares_routes');

const EjerciciosRoutes = require('./routes/Ejercicios_routes');
const RutinasEjerciciosRoutes = require('./routes/Rutinas_Ejercicios_routes');
const RutinasRoutes = require('./routes/Rutinas_routes');

const MenuSemanalRoutes = require('./routes/Menu_Semanal_routes');
const DiasRoutes = require('./routes/Dias_routes');
const MenuDiasRoutes = require('./routes/Menu_Dias_routes');
const ComidasRoutes = require('./routes/Comidas_routes');
const DiasComidasRoutes = require('./routes/Dias_Comidas_routes');
const ComidasItemsRoutes = require('./routes/Comidas_Items_routes');
const RutinasSemanaRoutes = require('./routes/Rutinas_Semana_routes');
const RutinasSemanaRutinasRoutes = require('./routes/RutinasSemana_Rutinas_routes');


require('./relations');

const app = express();

//* Conexión con el Frontend mediante intercambio de recursos de origen cruzado (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});


//* Middleware para parsear el body de las peticiones
app.use(bodyParser.json());

//* Rutas
app.use('/api', CategoriasAlimentosRoutes);
app.use('/api', AlimentosRoutes);
app.use('/api', RecetasRoutes);
app.use('/api', IngredientesRoutes);

app.use('/api', MusculosRoutes);
app.use('/api', EjerciciosMusculosRoutes);
app.use('/api', GruposMuscularesRoutes);
app.use('/api', EjerciciosRoutes);
app.use('/api', RutinasEjerciciosRoutes);
app.use('/api', RutinasRoutes);

app.use('/api', MenuSemanalRoutes);
app.use('/api', DiasRoutes);
app.use('/api', MenuDiasRoutes);
app.use('/api', ComidasRoutes);
app.use('/api', DiasComidasRoutes);
app.use('/api', ComidasItemsRoutes);
app.use('/api', RutinasSemanaRoutes);
app.use('/api', RutinasSemanaRutinasRoutes);

//* Importación de las funciones de AI
const AIfunctionsRoutes = require('./openai');

//* Rutas para las funciones de AI
app.use('/api', AIfunctionsRoutes);

//* Lanzamos el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto: 3000');
});

module.exports = app;