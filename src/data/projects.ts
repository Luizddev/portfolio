export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  featured: boolean;
  dataRelevance?: string; // How this relates to data engineering
}

export const projects: Project[] = [
  {
    slug: 'saga-senai',
    title: 'Saga Senai',
    description: 'Sistema de gestão de aprendizagem desenvolvido para demanda real do SENAI.',
    longDescription: 'Aplicação full-stack para gerenciamento de turmas, alunos, frequência e notas. Backend em Node.js com API REST, frontend em HTML/CSS/JS vanilla. Banco de dados relacional para persistência de dados acadêmicos.',
    stack: ['Node.js', 'Express', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Git'],
    githubUrl: 'https://github.com/Luizddev/saga-senai',
    featured: true,
    dataRelevance: 'Modelagem relacional, queries SQL, pipeline de dados acadêmicos, API para consumo de dados',
  },
  {
    slug: 'ril-company',
    title: 'RIL Company',
    description: 'Projeto em grupo: sistema de gestão empresarial com módulos de vendas, estoque e relatórios.',
    longDescription: 'Desenvolvimento colaborativo de sistema ERP simplificado. Responsável pelo backend (Node.js), modelagem de banco de dados e APIs de relatórios gerenciais. Integração de dashboards com dados de vendas e estoque.',
    stack: ['Node.js', 'PostgreSQL', 'Express', 'Chart.js', 'Docker', 'Git'],
    githubUrl: 'https://github.com/Luizddev/ril-company',
    featured: true,
    dataRelevance: 'Modelagem dimensional, agregações SQL, geração de relatórios, visualização de dados',
  },
];