/**
 * Método base para realizar requests al API y retornarlas en forma del tipo de interfaz enviada
 */
export async function HttpRequest<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}
