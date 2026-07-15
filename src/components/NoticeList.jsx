import NoticeCard from "./NoticeCard";
import "./NoticeList.css";

function NoticeList({ notices, onToggleFeatured }) {
  return (
    <main>
      <h2>Mural Digital do IFRN - Campus Macau</h2>

      {notices.map((notice) => (
        <NoticeCard key={notice.id} notice={notice} onToggleFeatured={onToggleFeatured} />
      ))}
    </main> 
  );
}

export default NoticeList;