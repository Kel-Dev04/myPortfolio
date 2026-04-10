import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import enLabels from "react-phone-number-input/locale/en.json";
import ptLabels from "react-phone-number-input/locale/pt.json";
import esLabels from "react-phone-number-input/locale/es.json";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

const LABELS_BY_LANG = {
  en: enLabels,
  pt: ptLabels,
  es: esLabels,
  ht: enLabels,
};

const DEFAULT_COUNTRY_BY_LANG = {
  en: "US",
  pt: "PT",
  es: "ES",
  ht: "HT",
};

function resolveLang(i18n) {
  return (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
}

const Contact = () => {
  const { t, i18n } = useTranslation();
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [statusSuccess, setStatusSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(undefined);

  const lang = useMemo(() => resolveLang(i18n), [i18n.language, i18n.resolvedLanguage]);
  const defaultCountry = DEFAULT_COUNTRY_BY_LANG[lang] || "US";
  const labels = LABELS_BY_LANG[lang] || enLabels;

  useEffect(() => {
    setPhone(undefined);
  }, [lang]);

  const handleTextareaChange = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusSuccess(false);

    const servuceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!servuceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing.");
      setStatusSuccess(false);
      setStatus(t("contact_err_config"));
      setLoading(false);
      return;
    }

    emailjs.sendForm(servuceId, templateId, formRef.current, publicKey).then(
      () => {
        setStatusSuccess(true);
        setStatus(t("contact_success"));
        formRef.current.reset();
        setPhone(undefined);
        setLoading(false);
      },
      (error) => {
        console.error("Erro:", error);
        setStatusSuccess(false);
        setStatus(t("contact_err_send"));
        setLoading(false);
      },
    );
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-header">
        <h2>
          {t("contact_title")} <span> {t("contact_title_span")} </span>
        </h2>
        <p>{t("contact_subtitle")}</p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="name">{t("label_name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("placeholder_name")}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">{t("label_email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("placeholder_email")}
              required
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="input-group">
            <span className="phone-field-label" id="phone-field-label">
              {t("label_phone")}
            </span>
            <div
              className="contact-phone"
              role="group"
              aria-labelledby="phone-field-label"
            >
              <PhoneInput
                key={lang}
                defaultCountry={defaultCountry}
                labels={labels}
                placeholder={t("placeholder_phone_local")}
                value={phone}
                onChange={setPhone}
                countryCallingCodeEditable={false}
                className="contact-phone-input"
              />
              <input type="hidden" name="phone" value={phone ?? ""} readOnly />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="preference">{t("label_reply_via")}</label>
            <select name="preference" id="preference" className="custom-select">
              <option value="Email">{t("option_email")}</option>
              <option value="WhatsApp">{t("option_whatsapp")}</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="message">{t("label_message")}</label>
          <textarea
            name="message"
            id="message"
            placeholder={t("placeholder_message")}
            required
            onInput={handleTextareaChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? t("btn_sending") : t("btn_send")}
        </button>

        {status && (
          <p
            className={["status-msg", statusSuccess ? "success" : "error"].join(
              " ",
            )}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
