
export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  marca: string;
  categoria: string; 
}

export const MOCK_PRODUCTS: Product[] = [
  // Productos Originales
  {
    id: 1,
    nombre: 'Honda Transa LP',
    descripcion: 'Ideal para ciudad y rutas largas, con excelente suspensión.',
    precio: 6500,
    imagen: '/img/honda-transalp.jpg',
    marca: 'Honda',
    categoria: 'Adventure'
  },
  {
    id: 2,
    nombre: 'Kawasaky 600',
    descripcion: 'Potente y elegante. Una moto deportiva de alto rendimiento en carretera.',
    precio: 9200,
    imagen: '/img/kawasaky 600.jpg',
    marca: 'Kawasaki',
    categoria: 'Deportiva'
  },
  {
    id: 3,
    nombre: 'Kawasaky KX 250',
    descripcion: 'Moto de motocross moderna y ligera, diseñada para la competición off-road.',
    precio: 3900,
    imagen: '/img/kawasaky-kx250.jpg',
    marca: 'Kawasaki',
    categoria: 'Off-Road'
  },
  {
    id: 4,
    nombre: 'Suzuki 1200',
    descripcion: 'Deportiva de alta cilindrada con un diseño agresivo y aerodinámico.',
    precio: 13900,
    imagen: '/img/suzuki-1200.jpg',
    marca: 'Suzuki',
    categoria: 'Deportiva'
  },
  {
    id: 5,
    nombre: 'Honda Traffic Scooter',
    descripcion: 'Scooter moderno y eficiente para el tráfico urbano diario.',
    precio: 4500,
    imagen: '/img/honda-traffic.jpg',
    marca: 'Honda',
    categoria: 'Urbana'
  },
  {
    id: 6,
    nombre: 'Suzuki Gixxer SF',
    descripcion: 'Moto deportiva de baja cilindrada, ideal para iniciarse en el mundo sport.',
    precio: 5100,
    imagen: '/img/suzuki-gixxer-sf-720.jpg',
    marca: 'Suzuki',
    categoria: 'Deportiva'
  },
  {
    id: 7,
    nombre: 'Yamaha MT-07',
    descripcion: 'Naked deportiva, ligera y potente, excelente para la ciudad y curvas.',
    precio: 8500,
    imagen: '/img/moto-7.jpg',
    marca: 'Yamaha',
    categoria: 'Naked'
  },
  {
    id: 8,
    nombre: 'Triumph Bonneville T120',
    descripcion: 'Clásica moderna con un estilo retro icónico, motor de alto torque y elegante.',
    precio: 11500,
    imagen: '/img/moto-8.jpg',
    marca: 'Triumph',
    categoria: 'Clásica'
  },
  {
    id: 9,
    nombre: 'BMW R 1250 GS',
    descripcion: 'La moto de aventura definitiva, perfecta para viajes largos y todo terreno exigente.',
    precio: 18900,
    imagen: '/img/moto-9.jpg',
    marca: 'BMW',
    categoria: 'Adventure'
  },
  {
    id: 10,
    nombre: 'Harley-Davidson Fat Boy',
    descripcion: 'Cruiser americana legendaria, con motor Milwaukee-Eight, puro músculo.',
    precio: 22000,
    imagen: '/img/moto-10.jpg',
    marca: 'Harley-Davidson',
    categoria: 'Cruiser'
  },
  {
    id: 11,
    nombre: 'Ducati Panigale V4',
    descripcion: 'Superbike de alto rendimiento, tecnología de MotoGP y diseño italiano agresivo.',
    precio: 28500,
    imagen: '/img/moto-11.jpg',
    marca: 'Ducati',
    categoria: 'Deportiva'
  },
  {
    id: 12,
    nombre: 'KTM Duke 390',
    descripcion: 'Streetfighter ligera y ágil, ideal para pilotos principiantes y avanzados en la pista.',
    precio: 6100,
    imagen: '/img/moto-12.jpg',
    marca: 'KTM',
    categoria: 'Naked'
  },
  {
    id: 13,
    nombre: 'Royal Enfield Classic 350',
    descripcion: 'Retro monocilíndrica, cómoda para paseos tranquilos y consumo muy eficiente.',
    precio: 4900,
    imagen: '/img/moto-13.jpg',
    marca: 'Royal Enfield',
    categoria: 'Clásica'
  },
  {
    id: 14,
    nombre: 'Kawasaki Z900',
    descripcion: 'Moto naked de alto rendimiento, diseño Z Sugomi, domina la calle.',
    precio: 10800,
    imagen: '/img/moto-14.jpg',
    marca: 'Kawasaki',
    categoria: 'Naked'
  },
  {
    id: 15,
    nombre: 'Honda CBR1000RR',
    descripcion: 'Supersport legendaria, velocidad y precisión máxima en la pista.',
    precio: 19900,
    imagen: '/img/moto-15.jpg',
    marca: 'Honda',
    categoria: 'Deportiva'
  },
  {
    id: 16,
    nombre: 'Aprilia Tuareg 660',
    descripcion: 'Adventure travel bicilíndrica, equilibrio perfecto entre off-road y ruta.',
    precio: 12900,
    imagen: '/img/moto-16.jpg',
    marca: 'Aprilia',
    categoria: 'Adventure'
  }
];