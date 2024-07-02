-- Todas estas operaciones las he realizado desde MySQL Workbench, pero al ejecutar este script
-- podemos crear toda la estructura de tablas para la base de datos.

CREATE TABLE Categorias_Alimentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL
);

CREATE TABLE Alimentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  prot DECIMAL(10, 2),
  carbs DECIMAL(10, 2),
  fat DECIMAL(10, 2),
  kcal DECIMAL(10, 2),
  precio DECIMAL(10, 2),
  isVegan BOOLEAN,
  GlutenFree BOOLEAN,
  unidad INT DEFAULT NULL,
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES Categorias_Alimentos(id)
);

CREATE TABLE Recetas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  foto TEXT,
  prot DECIMAL(10, 2),
  carbs DECIMAL(10, 2),
  fat DECIMAL(10, 2),
  kcal DECIMAL(10, 2),
  precio DECIMAL(10, 2),
  isVegan BOOLEAN,
  GlutenFree BOOLEAN,
  missing_fields BOOLEAN DEFAULT FALSE
);

CREATE TABLE Ingredientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_alimento INT NOT NULL,
  id_receta INT NOT NULL,
  cantidad INT NOT NULL,
  FOREIGN KEY (id_alimento) REFERENCES Alimentos(id),
  FOREIGN KEY (id_receta) REFERENCES Recetas(id)
);

CREATE TABLE Comidas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  prot DECIMAL(10, 2),
  carbs DECIMAL(10, 2),
  fat DECIMAL(10, 2),
  kcal DECIMAL(10, 2),
  precio DECIMAL(10, 2),
  tipo VARCHAR(255),
  isVegan BOOLEAN,
  GlutenFree BOOLEAN,
  missing_fields BOOLEAN DEFAULT FALSE
);

CREATE TABLE Comidas_Items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comida_id INT NOT NULL,
  alimento_id INT,
  receta_id INT,
  cantidad_alimento INT,
  FOREIGN KEY (comida_id) REFERENCES Comidas(id),
  FOREIGN KEY (alimento_id) REFERENCES Alimentos(id),
  FOREIGN KEY (receta_id) REFERENCES Recetas(id)
);

CREATE TABLE Menu_Semanal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL
);

CREATE TABLE Dias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  prot DECIMAL(10, 2),
  carbs DECIMAL(10, 2),
  fat DECIMAL(10, 2),
  kcal DECIMAL(10, 2),
  precio DECIMAL(10, 2),
  isVegan BOOLEAN,
  GlutenFree BOOLEAN,
  missing_fields BOOLEAN DEFAULT FALSE
);

CREATE TABLE Menu_Dias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  menu_id INT NOT NULL,
  dia_id INT NOT NULL,
  FOREIGN KEY (menu_id) REFERENCES Menu_Semanal(id),
  FOREIGN KEY (dia_id) REFERENCES Dias(id)
);

CREATE TABLE Dias_Comidas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  dia_id INT NOT NULL,
  comida_id INT NOT NULL,
  FOREIGN KEY (dia_id) REFERENCES Dias(id),
  FOREIGN KEY (comida_id) REFERENCES Comidas(id)
);

CREATE TABLE Ejercicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  nivel VARCHAR(255),
  video TEXT,
  equipo VARCHAR(255),
  missing_muscles BOOLEAN DEFAULT FALSE
);

CREATE TABLE Grupos_Musculares (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL
);

CREATE TABLE Musculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  id_grupo_muscular INT ,
  FOREIGN KEY (id_grupo_muscular) REFERENCES Grupos_Musculares(id)
);

CREATE TABLE Ejercicios_Musculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_ejercicio INT NOT NULL,
  id_musculo INT NOT NULL,
  FOREIGN KEY (id_ejercicio) REFERENCES Ejercicios(id),
  FOREIGN KEY (id_musculo) REFERENCES Musculos(id)
);

CREATE TABLE Rutinas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  missing_fields BOOLEAN DEFAULT FALSE
);

CREATE TABLE Rutinas_Ejercicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_rutina INT NOT NULL,
  id_ejercicio INT NOT NULL,
  series INT NOT NULL,
  repeticiones INT NOT NULL,
  comment VARCHAR(255) default null,
  FOREIGN KEY (id_rutina) REFERENCES Rutinas(id),
  FOREIGN KEY (id_ejercicio) REFERENCES Ejercicios(id)
);

CREATE TABLE Rutinas_Semana (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL
);

CREATE TABLE RutinasSemana_Rutinas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_rutina INT NOT NULL,
  id_rutina_semana INT NOT NULL,
  FOREIGN KEY (id_rutina) REFERENCES Rutinas(id),
  FOREIGN KEY (id_rutina_semana) REFERENCES Rutinas_Semana(id)
);