import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured }) {
  return (
    <article className={`notice-card ${notice.featured && "featured"}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>
      <div>
        <span>Por: {notice.author}</span>
        -
        <span>Data: {notice.date}</span>
      </div>
      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>
            {notice.featured ? "Remover destaque" : "Destacar"}
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;