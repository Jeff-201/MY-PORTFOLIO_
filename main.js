'use strict';

var copyStatus = document.getElementById('cnote');

function announceCopy(message) {
  if (copyStatus) copyStatus.textContent = message;
}

function fallbackCopy(value) {
  var field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();

  var copied = false;
  try {
    copied = document.execCommand('copy');
  } finally {
    document.body.removeChild(field);
  }
  return copied;
}

document.querySelectorAll('.cp').forEach(function (button) {
  button.addEventListener('click', function () {
    var value = button.dataset.copy;
    if (!value) {
      announceCopy('Nothing to copy.');
      return;
    }

    function complete() {
      announceCopy('Copied ' + value);
      button.textContent = 'Copied';
      window.setTimeout(function () {
        button.textContent = 'Copy';
      }, 1800);
    }

    function useFallback() {
      try {
        if (fallbackCopy(value)) {
          complete();
          return;
        }
      } catch (error) {
        announceCopy('Copy was unavailable. Select and copy: ' + value);
        return;
      }
      announceCopy('Copy was unavailable. Select and copy: ' + value);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).then(complete, useFallback);
    } else {
      useFallback();
    }
  });
});

var messageForm = document.getElementById('mf');
if (messageForm) {
  messageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.currentTarget;
    if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;

    var name = form.elements.namedItem('name').value.trim();
    var email = form.elements.namedItem('email').value.trim();
    var subject = form.elements.namedItem('subj').value.trim();
    var message = form.elements.namedItem('body').value.trim();
    var mailto = 'mailto:japhethtaboi2@gmail.com?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email);
    window.location.href = mailto;
    announceCopy('Your email app should open with your message. You can also email japhethtaboi2@gmail.com directly.');
  });
}
