/* Navbar */
$(document).ready(function () {
  const sections = ['#aboutMe', '#resume', '#portfolio', '#contact'];
  sections.forEach(id => {
    if (id === '#aboutMe') {
      $(id).show().addClass('animate__animated animate__fadeIn animate__slower');
    } else {
      $(id).hide();
    }
  });

  function showSection(sectionId) {
    sections.forEach(id => {
      if (id === sectionId) {
        $(id)
          .show()
          .removeClass('animate__fadeOut')
          .addClass('animate__animated animate__fadeIn animate__slower');
        if (id === '#portfolio') {
          $('.card').each(function (i) {
            $(this)
              .hide()
              .removeClass('animate__fadeInDown')
              .addClass('animate__animated animate__fadeInUp')
              .css('animation-delay', `${i * 0.2}s`)
              .show();
          });
        }
      } else {
        $(id)
          .removeClass('animate__fadeIn animate__slower')
          .addClass('animate__animated animate__fadeOut');
        setTimeout(() => {
          $(id).hide();
        }, 500); 
      }
    });
  }

  $('#btAbout').on('click', () => showSection('#aboutMe'));
  $('#btResume').on('click', () => showSection('#resume'));
  $('#btPortfolio').on('click', () => showSection('#portfolio'));
  $('#btContact').on('click', () => showSection('#contact'));
  $('#btTalk').on('click', () => showSection('#contact'));

  const buttonIds = ['#btAbout', '#btResume', '#btPortfolio', '#btContact'];
    $(buttonIds.join(',')).on('click', function () {
      $(buttonIds.join(',')).each(function () {
        $(this)
          .removeClass('text-black')
          .addClass('text-white');
        $(this)
          .find('span.bg-amber-400')
          .removeClass('scale-100')
          .addClass('scale-0');
      });
      $(this)
        .removeClass('text-white')
        .addClass('text-black');
      $(this)
        .find('span.bg-amber-400')
        .removeClass('scale-0')
        .addClass('scale-100');
    });
    $('#btTalk').on('click', function () {
      $('#btContact').trigger('click');
    });
});

/* Form */
const scriptURL = 'https://script.google.com/macros/s/AKfycbxrJiMtiq7DB4_OzniOt4gyxMu7JSyNJp4zXUW_pF7bP24lWLqFLiFoFSj7xWGiAL-S2A/exec'
const form = document.forms['portfolio-contact-form']
const btActive = document.querySelectorAll('.active')
const btHover = document.querySelector('.hover')
const btDeactive = document.querySelector('.deactive')
const btLoading = document.querySelector('.loading')
const btBackground = document.querySelector('.background')
const alert = document.getElementById('alert-4');

function showAlert() {
  const alert = document.getElementById('alert-4');
  alert.style.display = 'flex'; // tampilkan alert
  setTimeout(() => {
    alert.classList.remove('opacity-0', 'translate-y-3');
    alert.classList.add('opacity-100', 'translate-y-0');
  }, 50); // delay kecil agar transisi dimulai
}

function closeAlert() {
  alert.classList.remove('opacity-100', 'translate-y-0');
  alert.classList.add('opacity-0', '-translate-y-3');
  setTimeout(() => {
    alert.style.display = 'none';
  }, 500);
}

form.addEventListener('submit', e => {
  e.preventDefault()
  btDeactive.classList.add('hidden')
  btHover.classList.add('hidden')
  btLoading.classList.toggle('hidden')
  btActive.forEach(el => {
    el.classList.remove('scale-y-0');
    el.classList.remove('group-hover:scale-y-100');
  })
  btBackground.classList.remove('bg-amber-400')
  btBackground.classList.add('bg-transparent')
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      btDeactive.classList.remove('hidden')
      btHover.classList.add('hidden')
      btLoading.classList.toggle('hidden')
      btActive.forEach(el => {
        el.classList.add('scale-y-0');
        el.classList.add('group-hover:scale-y-100');
      })
      btBackground.classList.add('bg-amber-400')
      btBackground.classList.remove('bg-transparent')
      showAlert()
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
});