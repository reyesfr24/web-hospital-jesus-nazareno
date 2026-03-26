import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    categoria: z.enum(['residente-del-mes', 'actividades', 'salud', 'cumpleanos', 'menu']),
    imagen: z.string().optional(),
    destacada: z.boolean().default(false),
  }),
});

export const collections = { noticias };
