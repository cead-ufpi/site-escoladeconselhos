// Fix: Use relative paths instead of aliases to resolve module errors.
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from '../components/Icons';
import { Event, LibraryItem, LibraryItemType, NewsArticle, Photo, PhotoGallery, Project, TeamMember } from '../types/index';

export const NAV_LINKS = [
  { name: 'Página Inicial', href: '/' },
  { name: 'Sobre nós', href: '/sobre-nos' },
  { name: 'Notícias', href: '/noticias' },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Contate-nos', href: '#contact' },
];

export const SOCIAL_LINKS = [
    { name: 'Instagram', href: '#', icon: InstagramIcon },
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
    { name: 'YouTube', href: '#', icon: YoutubeIcon },
];

export const PROJECTS_DATA: Project[] = [
  {
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    title: 'Formação Continuada 2024',
    description: 'Capacitação intensiva para conselheiros tutelares sobre as novas diretrizes do ECA.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    title: 'Projeto Sementes do Amanhã',
    description: 'Iniciativa de prevenção à violência infantil nas escolas da rede pública do Piauí.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    title: 'Rede de Apoio Integrada',
    description: 'Criação de uma plataforma digital para conectar os diferentes atores do SGDCA.',
  },
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 1,
    slug: 'escola-de-conselhos-lanca-novo-curso-ead',
    imageUrl: 'https://picsum.photos/seed/news1/400/300',
    title: 'Escola de Conselhos do Piauí lança novo curso EAD',
    date: '15 de Julho, 2024',
    excerpt: 'A nova modalidade de ensino a distância visa alcançar conselheiros em todo o estado...',
    content: 'Com o objetivo de ampliar o acesso à capacitação de qualidade, a Escola de Conselhos Tutelares do Piauí anunciou hoje o lançamento de sua nova plataforma de Ensino a Distância (EAD). O primeiro curso ofertado, "ECA Descomplicado", já está com inscrições abertas e aborda os principais pontos do Estatuto da Criança e do Adolescente de forma didática e interativa. A iniciativa busca atender à demanda dos conselheiros que residem em municípios distantes da capital, garantindo que todos tenham a oportunidade de se atualizar e aprimorar suas práticas profissionais.'
  },
  {
    id: 2,
    slug: 'seminario-estadual-discute-futuro-dos-direitos-da-crianca',
    imageUrl: 'https://picsum.photos/seed/news2/400/300',
    title: 'Seminário Estadual discute o futuro dos Direitos da Criança',
    date: '10 de Julho, 2024',
    excerpt: 'Especialistas se reuniram em Teresina para debater os desafios e avanços na área...',
    content: 'O I Seminário Estadual sobre o Futuro dos Direitos da Criança e do Adolescente, realizado em Teresina, reuniu especialistas, gestores públicos e membros da sociedade civil. Durante dois dias de evento, foram debatidos temas como a erradicação do trabalho infantil, o combate à violência sexual e os desafios da inclusão digital para a juventude. As discussões resultaram na elaboração da "Carta de Teresina", um documento com propostas e compromissos para o fortalecimento do Sistema de Garantia de Direitos no estado.'
  },
  {
    id: 3,
    slug: 'parceria-com-unicef-fortalece-acoes-no-interior',
    imageUrl: 'https://picsum.photos/seed/news3/400/300',
    title: 'Parceria com UNICEF fortalece ações no interior do estado',
    date: '05 de Julho, 2024',
    excerpt: 'A colaboração visa ampliar o alcance das capacitações e do suporte técnico...',
    content: 'Uma nova parceria firmada entre a Escola de Conselhos Tutelares do Piauí e o Fundo das Nações Unidas para a Infância (UNICEF) promete fortalecer as ações de proteção a crianças e adolescentes no interior do estado. O acordo prevê a realização de oficinas de capacitação em municípios estratégicos, além do desenvolvimento de materiais pedagógicos adaptados à realidade local. A colaboração é um passo importante para a interiorização das políticas públicas e para a garantia de que os direitos de todos os meninos e meninas piauienses sejam respeitados.'
  },
];

export const TEAM_DATA: TeamMember[] = [
  { imageUrl: 'https://picsum.photos/seed/team1/200/200', name: 'Dr. João da Silva', title: 'Coordenador Geral', bio: 'Advogado com mais de 20 anos de experiência na área dos direitos da infância e juventude. Mestre em Políticas Públicas pela Universidade Federal do Piauí, é o responsável pela gestão estratégica da Escola.' },
  { imageUrl: 'https://picsum.photos/seed/team2/200/200', name: 'Dra. Maria Oliveira', title: 'Coordenadora Pedagógica', bio: 'Pedagoga e Doutora em Educação, Dra. Maria é especialista em metodologias de ensino para adultos. Desenvolve e coordena todos os programas de formação e capacitação oferecidos pela Escola.' },
  { imageUrl: 'https://picsum.photos/seed/team3/200/200', name: 'Carlos Pereira', title: 'Assessor Jurídico', bio: 'Advogado especialista em Direito da Família e Sucessões, presta assessoria jurídica para a equipe e para os conselheiros, garantindo a conformidade das ações com a legislação vigente.' },
  { imageUrl: 'https://picsum.photos/seed/team4/200/200', name: 'Ana Souza', title: 'Psicóloga', bio: 'Psicóloga com vasta experiência em atendimento a crianças e adolescentes em situação de vulnerabilidade. Oferece suporte técnico nas formações e desenvolve materiais sobre saúde mental e escuta especializada.' },
  { imageUrl: 'https://picsum.photos/seed/team5/200/200', name: 'Pedro Costa', title: 'Assistente Social', bio: 'Assistente Social focado na articulação da rede de proteção. Sua expertise contribui para a construção de fluxos de atendimento mais eficientes e humanizados nos municípios piauienses.' },
  { imageUrl: 'https://picsum.photos/seed/team6/200/200', name: 'Mariana Lima', title: 'Secretária Executiva', bio: 'Responsável pela gestão administrativa e financeira da Escola. Garante que todos os recursos sejam utilizados de forma eficiente para o cumprimento da nossa missão institucional.' },
];

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);
const lastWeek = new Date(today);
lastWeek.setDate(lastWeek.getDate() - 7);

export const EVENTS_DATA: Event[] = [
  {
    title: 'Palestra: A Escuta Especializada',
    date: lastWeek.toISOString(),
    time: '14:00 - 16:00',
    location: 'Evento Passado',
  },
  {
    title: 'Webinar: Marco Legal da Primeira Infância',
    date: today.toISOString(),
    time: '19:00 - 21:00',
    location: 'Online - via Zoom',
  },
  {
    title: 'Oficina de Práticas Restaurativas',
    date: tomorrow.toISOString(),
    time: '09:00 - 17:00',
    location: 'Auditório Principal, Teresina-PI',
  },
  {
    title: 'Congresso Piauiense do SGDCA',
    date: nextWeek.toISOString(),
    time: '08:00 - 18:00',
    location: 'Centro de Convenções de Teresina',
  },
];

export const LIBRARY_DATA: LibraryItem[] = [
    {
        type: LibraryItemType.PDF,
        title: 'Estatuto da Criança e do Adolescente (ECA)',
        link: '#',
    },
    {
        type: LibraryItemType.PDF,
        title: 'Guia de Atuação do Conselho Tutelar',
        link: '#',
    },
    {
        type: LibraryItemType.Video,
        title: 'Palestra sobre Direitos Fundamentais',
        thumbnailUrl: 'https://picsum.photos/seed/video1/400/225',
        link: 'https://youtube.com',
    },
    {
        type: LibraryItemType.Video,
        title: 'Entendendo o Sistema de Garantia de Direitos',
        thumbnailUrl: 'https://picsum.photos/seed/video2/400/225',
        link: 'https://youtube.com',
    },
];

export const GALLERIES_DATA: PhotoGallery[] = [
  { id: 1, slug: 'formacao-continuada-2024', title: 'Formação Continuada 2024', description: 'Fotos da capacitação intensiva para conselheiros tutelares.', coverImageUrl: 'https://picsum.photos/seed/gallery1/400/300' },
  { id: 2, slug: 'seminario-estadual', title: 'Seminário Estadual', description: 'Registros do grande encontro de especialistas em Teresina.', coverImageUrl: 'https://picsum.photos/seed/gallery2/400/300' },
  { id: 3, slug: 'acoes-no-interior', title: 'Ações no Interior', description: 'Imagens das nossas atividades e oficinas nos municípios do Piauí.', coverImageUrl: 'https://picsum.photos/seed/gallery3/400/300' },
];

export const PHOTOS_DATA: Photo[] = [
  // Gallery 1
  { id: 1, galleryId: 1, imageUrl: 'https://picsum.photos/seed/photo1-1/800/600', caption: 'Abertura do evento' },
  { id: 2, galleryId: 1, imageUrl: 'https://picsum.photos/seed/photo1-2/800/600', caption: 'Palestra sobre o ECA' },
  { id: 3, galleryId: 1, imageUrl: 'https://picsum.photos/seed/photo1-3/800/600', caption: 'Dinâmica em grupo' },
  { id: 4, galleryId: 1, imageUrl: 'https://picsum.photos/seed/photo1-4/800/600', caption: 'Mesa redonda com especialistas' },
  { id: 5, galleryId: 1, imageUrl: 'https://picsum.photos/seed/photo1-5/800/600', caption: 'Entrega dos certificados' },
  { id: 6, galleryId: 1, imageUrl: 'https://picsum.photos/seed/photo1-6/800/600', caption: 'Foto oficial da turma' },
  // Gallery 2
  { id: 7, galleryId: 2, imageUrl: 'https://picsum.photos/seed/photo2-1/800/600', caption: 'Credenciamento dos participantes' },
  { id: 8, galleryId: 2, imageUrl: 'https://picsum.photos/seed/photo2-2/800/600', caption: 'Auditório lotado' },
  { id: 9, galleryId: 2, imageUrl: 'https://picsum.photos/seed/photo2-3/800/600', caption: 'Debate sobre políticas públicas' },
  // Gallery 3
  { id: 10, galleryId: 3, imageUrl: 'https://picsum.photos/seed/photo3-1/800/600', caption: 'Oficina em Parnaíba' },
  { id: 11, galleryId: 3, imageUrl: 'https://picsum.photos/seed/photo3-2/800/600', caption: 'Roda de conversa em Floriano' },
  { id: 12, galleryId: 3, imageUrl: 'https://picsum.photos/seed/photo3-3/800/600', caption: 'Visita técnica em Picos' },
];