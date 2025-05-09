<template>
  <div>
    <h2>Iniciar sesión</h2>
    <input type="text" placeholder="Usuario" />
    <input type="password" placeholder="Contraseña" />
    <button>Entrar</button>
    <button @click="handleSignIn">Iniciar sesión con Google</button>
  </div>
</template>






<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const handleSignIn = async () => {
      try {
        await signInWithGoogle();
        router.push("/dashboard"); // Redirigir tras el login
      } catch (error) {
        alert("Error de autenticación. Intenta nuevamente.");
        console.error("Error en login:", error);
      }
    };

    return { handleSignIn };
  }
};
</script>



function signInWithGoogle() {
  gapi.auth2.getAuthInstance().signIn().then(user => {
    console.log("Usuario autenticado:", user);
  }).catch(error => {
    console.error("Error en autenticación:", error);
  });
}

