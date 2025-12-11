
export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    nombre: 'Honda Transa LP',
    descripcion: 'Ideal para ciudad',
    precio: 6500,
    imagen: '/img/honda-transalp.jpg'
  },
  {
    id: 2,
    nombre: 'Kawasaky 600',
    descripcion: 'Potente y elegante',
    precio: 9200,
    imagen: '/img/kawasaky 600.jpg'
  },
  {
    id: 3,
    nombre: 'Kawasaky KX 250',
    descripcion: 'Moderna y económica',
    precio: 3900,
    imagen: '/img/kawasaky-kx250.jpg'
  },
  {
    id: 4,
    nombre: 'Suzuki 1200',
    descripcion: 'Deportiva de alta cilindrada',
    precio: 13900,
    imagen: '/img/suzuki-1200.jpg'
  },
  {
    id: 5,
    nombre: 'Honda Traffic Scooter',
    descripcion: 'Scooter moderno y eficiente para el tráfico urbano.',
    precio: 4500,
    imagen: '/img/honda-traffic.jpg'
  },
  {
    id: 6,
    nombre: 'Suzuki Gixxer SF',
    descripcion: 'Moto deportiva de baja cilindrada, ideal para iniciarse.',
    precio: 5100,
    imagen: '/img/suzuki-gixxer-sf-720.jpg'
  },
{
    id: 7,
    nombre: 'Yamaha MT-07',
    descripcion: 'Naked deportiva, ligera y potente, excelente para la ciudad y curvas.',
    precio: 8500,
    imagen: '/img/moto-7.jpg'
  },
  {
    id: 8,
    nombre: 'Triumph Bonneville T120',
    descripcion: 'Clásica moderna con un estilo retro icónico, motor de alto torque y elegante.',
    precio: 11500,
    imagen: '/img/moto-8.jpg'
  },
  {
    id: 9,
    nombre: 'BMW R 1250 GS',
    descripcion: 'La moto de aventura definitiva, perfecta para viajes largos y todo terreno exigente.',
    precio: 18900,
    imagen: '/img/moto-9.jpg'
  },
  {
    id: 10,
    nombre: 'Harley-Davidson Fat Boy',
    descripcion: 'Cruiser americana legendaria, con motor Milwaukee-Eight, puro músculo.',
    precio: 22000,
    imagen: '/img/moto-10.jpg'
  },
  {
    id: 11,
    nombre: 'Ducati Panigale V4',
    descripcion: 'Superbike de alto rendimiento, tecnología de MotoGP y diseño italiano agresivo.',
    precio: 28500,
    imagen: '/img/moto-11.jpg'
  },
  {
    id: 12,
    nombre: 'KTM Duke 390',
    descripcion: 'Streetfighter ligera y ágil, ideal para pilotos principiantes y avanzados en la pista.',
    precio: 6100,
    imagen: '/img/moto-12.jpg'
  },
  {
    id: 13,
    nombre: 'Royal Enfield Classic 350',
    descripcion: 'Retro monocilíndrica, cómoda para paseos tranquilos y consumo muy eficiente.',
    precio: 4900,
    imagen: '/img/moto-13.jpg'
  },
  {
    id: 14,
    nombre: 'Kawasaki Z900',
    descripcion: 'Moto naked de alto rendimiento, diseño Z Sugomi, domina la calle.',
    precio: 10800,
    imagen: '/img/moto-14.jpg'
  },
  {
    id: 15,
    nombre: 'Honda CBR1000RR',
    descripcion: 'Supersport legendaria, velocidad y precisión máxima en la pista.',
    precio: 19900,
    imagen: '/img/moto-15.jpg'
  },
  {
    id: 16,
    nombre: 'Aprilia Tuareg 660',
    descripcion: 'Adventure travel bicilíndrica, equilibrio perfecto entre off-road y ruta.',
    precio: 12900,
    imagen: '/img/moto-16.jpg'
  }
];