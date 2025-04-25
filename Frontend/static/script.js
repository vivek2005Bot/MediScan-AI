// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding tab pane
      const tabId = this.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
  
  // File upload preview for skin analysis
  const skinImage = document.getElementById('skin-image');
  const skinUploadArea = document.getElementById('skin-upload-area');
  const skinPreviewContainer = document.getElementById('skin-preview-container');
  const skinPreview = document.getElementById('skin-preview');
  const skinRemoveBtn = document.getElementById('skin-remove-btn');
  
  if (skinImage && skinUploadArea && skinPreviewContainer && skinPreview && skinRemoveBtn) {
    skinUploadArea.addEventListener('click', () => {
      skinImage.click();
    });
    
    skinUploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      skinUploadArea.classList.add('dragover');
    });
    
    skinUploadArea.addEventListener('dragleave', () => {
      skinUploadArea.classList.remove('dragover');
    });
    
    skinUploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      skinUploadArea.classList.remove('dragover');
      
      if (e.dataTransfer.files.length) {
        skinImage.files = e.dataTransfer.files;
        showPreview(skinImage, skinPreviewContainer, skinPreview);
      }
    });
    
    skinImage.addEventListener('change', () => {
      showPreview(skinImage, skinPreviewContainer, skinPreview);
    });
    
    skinRemoveBtn.addEventListener('click', () => {
      skinImage.value = '';
      skinPreviewContainer.style.display = 'none';
      skinUploadArea.style.display = 'block';
    });
  }
  
  // File upload preview for MRI scan
  const mriImage = document.getElementById('mri-image');
  const mriUploadArea = document.getElementById('mri-upload-area');
  const mriPreviewContainer = document.getElementById('mri-preview-container');
  const mriPreview = document.getElementById('mri-preview');
  const mriRemoveBtn = document.getElementById('mri-remove-btn');
  
  if (mriImage && mriUploadArea && mriPreviewContainer && mriPreview && mriRemoveBtn) {
    mriUploadArea.addEventListener('click', () => {
      mriImage.click();
    });
    
    mriUploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      mriUploadArea.classList.add('dragover');
    });
    
    mriUploadArea.addEventListener('dragleave', () => {
      mriUploadArea.classList.remove('dragover');
    });
    
    mriUploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      mriUploadArea.classList.remove('dragover');
      
      if (e.dataTransfer.files.length) {
        mriImage.files = e.dataTransfer.files;
        showPreview(mriImage, mriPreviewContainer, mriPreview);
      }
    });
    
    mriImage.addEventListener('change', () => {
      showPreview(mriImage, mriPreviewContainer, mriPreview);
    });
    
    mriRemoveBtn.addEventListener('click', () => {
      mriImage.value = '';
      mriPreviewContainer.style.display = 'none';
      mriUploadArea.style.display = 'block';
    });
  }
  
  // Chatbot toggle button
  const chatbotToggle = document.getElementById('chatbot-toggle');
  
  if (chatbotToggle) {
    chatbotToggle.addEventListener('click', function() {
      // Redirect to chatbot page or open chatbot interface
      alert('Redirecting to chatbot interface...');
      // window.location.href = '/chatbot.html';
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        e.preventDefault();
        
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // If we're showing a specific tab from a footer link
        if (this.getAttribute('href').includes('-tab')) {
          const tabId = this.getAttribute('href').replace('-tab', '').substring(1);
          
          // Find and click the corresponding tab button
          const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
          if (tabBtn) {
            tabBtn.click();
          }
        }
      }
    });
  });
});

// Function to show image preview
function showPreview(fileInput, previewContainer, previewImg) {
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      previewImg.src = e.target.result;
      previewContainer.style.display = 'block';
      fileInput.parentElement.style.display = 'none';
    };
    
    reader.readAsDataURL(fileInput.files[0]);
  }
}

// Form submission handling (for demonstration purposes)
document.addEventListener('submit', function(e) {
  const form = e.target;
  
  // Prevent actual form submission
  e.preventDefault();
  
  // Show a success message or simulate processing
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
  
  // Simulate API call/processing
  setTimeout(() => {
    form.innerHTML = `
      <div class="success-message">
        <i class="fas fa-check-circle"></i>
        <h3>Request Submitted Successfully!</h3>
        <p>Thank you for using our service. Your data has been received and is being processed.</p>
        <p>You will receive the results shortly.</p>
      </div>
    `;
  }, 2000);
});

// Add active class to current navigation item
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});