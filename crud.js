export const handler = async (event) => {
  const metodo = event.requestContext?.http?.method;

  //obtiene id desde la URL
  const path = event.rawPath; // /usuarios/1
  const partes = path.split('/');
  const id = partes[2];

  let usuarios = [
    { id: '1', nombre: 'Alexis' },
    { id: '2', nombre: 'Ana' },
    { id: '3', nombre: 'Luis' },
  ];

  const data = event.body ? JSON.parse(event.body) : {};

  // GET todos
  if (metodo === 'GET' && !id) {
    return res(usuarios);
  }

  // GET uno
  if (metodo === 'GET' && id) {
    const user = usuarios.find(u => u.id === id);
    return res(user || {});
  }

  // POST
  if (metodo === 'POST') {
    usuarios.push({ id: '4', ...data });
    return res({ mensaje: 'Usuario creado' });
  }

  // PUT
  if (metodo === 'PUT' && id) {
    return res({ mensaje: `Usuario ${id} actualizado` });
  }

  // DELETE
  if (metodo === 'DELETE' && id) {
    return res({ mensaje: `Usuario ${id} eliminado` });
  }

  return res({ mensaje: 'OK' });
};

const res = (body) => ({
  statusCode: 200,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});
