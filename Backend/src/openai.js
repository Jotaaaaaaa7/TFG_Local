
const express = require('express');
const openai = require('openai');
const router = express.Router();

//* API Key, no se podía subir a Github por seguridad
const { OPENAI_APIKEY } = require('./apiKey');

const openaiInstance = new openai.OpenAI({
  apiKey: OPENAI_APIKEY,
});

//* Ruta y llamada a la API de OpenAI para generar una dieta
router.post('/generateDiet', async (req, res) => {
  const prompt = req.body.prompt;
  const chatCompletion = await openaiInstance.chat.completions.create({
    messages: [
      {
        role: 'system', content: `Actúa como un Nutricionista experto en alimentación
          saludable equilibrada y variada. Por favor, formatea la respuesta con saltos de
          línea y párrafos para que sea fácil de leer.`
      },
      { role: 'user', content: prompt }
    ],
    model: 'gpt-3.5-turbo',
  });
  const response = {
    message: chatCompletion.choices[0]?.message?.content.replace(/\n/g, '<br>'),
    timestamp: new Date().toISOString()
  };
  res.json(response);
  console.log(response);
});


//* Ruta y llamada a la API de OpenAI para generar una receta
router.post('/generateRecipe', async (req, res) => {
  const prompt = req.body.prompt;
  const chatCompletion = await openaiInstance.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Actúa como un Nutricionista experto en alimentación
          saludable equilibrada y variada. Por favor, formatea la respuesta con saltos de
          línea y párrafos para que sea fácil de leer.`,
      },
      { role: 'user', content: prompt }
    ],
    model: 'gpt-3.5-turbo',
  });

  const response = {
    message: chatCompletion.choices[0]?.message?.content,
    timestamp: new Date().toISOString(),
    tokens: chatCompletion.usage.total_tokens
  };

  res.json(response);
  console.log(response.message);
});

//* Ruta y llamada a la API de OpenAI para generar un entrenamiento
router.post('/generateWorkout', async (req, res) => {
  const prompt = req.body.prompt;
  const chatCompletion = await openaiInstance.chat.completions.create({
    messages: [
      { role: 'system', content: 'Actúa como un entrenador personal experto en la creación de rutinas de entrenamiento' },
      { role: 'user', content: prompt }
    ],
    model: 'gpt-3.5-turbo',
  });

  const response = {
    message: chatCompletion.choices[0]?.message?.content,
    timestamp: new Date().toISOString()
  };

  res.json(response);
});


//* Ruta y llamada a la API de OpenAI para utilizar el chatbot
router.post('/useChatBot', async (req, res) => {
  const prompt = req.body.prompt;
  try {
    console.log('Prompt:', prompt);

    const chatCompletion = await openaiInstance.chat.completions.create({
      messages: [
        { role: 'system', content: 'Actúa como un nutricionista experimentado en alimentación y ejercicio' },
        { role: 'user', content: prompt }
      ],
      model: 'gpt-3.5-turbo',
    });

    const response = {
      message: chatCompletion.choices[0]?.message?.content,
      timestamp: new Date().toISOString()
    };
    console.log('Response:', response);

    res.json(response);
  } catch (error) {
    console.error('Error en useChatBot:', error);
    res.status(500).json({ error: 'Error en useChatBot' });
  }
});




module.exports = router;

