import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const HTML_LANG = { en: "en", pt: "pt", es: "es", ht: "ht" };

function setMeta(name, content, isProperty = false) {
  if (content === undefined || content === null) return;
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSyncedDocumentMeta() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const lng = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
    document.documentElement.lang = HTML_LANG[lng] ?? "en";

    document.title = t("meta_title");
    setMeta("description", t("meta_description"));
    setMeta("keywords", t("meta_keywords"));
    setMeta("og:title", t("og_title"), true);
    setMeta("og:description", t("og_description"), true);
    setMeta("og:site_name", t("og_site_name"), true);
    setMeta("twitter:title", t("twitter_title"));
    setMeta("twitter:description", t("twitter_description"));

    const ldScript = document.getElementById("ld-json-person");
    if (ldScript?.textContent) {
      try {
        const data = JSON.parse(ldScript.textContent);
        data.jobTitle = t("jsonld_job_title");
        data.description = t("jsonld_description");
        ldScript.textContent = JSON.stringify(data);
      } catch {
        /* ignore malformed JSON */
      }
    }
  }, [i18n.language, i18n.resolvedLanguage, t]);
}
