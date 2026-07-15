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
      author: "COINF/MC",
      date: "01/07/2026",
      featured: true,
    },
    {
      id: 2,
      title: "Manutenção do Lab. de Informática 2",
      category: "Aviso",
      description: "Indisponível na sexta 03/07/2026",
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

  return (
    <>
      <Header
        title={"Programação para Internet"}
        subtitle={"Curso Técnico Integrado em Informática"}
      />
      <NoticeList notices={notices} onToggleFeatured={handleToggleFeatured} />
    </>
  );
}

export default App;