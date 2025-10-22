let currentLang = navigator.language.startsWith('ar') ? 'ar' : 'en';

function loadData(lang) {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      document.getElementById('photo').src = data.photo;
      document.getElementById('name').innerHTML = 
      lang === 'ar' ? `<h2 id="name-ar" class="name-ar">${data.name_ar}</h2>`: `<h2 id="name-ar" class="name-ar">${data.name_en}</h2>`;
      document.getElementById('department').textContent =
        lang === 'ar' ? data.department_ar : data.department_en;
      document.getElementById('survey-btn').textContent =
        lang === 'ar' ? 'رأيك يهمنا!' : 'Give Us Your Opinion';
      document.getElementById('website-btn').textContent =
        lang === 'ar' ? 'اكتشف خدماتنا!' : 'Discover Our Services';
      document.getElementById('label-name').textContent =
        lang === 'ar' ? 'اسم الفني' : 'Technician Name';
      document.getElementById('label-dept').textContent =
        lang === 'ar' ? 'القسم' : 'Department';

      const btn = document.getElementById('lang-btn');
      btn.textContent = lang === 'ar' ? 'English' : 'العربية';
      document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.body.lang = lang;
    })
    .catch(err => console.error('Error loading data:', err));
}

document.getElementById('lang-btn').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  loadData(currentLang);
});

loadData(currentLang);
