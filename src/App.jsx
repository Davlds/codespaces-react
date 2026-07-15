import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoticeList from "./components/NoticeList";

function App() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Secitex Macau 2026",
      category: "Evento",
      description: "Inscrições abertas para oficinas e palestras.",
      fullDescription: `O Secitex Macau 2026 é a Semana de Ciência, Tecnologia e Extensão do Campus, 
        com oficinas práticas, palestras e apresentação de projetos de alunos e servidores. 
        As inscrições estão abertas e podem ser feitas na secretaria ou pelo formulário online divulgado nos murais do campus.`,
      author: "COINF/MC",
      date: "01/07/2026",
      featured: true,
    },
    {
      id: 2,
      title: "Manutenção do Lab. de Informática 2",
      category: "Aviso",
      description: "Indisponível na sexta 03/07/20263",
      fullDescription: `O Laboratório de Informática 2 passará por manutenção preventiva nos equipamentos e na rede elétrica na sexta-feira, 03/07/2026, 
        durante todo o turno. As aulas previstas para o local serão remanejadas para o Laboratório 1 ou para salas de aula convencionais, 
        conforme orientação da coordenação.`,
      author: "CTI/MC",
      date: "01/07/2026",
      featured: false,
    },
  ]);

  function handleToggleFeatured(id) {
    setNotices((notices) =>
      notices.map(
        (notice) =>
          notice.id === id ? { ...notice, featured: !notice.featured } : notice,
      ),
    );
  }

  function handleDelete(id) {
    setNotices((notices) => notices.filter((notice) => notice.id !== id));
  }

  return (
    <>
      <Header
        title={"Programação para Internet"}
        subtitle={"Curso Técnico Integrado em Informática"}
      />
      <NoticeList notices={notices} onToggleFeatured={handleToggleFeatured} onDelete={handleDelete} />
    </>
  );
}

export default App;