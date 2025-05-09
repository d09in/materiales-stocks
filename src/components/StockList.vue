<script>
import { db } from "@/firebaseConfig";  
import { collection, getDocs } from "firebase/firestore";  



export default {
  data() {
    return {
      activeTab: 'molienda',
      items: {
        molienda: [
          { equipo: "TANQUE JUGO DILUIDO MOLINO FULTON", nivel: 46 },
          { equipo: "BÁSCULAS DE JUGO MOLINO FULTON", nivel: 100 }
        ],
        calentamiento: [
          { equipo: "CALENTADOR PLATULAR #1", nivel: 100 },
          { equipo: "CALENTADOR PLATULAR #2", nivel: 100 }
        ],
        clarificacion: [
          { equipo: "TANQUE FLASH DE CLARIFICADOR DE JUGO #1", nivel: 68 },
          { equipo: "CLARIFICADOR DE JUGO #1", nivel: 32 }
        ],
        cristalizacion: [
          { equipo: "TANQUE DE MELADURA ALIMENTACIÓN TACHO CONTINUO A", nivel: 70 },
          { equipo: "RECIBIDOR DEL TACHO 9", nivel: 53 }
        ]
      },
      equipos: []
    };
  },
  computed: {
    activeItems() {
      return this.items[this.activeTab];
    }
  },
  async created() {
    await this.obtenerEquipos();
  },
  methods: {
    async obtenerEquipos() {
      const querySnapshot = await getDocs(collection(db, "materiales_laboratorio"));
      this.equipos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    agregarEquipo() {
      this.items[this.activeTab].push({ equipo: "Nuevo equipo", nivel: 0 });
    },
    eliminarEquipo(index) {
      this.items[this.activeTab].splice(index, 1);
    }
  }
};




</script>