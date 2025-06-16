class TuoDashboard extends HTMLElement {
  setConfig(config) {
    // Configurazione del Dashboard
    this.innerHTML = `<h1>${config.title}</h1>`;
  }
}

customElements.define('tuo-dashboard', TuoDashboard);
