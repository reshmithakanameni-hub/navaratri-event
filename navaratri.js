document.getElementById('regForm').addEventListener('submit', function (e) {
  e.preventDefault();

  var data = new FormData(this);
  var events = data.getAll('events').join(', ') || 'none selected';

  // Demo only: data is not saved anywhere.
  // To collect registrations, send `data` to a backend / Google Sheet / Formspree here.
  console.log(Object.fromEntries(data), events);

  var thanks = document.getElementById('thanks');
  thanks.style.display = 'block';
  thanks.textContent = 'Thank you, ' + data.get('name') + '! Your registration is received. See you at the Mahotsav.';

  this.reset();
});