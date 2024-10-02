import { z, defineCollection } from 'astro:content';

const mediaEx = [
    {
        id: "le-monde",
        nom: "Le Monde",
        type: 'Journal',
        periodicite: "Quotidien", // aussi Mensuel, Hebdomadaire, Annuel, Triméstriel, Bimestriel, Semestriel
        echelle: 'Nationale',
        anneeFondation: 1944,
        devise: "Le quotidien français de référence",
        revenus: ["Publicité", "Abonnements"]
    },
    {
        id: "france-inter",
        nom: "France Inter",
        type: 'Radio',
        echelle: "Nationale",
    },
    {
        id: "bfm-tv",
        nom: "BFM TV",
        type: 'TV',
        echelle: "Nationale",
    },
    {
        id: "arte",
        nom: "Arte",
        type: 'TV',
        echelle: "Européenne",
        payant: false
    }, 
    {
        id: "tv-tours",
        nom: "TV Tours",
        type: 'TV',
        echelle: "Régionale",
        estPayant: false,
    },
    {
        id: "harvard-business-review",
        nom: "Harvard Business Review",
        type: "Journal",
        periodicite: "Bimestriel",
    },
    {
        id: "atlantico-fr",
        nom: "Atlantico.fr",
        type: "Web",
    }


]

const MediaBaseSchema = z.object({
    id: z.string(),
    nom: z.string(),
    annee_creation: z.number().optional(),
    revenus: z.array(z.enum(["Publicité", "Abonnements", "État"])).optional(),
    id_wikipedia: z.string().optional().describe("L'identifiant wikipedia du média"),
    site_web: z.string().url().optional().describe("Le site web du média"),
    urls_associees: z.array(z.string().url()).optional().describe("Les urls pour lesquelles on voudra afficher les informations sur ce media"),
  });
  
  // Groupe de Presse Écrite.
  const JournalMediaSchema = z.object({
    type: z.literal('Journal'),
    periodicite: z.enum(['Quotidien', 'Hebdomadaire', 'Mensuel', 'Annuel']).optional(),
    echelle: z.enum(['Locale', 'Nationale', 'Internationale']).optional(),
    devise: z.string().optional(),
  });
  
  const RadioMediaSchema = z.object({
    type: z.literal('Radio'),
    echelle: z.enum(['Locale', 'Nationale', 'Internationale']).optional(),
  });
  
  const TVMediaSchema = z.object({
    type: z.literal('TV'),
    echelle: z.enum(['Locale', 'Nationale', 'Internationale']).optional(),
  });
  
  const WebMediaSchema = z.object({
    type: z.literal('Web'),
    site_web: z.string().url(),
  });

  export const MediaSchema = (z.discriminatedUnion("type", [
    JournalMediaSchema.merge(MediaBaseSchema),
    RadioMediaSchema.merge(MediaBaseSchema),
    TVMediaSchema.merge(MediaBaseSchema),
    WebMediaSchema.merge(MediaBaseSchema),
  ]))
   
  const media = defineCollection({
    type: 'data',
    schema: MediaSchema,
  });


  

export const collections = {
    'media': media,
};
