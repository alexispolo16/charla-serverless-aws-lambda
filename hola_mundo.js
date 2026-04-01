export const handler = async (event) => {
  const nombre = event.queryStringParameters?.nombre || 'Mundo';

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mensaje: `Hola, ${nombre}!`
    })
  };
};
