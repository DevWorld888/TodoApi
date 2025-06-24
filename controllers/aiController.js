import openai from '../config/openai.js';

export const suggestTasks = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: 'Prompt is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Eres un asistente que ayuda a organizar tareas personales.',
        },
        {
          role: 'user',
          content: `Sugiere 5 tareas basadas en este contexto: ${prompt}`,
        },
      ],
    });

    const response = completion.choices[0].message.content;
    res.status(200).json({ suggestions: response.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error generating suggestions' });
  }
};
