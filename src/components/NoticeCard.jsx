import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDelete}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>
      <div>
        <span>Por: {notice.author}</span>
        -
        <span>Data: {notice.date}</span>
      </div>

      {showDetails && (
        <div className="notice-full-details">
          <p>{notice.description}</p>
        </div>
      )}

      {showDetails && (
        <div className="notice-full-details">
          <p>{notice.fullDescription}</p>
        </div>
      )}

      <div className="notice-actions">
        <button
          className="details"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          {showDetails ? "Fechar Detalhes" : "Exibir Detalhes"}
        </button>
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>
        <button onClick={() => onDelete(notice.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;