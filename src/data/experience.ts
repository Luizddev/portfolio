export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  stack: string[];
  dataRelevance?: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Estagiário de T.I. (Buscando oportunidade em Data/Backend)',
    company: '—',
    period: '2024 — Presente',
    description: [
      'Foco em desenvolvimento backend com Node.js e Python',
      'Estudos direcionados para Engenharia de Dados: pipelines, modelagem, SQL avançado',
      'Projetos pessoais de automação e análise de dados',
    ],
    stack: ['Node.js', 'Python', 'Pandas', 'SQL', 'Docker', 'Git', 'GitHub Actions'],
    dataRelevance: [
      'ETL/ELT com Python (Pandas, SQLAlchemy)',
      'Modelagem dimensional (Star/Snowflake Schema)',
      'APIs para servir dados a dashboards',
      'Orquestração básica com GitHub Actions',
    ],
  },
  {
    role: 'Aprendiz de Redes de Computadores',
    company: 'Terramil',
    period: '2023 — 2024',
    location: 'Presencial',
    description: [
      'Manutenção de infraestrutura de rede e ativos de TI',
      'Cabeamento estruturado, configuração de switches/roteadores Cisco',
      'Administração de DNS, DHCP, HTTP/HTTPS, VPN',
      'Suporte a usuários e documentação técnica',
    ],
    stack: ['Cisco Packet Tracer', 'Redes TCP/IP', 'DNS/HTTP/HTTPS', 'Cabeamento', 'Hardware'],
    dataRelevance: [
      'Entendimento de protocolos de rede (base para ingestão de dados)',
      'Linux/CLI para automação de tarefas de infraestrutura',
      'Documentação técnica e versionamento',
    ],
  },
];

export const education = [
  {
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'SENAI',
    period: '2023 — 2025',
    status: 'Cursando',
  },
  {
    degree: 'Cybersecurity Essentials',
    institution: 'Cisco Networking Academy',
    period: '2024',
    status: 'Concluído',
  },
];