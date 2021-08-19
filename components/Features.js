import collectionStyle from "../styles/Collections.module.scss";

export default function Features() {
  return (
    <section className={collectionStyle.features}>
      <div className={collectionStyle.feature}>
        <div
          className={`${collectionStyle.feature__icon} ${collectionStyle.feature__icon_1}`}
        />
        <h1 className={collectionStyle.feature__header}>15% Off First Order</h1>
        <p className={collectionStyle.feature__text}>
          Subscribe to our mailing list for 15% off your first order.
        </p>
      </div>

      <div className={collectionStyle.feature}>
        <div
          className={`${collectionStyle.feature__icon} ${collectionStyle.feature__icon_2}`}
        />
        <h1 className={collectionStyle.feature__header}>30 Day Returns</h1>
        <p className={collectionStyle.feature__text}>
          Shop with certainty with a 30 day returns policy.
        </p>
      </div>

      <div className={collectionStyle.feature}>
        <div
          className={`${collectionStyle.feature__icon} ${collectionStyle.feature__icon_3}`}
        />
        <h1 className={collectionStyle.feature__header}>Worldwide Shipping</h1>
        <p className={collectionStyle.feature__text}>
          Free worldwide shipping on all orders over £70.
        </p>
      </div>
    </section>
  );
}
