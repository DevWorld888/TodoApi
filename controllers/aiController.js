import openai from '../config/openai.js';
import Task from '../models/Tasks.js';

export const suggestTasks = async (req, res) => {
  const { prompt, save = false } = req.body;

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
    const taskLines = response
      .trim()
      .split('\n')
      .filter(line => line.trim() !== '');
    if (save) {
      const savedTasks = [];
      for (const line of taskLines) {
        const cleanTitle = line.replace(/^\d+\.\s*/, ''); // Quitar "1. "

        const task = await Task.create({
          title: cleanTitle,
          user: req.user._id,
        });

        savedTasks.push(task);
      }

      res.status(201).json({
        message: 'Tareas generadas y guardadas exitosamente',
        tasks: savedTasks,
      });
    } else {
      return res.status(200).json({
        message: 'Tasks generated (not saved)',
        taskLines,
      });
    }
  } catch (err) {
    console.error('❌ Error al generar tareas con IA:', err.message);
    res.status(500).json({ message: 'Error al generar tareas con IA' });
  }
};
