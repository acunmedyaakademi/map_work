const user = document.querySelector('#users');

async function getData() {
  const request = await fetch('/assets/json/data.json');
  const data = await request.json();
  console.log(data);
  return data;
}

getData().then(data => {
  user.innerHTML = `
    <h1>KİŞİLER ve BİLGİLERİ</h1>
    ${data.map(person => {
    const dob = new Date(person.dogumYili, 0, 1);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    return `
        <div class="user">
          <h3>${person.ad} ${person.soyad}</h3>
          <p>Doğum Yılı: ${person.dogumYili}</p>
          <p>Yaş: ${age}</p>
        </div>
      `;
  }).join('')}
  `;
});
