// ScrollReveal animations
ScrollReveal().reveal('.reveal', { 
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    opacity: 0
  });
  
  // GSAP animations for landing page
  gsap.from('.landing-content h1', { duration: 1.5, y: -50, opacity: 0, ease: 'power2.out' });
  gsap.from('.landing-content p', { duration: 1.5, y: 50, opacity: 0, delay: 0.3, ease: 'power2.out' });
  gsap.from('.cta-btn', { duration: 1.5, opacity: 0, delay: 0.6, ease: 'power2.out' });
  function getDate() {
    // Get the selected date from the input
    var selectedDate = document.getElementById('selected-date').value;
    
    // Display the selected date
    document.getElementById('output').innerHTML = "Your Appointment on: " + selectedDate;
}  

// multiple select
function generateBill() {
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selectedServices = [];
  let totalAmount = 0;

  // Get selected services and total amount
  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selectedServices.push(`${checkbox.nextElementSibling.textContent}`);
          totalAmount += parseInt(checkbox.value);
      }
  });

  // Get the selected date
  const date = document.getElementById('date').value;
  
  // If no services or date is selected, show a warning
  if (selectedServices.length === 0 || !date) {
      alert('Please select at least one service and choose a date.');
      return;
  }
  
  // Display the bill
  document.getElementById('selectedServices').innerHTML = `<strong>Selected Services:</strong><br/>${selectedServices.join('<br/>')}`;
  document.getElementById('selectedDate').innerHTML = `<strong>Date:</strong> ${date}`;
  document.getElementById('totalAmount').innerHTML = `<strong>Total Amount to Pay:</strong> ₹${totalAmount}`;
  
  // Show the bill section
  document.querySelector('.bill').style.display = 'block';
}

function resetForm() {
  // Reset all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.checked = false;
  });

  // Reset the date
  document.getElementById('date').value = '';

  // Hide the bill section
  document.querySelector('.bill').style.display = 'none';
}
// for scheduling rescheduling
function scheduleAppointment() {
  // Get selected services
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selectedServices = [];
  let totalAmount = 0;

  // Calculate total amount and get selected services
  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selectedServices.push(`${checkbox.nextElementSibling.textContent}`);
          totalAmount += parseInt(checkbox.value);
      }
  });

  // Get selected date
  const date = document.getElementById('date').value;

  // If no services or date selected, show alert
  if (selectedServices.length === 0 || !date) {
      alert('Please select at least one service and choose a date.');
      return;
  }

  // Show appointment summary
  document.getElementById('selectedServices').innerHTML = `<strong>Selected Services:</strong><br/>${selectedServices.join('<br/>')}`;
  document.getElementById('selectedDate').innerHTML = `<strong>Date:</strong> ${date}`;
  document.getElementById('totalAmount').innerHTML = `<strong>Total Amount:</strong> ₹${totalAmount}`;

  // Display the summary section
  document.querySelector('.summary').style.display = 'block';
}

function resetForm() {
  // Reset all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);

  // Reset the date
  document.getElementById('date').value = '';

  // Hide the summary section
  document.querySelector('.summary').style.display = 'none';
}
function showRescheduleSection() {
  document.getElementById('rescheduleSection').style.display = 'block';
}

function rescheduleAppointment() {
  const newDate = document.getElementById('newDate').value;

  if (!newDate) {
      alert('Please choose a new date for rescheduling.');
      return;
  }

  // Update the summary with the new date
  document.getElementById('selectedDate').innerHTML = `<strong>Rescheduled Date:</strong> ${newDate}`;

  alert('Your appointment has been successfully rescheduled.');
}
///// patient record/////
function savePatientRecords() {
  const name = document.getElementById('patientName').value;
  const age = document.getElementById('patientAge').value;
  const contact = document.getElementById('patientContact').value;

  if (!name || !age || !contact) {
      alert('Please fill in all patient details.');
      return;
  }

  // Display saved patient information
  document.getElementById('patientNameDisplay').innerHTML = `<strong>Patient Name:</strong> ${name}`;
  document.getElementById('patientAgeDisplay').innerHTML = `<strong>Patient Age:</strong> ${age}`;
  document.getElementById('patientContactDisplay').innerHTML = `<strong>Contact Number:</strong> ${contact}`;
  document.getElementById('patientDetails').style.display = 'block';

  alert('Patient records have been saved.');
}
////// invoices /////
function generateInvoice() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selectedServices = [];
  let totalAmount = 0;

  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selectedServices.push(checkbox.nextElementSibling.textContent);
          totalAmount += parseInt(checkbox.value);
      }
  });

  if (selectedServices.length === 0) {
      alert('Please select at least one service to generate an invoice.');
      return;
  }

  // Display invoice
  document.getElementById('invoiceServices').innerHTML = `<strong>Services:</strong><br/>${selectedServices.join('<br/>')}`;
  document.getElementById('invoiceTotal').innerHTML = `<strong>Total Amount:</strong> ₹${totalAmount}`;
  document.getElementById('invoiceDetails').style.display = 'block';
}

function trackPayment() {
  const paymentStatus = document.getElementById('paymentStatus').value;
  alert(`Payment Status: ${paymentStatus}`);
}

////// sessions////
function generateReport() {
  const reportType = document.getElementById('reportType').value;
  let reportContent = '';

  if (reportType === 'weekly') {
      reportContent = 'This is the weekly report on therapy sessions.';
  } else if (reportType === 'monthly') {
      reportContent = 'This is the monthly report on therapy sessions.';
  }

  document.getElementById('reportContent').innerHTML = reportContent;
  document.getElementById('reportDetails').style.display = 'block';
}

//// cancellations///
function cancelAppointment() {
  if (confirm('Are you sure you want to cancel the appointment?')) {
      document.querySelector('.summary').style.display = 'none';
      document.getElementById('appointmentSummary').style.display = 'none';
      alert('Your appointment has been cancelled.');
  }
}



///////interactive page /////
// Function to open tabs with smooth animations
function openFeature(evt, featureName) {
  var i, tabcontent, tablink;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove active status from all tabs
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
  }

  // Show the current tab content with animation
  document.getElementById(featureName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Scroll-triggered animations
document.addEventListener('scroll', function () {
  const scrollSection = document.querySelector('.scroll-section');
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > scrollSection.offsetTop + scrollSection.offsetHeight / 2) {
      scrollSection.style.animation = 'fadeIn 1.5s forwards';
  }
});


///// contactpage////
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission (in real scenario, you'd send this data to the server)
  setTimeout(function() {
      document.getElementById('formMessage').innerText = `Thank you, ${name}! Your message has been sent.`;
      document.getElementById('contactForm').reset();
  }, 500);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission (in real scenario, you'd send this data to the server)
  setTimeout(function() {
      document.getElementById('formMessage').innerText = `Thank you, ${name}! Your message has been sent.`;
      document.getElementById('contactForm').reset();
  }, 500);
});