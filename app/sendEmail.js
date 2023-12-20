
export function sendEmail(data) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    body: JSON.stringify(data),
    method: 'POST',
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
