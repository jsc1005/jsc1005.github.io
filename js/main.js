// tiny entry script for Sarenade scaffold
document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
  console.log('Sarenade scaffold loaded');
  
  // Lashes service card click handler
  const lashesCard = document.querySelector('.service-lashes');
  const lashesModal = document.getElementById('lashes-modal');
  const modalClose = document.querySelector('#lashes-modal .modal-close');
  
  // Design consultation modal
  const designCard = document.querySelector('.service-design');
  const designModal = document.getElementById('design-modal');
  const designClose = document.querySelector('#design-modal .modal-close');
  
  if(lashesCard && lashesModal) {
    // Open modal on Lashes card click
    lashesCard.addEventListener('click', function() {
      lashesModal.classList.add('active');
    });
    
    // Close modal on close button click
    if(modalClose) {
      modalClose.addEventListener('click', function() {
        lashesModal.classList.remove('active');
      });
    }
    
    // Close modal on outside click
    lashesModal.addEventListener('click', function(e) {
      if(e.target === lashesModal) {
        lashesModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const lashesBookingLink = lashesModal.querySelector('.cta[href="#contact"]');
    if(lashesBookingLink) {
      lashesBookingLink.addEventListener('click', function() {
        lashesModal.classList.remove('active');
      });
    }
  }

  // Cuts & Styles modal handlers
  const cutsCard = document.querySelector('.service-cuts');
  const cutsModal = document.getElementById('cuts-modal');
  const cutsClose = document.querySelector('#cuts-modal .modal-close');
  
  if(cutsCard && cutsModal) {
    cutsCard.addEventListener('click', function() {
      cutsModal.classList.add('active');
    });
    if(cutsClose) {
      cutsClose.addEventListener('click', function() {
        cutsModal.classList.remove('active');
      });
    }
    cutsModal.addEventListener('click', function(e) {
      if(e.target === cutsModal) {
        cutsModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const cutsBookingLink = cutsModal.querySelector('.cta[href="#contact"]');
    if(cutsBookingLink) {
      cutsBookingLink.addEventListener('click', function() {
        cutsModal.classList.remove('active');
      });
    }
  }

  // Hair Extensions modal handlers
  const extensionsCard = document.querySelector('.service-extensions');
  const extensionsModal = document.getElementById('extensions-modal');
  const extensionsClose = document.querySelector('#extensions-modal .modal-close');
  
  if(extensionsCard && extensionsModal) {
    extensionsCard.addEventListener('click', function() {
      extensionsModal.classList.add('active');
    });
    if(extensionsClose) {
      extensionsClose.addEventListener('click', function() {
        extensionsModal.classList.remove('active');
      });
    }
    extensionsModal.addEventListener('click', function(e) {
      if(e.target === extensionsModal) {
        extensionsModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const extensionsBookingLink = extensionsModal.querySelector('.cta[href="#contact"]');
    if(extensionsBookingLink) {
      extensionsBookingLink.addEventListener('click', function() {
        extensionsModal.classList.remove('active');
      });
    }
  }

  // Make Up modal handlers
  const makeupCard = document.querySelector('.service-makeup');
  const makeupModal = document.getElementById('makeup-modal');
  const makeupClose = document.querySelector('#makeup-modal .modal-close');
  
  if(makeupCard && makeupModal) {
    makeupCard.addEventListener('click', function() {
      makeupModal.classList.add('active');
    });
    if(makeupClose) {
      makeupClose.addEventListener('click', function() {
        makeupModal.classList.remove('active');
      });
    }
    makeupModal.addEventListener('click', function(e) {
      if(e.target === makeupModal) {
        makeupModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const makeupBookingLink = makeupModal.querySelector('.cta[href="#contact"]');
    if(makeupBookingLink) {
      makeupBookingLink.addEventListener('click', function() {
        makeupModal.classList.remove('active');
      });
    }
  }

  // Coloring & Treatments modal handlers
  const coloringCard = document.querySelector('.service-coloring');
  const coloringModal = document.getElementById('coloring-modal');
  const coloringClose = document.querySelector('#coloring-modal .modal-close');
  
  if(coloringCard && coloringModal) {
    coloringCard.addEventListener('click', function() {
      coloringModal.classList.add('active');
    });
    if(coloringClose) {
      coloringClose.addEventListener('click', function() {
        coloringModal.classList.remove('active');
      });
    }
    coloringModal.addEventListener('click', function(e) {
      if(e.target === coloringModal) {
        coloringModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const coloringBookingLink = coloringModal.querySelector('.cta[href="#contact"]');
    if(coloringBookingLink) {
      coloringBookingLink.addEventListener('click', function() {
        coloringModal.classList.remove('active');
      });
    }
  }

  // Special Occasions modal handlers
  const occasionsCard = document.querySelector('.service-occasions');
  const occasionsModal = document.getElementById('occasions-modal');
  const occasionsClose = document.querySelector('#occasions-modal .modal-close');
  
  if(occasionsCard && occasionsModal) {
    occasionsCard.addEventListener('click', function() {
      occasionsModal.classList.add('active');
    });
    if(occasionsClose) {
      occasionsClose.addEventListener('click', function() {
        occasionsModal.classList.remove('active');
      });
    }
    occasionsModal.addEventListener('click', function(e) {
      if(e.target === occasionsModal) {
        occasionsModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const occasionsBookingLink = occasionsModal.querySelector('.cta[href="#contact"]');
    if(occasionsBookingLink) {
      occasionsBookingLink.addEventListener('click', function() {
        occasionsModal.classList.remove('active');
      });
    }
  }

  // Design modal handlers
  if(designCard && designModal) {
    designCard.addEventListener('click', function() {
      designModal.classList.add('active');
    });
    if(designClose) {
      designClose.addEventListener('click', function() {
        designModal.classList.remove('active');
      });
    }
    designModal.addEventListener('click', function(e) {
      if(e.target === designModal) {
        designModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const designBookingLink = designModal.querySelector('.cta[href="#contact"]');
    if(designBookingLink) {
      designBookingLink.addEventListener('click', function() {
        designModal.classList.remove('active');
      });
    }
  }

  // Treatments modal handlers
  const treatmentsCard = document.querySelector('.service-treatments');
  const treatmentsModal = document.getElementById('treatments-modal');
  const treatmentsClose = document.querySelector('#treatments-modal .modal-close');
  
  if(treatmentsCard && treatmentsModal) {
    treatmentsCard.addEventListener('click', function() {
      treatmentsModal.classList.add('active');
    });
    if(treatmentsClose) {
      treatmentsClose.addEventListener('click', function() {
        treatmentsModal.classList.remove('active');
      });
    }
    treatmentsModal.addEventListener('click', function(e) {
      if(e.target === treatmentsModal) {
        treatmentsModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const treatmentsBookingLink = treatmentsModal.querySelector('.cta[href="#contact"]');
    if(treatmentsBookingLink) {
      treatmentsBookingLink.addEventListener('click', function() {
        treatmentsModal.classList.remove('active');
      });
    }
  }

  // Waxing modal handlers
  const waxingCard = document.querySelector('.service-waxing');
  const waxingModal = document.getElementById('waxing-modal');
  const waxingClose = document.querySelector('#waxing-modal .modal-close');
  
  if(waxingCard && waxingModal) {
    waxingCard.addEventListener('click', function() {
      waxingModal.classList.add('active');
    });
    if(waxingClose) {
      waxingClose.addEventListener('click', function() {
        waxingModal.classList.remove('active');
      });
    }
    waxingModal.addEventListener('click', function(e) {
      if(e.target === waxingModal) {
        waxingModal.classList.remove('active');
      }
    });

    // Close modal on "Book Your Appointment" link click
    const waxingBookingLink = waxingModal.querySelector('.cta[href="#contact"]');
    if(waxingBookingLink) {
      waxingBookingLink.addEventListener('click', function() {
        waxingModal.classList.remove('active');
      });
    }
  }

  // Handle booking form submission
  const bookingForm = document.querySelector('.contact-form');
  if(bookingForm) {
    bookingForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(bookingForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
      };

      try {
        const response = await fetch('http://localhost:3000/api/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if(response.ok) {
          alert('Booking request sent successfully!');
          bookingForm.reset();
        } else {
          alert('Failed to send booking request. Please try again.');
        }
      } catch(error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  }
});
