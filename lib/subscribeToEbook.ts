// TODO: reemplazar por el servicio de mail real
export async function subscribeToEbook(email: string) {
  console.log("Suscripción al e-book:", email);
  await new Promise((resolve) => setTimeout(resolve, 800));
}
