import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const robots = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/robots" }),
  schema: z.object({
    fileClass: z.string().optional(),
    robot_name: z.string().optional(),
    concept: z.string().optional(),
    cover: z.string().optional(),
    category: z.string().optional(),
    weight: z.string().optional(),
    target_weight: z.string().optional(),
    status: z.string().optional(),
    discontinued_date: z.union([z.string(), z.date()]).transform((v) => {
      if (v instanceof Date) return v.toISOString().slice(0, 10);
      return v;
    }).optional(),
    discontinued_after: z.string().optional(),
    predecessor: z.string().optional(),
    successor: z.string().optional(),
    cad: z.string().optional(),
    weapon_type: z.string().optional(),
    weapon_mass: z.string().optional(),
    weapon_hardware: z.string().optional(),
    weapon_motor: z.string().optional(),
    weapon_drive: z.string().optional(),
    weapon_drum_od: z.string().optional(),
    weapon_drum_bore: z.string().optional(),
    weapon_drum_length: z.string().optional(),
    weapon_drum_bearings: z.string().optional(),
    weapon_drum_shaft: z.string().optional(),
    weapon_tooth_fastener: z.string().optional(),
    battery_voltage: z.string().optional(),
    gearing: z.string().optional(),
    drive_motors: z.string().optional(),
    drive_layout: z.string().optional(),
    wheels: z.string().optional(),
    wheel_pulley_diameter: z.string().optional(),
    armor_material: z.string().optional(),
    wedge_specs: z.string().optional(),
    receiver: z.string().optional(),
  }).passthrough(),
});

const components = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/components" }),
  schema: z.object({
    title: z.string().optional(),
    source: z.string().optional(),
    author: z.union([z.string(), z.array(z.string())]).optional().nullable(),
    published: z.string().optional().nullable(),
    created: z.coerce.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    main_image: z.string().optional().nullable(),
    price: z.string().optional(),
  }).passthrough(),
});

export const collections = { robots, components };
