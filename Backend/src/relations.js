
//* Importamos los modelos
const Categorias_Alimentos = require('./models/Categorias_Alimentos_model');
const Alimentos = require('./models/Alimentos_model');
const Recetas = require('./models/Recetas_model');
const Ingredientes = require('./models/Ingredientes_model');

const Comidas = require('./models/Comidas_model');
const Comidas_Items = require('./models/Comidas_Items_model');

const Dias = require('./models/Dias_model');
const Dias_Comidas = require('./models/Dias_Comidas_model');

const Menu_Semanal = require('./models/Menu_Semanal_model');
const Menu_Dias = require('./models/Menu_Dias_model');

const Ejercicios = require('./models/Ejercicios_model');
const Rutinas = require('./models/Rutinas_model');
const Rutinas_Ejercicios = require('./models/Rutinas_Ejercicios_model');

const Rutinas_Semana = require('./models/Rutinas_Semana_model');
const RutinasSemana_Rutinas = require('./models/RutinasSemana_Rutinas_model');

const Musculos = require('./models/Musculos_model');
const Grupos_Musculares = require('./models/Grupos_Musculares_model');
const Ejercicios_Musculos = require('./models/Ejercicios_Musculos_model');


//* Definimos las relaciones entre los modelos (Tablas)
Categorias_Alimentos.hasMany(Alimentos, { foreignKey: 'categoria_id' });
Alimentos.belongsTo(Categorias_Alimentos, { foreignKey: 'categoria_id' });

Alimentos.belongsToMany(Recetas, { through: Ingredientes, foreignKey: 'id_alimento', otherKey: 'id_receta' });
Recetas.belongsToMany(Alimentos, { through: Ingredientes, foreignKey: 'id_receta', otherKey: 'id_alimento' });

Grupos_Musculares.hasMany(Musculos, { foreignKey: 'id_grupo_muscular' });
Musculos.belongsTo(Grupos_Musculares, { foreignKey: 'id_grupo_muscular' });

Comidas.hasMany(Comidas_Items, { foreignKey: 'comida_id' });
Comidas_Items.belongsTo(Comidas, { foreignKey: 'comida_id' });
Comidas_Items.belongsTo(Alimentos, { foreignKey: 'alimento_id' });
Comidas_Items.belongsTo(Recetas, { foreignKey: 'receta_id' });

Dias.belongsToMany(Comidas, { through: Dias_Comidas, foreignKey: 'dia_id', otherKey: 'comida_id' });
Comidas.belongsToMany(Dias, { through: Dias_Comidas, foreignKey: 'comida_id', otherKey: 'dia_id' });

Dias.belongsToMany(Menu_Semanal, { through: Menu_Dias, foreignKey: 'dia_id', otherKey: 'menu_id' });
Menu_Semanal.belongsToMany(Dias, { through: Menu_Dias, foreignKey: 'menu_id', otherKey: 'dia_id' });

Rutinas.belongsToMany(Ejercicios, { through: Rutinas_Ejercicios, foreignKey: 'id_rutina', otherKey: 'id_ejercicio' });
Ejercicios.belongsToMany(Rutinas, { through: Rutinas_Ejercicios, foreignKey: 'id_ejercicio', otherKey: 'id_rutina' });


Ejercicios.belongsToMany(Musculos, { through: Ejercicios_Musculos, foreignKey: 'id_ejercicio', otherKey: 'id_musculo' });
Musculos.belongsToMany(Ejercicios, { through: Ejercicios_Musculos, foreignKey: 'id_musculo', otherKey: 'id_ejercicio' });

Rutinas.belongsToMany(Rutinas_Semana, { through: RutinasSemana_Rutinas, foreignKey: 'id_rutina' });
Rutinas_Semana.belongsToMany(Rutinas, { through: RutinasSemana_Rutinas, foreignKey: 'id_rutina_semana' });

module.exports = {
  Alimentos,
  Recetas,
  Ingredientes,
  Menu_Semanal,
  Dias,
  Comidas,
  Comidas_Items,
  Ejercicios,
  Rutinas,
  Rutinas_Ejercicios,
  Rutinas_Semana,
  Musculos,
  Grupos_Musculares,
  Ejercicios_Musculos,
  Categorias_Alimentos,
  Dias_Comidas,
  Menu_Dias,
  RutinasSemana_Rutinas
};