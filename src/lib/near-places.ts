
export interface Places{
    id: number;
    place: string;
    distance: number; // in km
    waysToGetThere: {
        walkingTime?: string; // e.g., '47min'
        driving?: string; // e.g., '6min'
    }
    activities?: string[];
    representativeImage?: string;
}

export const places : Places[] = [
   {
        id: 1,
        place: "Hospedaje Finca Pura",
        representativeImage: "/images/Travel-guide/icono-finca-3d.png",
        activities: ["Hospedaje"],
        distance:0,
        waysToGetThere: {
            walkingTime : '0min',
            driving : '0min'
        }
    },
    {
        id: 2,
        place: "Miel Colibrí",
        activities: ["Tour de la miel", "Apicultura"],
        representativeImage: "/images/Travel-guide/abejita.png",
        distance:2.9,
        waysToGetThere: {
            walkingTime : '47min',
            driving : '6min'
        }
    },
    {
        id: 3,
        activities: ["Hospedaje"],
        place: "Cabaña Colibrí",
        representativeImage: "/images/Travel-guide/casa-3d.png",
        distance:0.8,
        waysToGetThere: {
            walkingTime : '12min',
            driving : '2min'
        }
    },
    {
        id: 4,
        activities: ["Comida típica", "Snacks", "Tour"],
        representativeImage: "/images/Travel-guide/casa-3d.png",
        place: "Rancho turístico La Guaria",
        distance:1.1,
        waysToGetThere: {
            walkingTime : '18min',
            driving : '3min'
        }
    },
    {
        id: 5,
        activities: ["Supermercado", "Comida rápida"],
        place: "Minisúper El Divino Niño",
        representativeImage: "/images/Travel-guide/market-3d.png",
        distance:1.7,
        waysToGetThere: {
            walkingTime : '25min',
            driving : '3min'
        }
    },
    {
        id: 6,
        activities: ["Comida", "Bebidas", "Ambiente"],
        place: "Bar - Restaurante La Guaria",
        representativeImage: "/images/Travel-guide/bar-3d.webp",
        distance:0.6,
        waysToGetThere: {
            walkingTime : '10min', 
        }
    },
     {
        id: 7,
        activities: ["Supermercado", "Comida rápida"],
        representativeImage: "/images/Travel-guide/market-3d.png",
        place: "Minisuper Marbella",
        distance:0.55,
        waysToGetThere: {
            walkingTime : '9min', 
        }
    },
    {
        id: 8,
        activities: ["Religión", "Arquitectura"],
        place: "Iglesia Nuestra Señora del Carmen",
        representativeImage: "/images/Travel-guide/church-3d.png",
        distance:2.2,
        waysToGetThere: {
            walkingTime : '36min',
            driving : '5min'
        }
    },
     {
        id: 9,
        activities: ["Parque", "Recreación"],
        place: "Parque San Francisco",
        representativeImage: "/images/Travel-guide/parque-3d.png",
        distance:3.7,
        waysToGetThere: {
            walkingTime : '58min',
            driving : '8min'
        }
    },
    {
        id: 10,
        activities: ["Alojamiento", "Actividades"],
        place: "Casa Vista Golfo",
        representativeImage: "/images/Travel-guide/casa-2-3d.png",
        distance:2.7,
        waysToGetThere: {
            walkingTime : '43min',
            driving : '6min'
        }
    },
    {
        id: 11,
        activities: ["Comida", "Almuerzos"],
        representativeImage: "/images/Travel-guide/restaurante-3d.png",
        place: "Palenque Río Piedras",
        distance:2.1,
        waysToGetThere: {
            walkingTime : '32min',
            driving : '4.5min'
        }
    },
     {
        id: 12,
        activities: ["Comida tradicional", "Almuerzos"],
        representativeImage: "/images/Travel-guide/restaurante-3d.png",
        place: "D´Onde Mamá",
        distance:7.6,
        waysToGetThere: {
            driving : '13min'
        }
    },
    {
        id: 13,
        activities: ["Comida", "Bebidas", "Ecolodge"],
        representativeImage: "/images/Travel-guide/restaurante-2-3d.png",
        place: "Batsú Tavern & Lodging",
        distance:5.5,
        waysToGetThere: {
            driving : '11.5min'
        }
    },
    {
        id: 14,
        activities: ["Deportes", "Fútbol"],
        place: "Plaza de Deportes, San Miguel",
        representativeImage: "/images/Travel-guide/sports-3d.png",
        distance:6,
        waysToGetThere: {
            driving : '10min'
        }
    },
    {
        id: 15,
        activities: ["Comida", "Bebidas"],
        representativeImage: "/images/Travel-guide/restaurante-2-3d.png",
        place: "Restaurante Senderos",
        distance:7.1,
        waysToGetThere: {
            driving : '12min'
        }
    },
    {
        id: 16,
        activities: ["Comida", "Bebidas", "Ambiente"],
        representativeImage: "/images/Travel-guide/bar-3d.webp",
        place: "Bar la Montaña",
        distance:9.2,
        waysToGetThere: {
            driving : '16min'
        }
    },
    {
        id: 17,
        activities: ["Comida", "Bebidas", "Ambiente"],
        representativeImage: "/images/Travel-guide/farm-3d.webp",
        place: "Granja cunícola La Favorita",
        distance:8.7,
        waysToGetThere: {
            driving : '15min'
        }
    },
    {
        id: 18,
        activities: ["Aventura", "Tirolinas", "Rappel", "Canopy"],
        representativeImage: "/images/Travel-guide/casa-ramas-3d.webp",
        place: "Parque de Aventura Eco Musas",
        distance:13.2,
        waysToGetThere: {
            driving : '23min'
        }
    },

]