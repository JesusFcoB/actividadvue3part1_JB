const { createApp } = Vue;

function crearPerfilInicial() {
  return {
    nombre: 'Alex Hernández',
    carrera: 'Ingeniería en Software',
    descripcion: 'Me gusta crear interfaces web.',
    correo: 'alex@example.com',
    color: '#4f46e5',
    semestre: '5° semestre',
    mostrarContacto: false,
    disponibleParaColaborar: true,
    temaOscuro: false
  };
}

function aplicarTemaOscuro(temaOscuro) {
  document.body.classList.toggle('theme-dark', temaOscuro);
}

createApp({
  data() {
    return crearPerfilInicial();
  },
  mounted() {
    aplicarTemaOscuro(this.temaOscuro);
  },
  methods: {
    alternarContacto() {
      this.mostrarContacto = !this.mostrarContacto;
    },
    alternarTema() {
      this.temaOscuro = !this.temaOscuro;
      aplicarTemaOscuro(this.temaOscuro);
    },
    restablecer() {
      Object.assign(this, crearPerfilInicial());
      aplicarTemaOscuro(this.temaOscuro);
    }
  }
}).mount('#app');
