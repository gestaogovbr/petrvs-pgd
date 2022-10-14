//@ts-ignore
const webBrowser = (chrome || browser);
const defaultExtensionOptionsConfig = { /* Configuração utilizada para acessas as configurações da extensão */
  api_url: webBrowser?.runtime?.getURL ? webBrowser.runtime.getURL("") : "",
  suporte_url: "https://suporte.prf.gov.br",
  entidade: "PRF",
  logo_url: "logo-login-prf.png",
  versao: "1.0.0",
  login: {
    google_client_id: "",
    gsuit: true,
    azure: true,
    institucional: false,
    firebase: false,
    user_password: false
  }
};
//@ts-ignore
const global: any = typeof GLOBAL_PETRVS_CONFIG != "undefined" ? GLOBAL_PETRVS_CONFIG : defaultExtensionOptionsConfig;
//@ts-ignore
const URL = typeof EXTENSION_SERVIDOR_URL != "undefined" ? EXTENSION_SERVIDOR_URL : typeof EXTENSION_BASE_URL != "undefined" ? EXTENSION_BASE_URL : global.api_url;
const HOST =  URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
const HTTPS = URL.startsWith("https");

export const environment = {
  production: true,
  host: HOST,
  https: HTTPS,
  suporte: global?.suporte_url || "https://suporte.prf.gov.br",
  entidade: global?.entidade || "PRF",
  images: { login: global?.logo_url || "logo-login-prf.png" },
  versao: global?.versao || "1.0.0",
  login: global?.login || {
    google_client_id: global?.google_client_id || "",
    gsuit: true,
    azure: true,
    institucional: false,
    firebase: false,
    user_password: false
  }
};