import collectionStyle from "../styles/Collections.module.scss";

export default function Purpose() {
  return (
    <div className={collectionStyle.purpose}>
      <div className={collectionStyle.purpose__img} />
      <p className={collectionStyle.purpose__text}>
        We know that nothing ever worth holding onto was built overnight. That’s
        why we trust in the process. We take our time and do it right. We’re
        proud that our goods go through some seriously hard craft. We explore
        the road less travelled and go where others don’t. Because life
        shouldn’t be boring.
      </p>
    </div>
  );
}
