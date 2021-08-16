import collectionStyle from "../styles/Collections.module.scss";

export default function HeroContainer({ title, type }) {
  return (
    <div className={`${collectionStyle.hero_container} ${type}`}>
      <h1>{title}</h1>
    </div>
  );
}
