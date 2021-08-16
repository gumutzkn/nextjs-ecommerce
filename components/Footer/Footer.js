import footerStyles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer__top}>
        <div className={footerStyles.footer__top_form}>
          <h3>Sign up to our newsletter</h3>
          <p>I'm interested in:</p>

          <form className={footerStyles.form}>
            <label
              className={footerStyles.custom_checkbox}
              tabindex="0"
              aria-label="Womens"
            >
              <input type="checkbox" />
              <span className={footerStyles.checkmark}></span>
              <span className={footerStyles.label}>Womens</span>
            </label>

            <label
              className={footerStyles.custom_checkbox}
              tabindex="0"
              aria-label="Mens"
            >
              <input type="checkbox" />
              <span className={footerStyles.checkmark}></span>
              <span className={footerStyles.label}>Mens</span>
            </label>
            <input
              type="email"
              placeholder="Email address..."
              className={footerStyles.form__input}
            />
            <button type="submit" className={footerStyles.form__button}>
              Submit
            </button>
          </form>
        </div>

        <div className={footerStyles.offers}>
          <div>
            <h1>15% Off Your First Order</h1>
            <p>Subscribe to our mailing list for 15% off your first order.</p>
          </div>

          <div>
            <h1>30 Days Return</h1>
            <p>Shop with certainty with our 30 day returns policy.</p>
          </div>

          <div>
            <h1>Worldwide Shipping</h1>
            <p>Free worldwide shipping on all orders over £50.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
