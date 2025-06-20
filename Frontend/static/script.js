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
        const reader = new FileReader();
        
        reader.onload = function(e) {
          mriPreview.src = e.target.result;
          mriPreviewContainer.style.display = 'block';
          mriUploadArea.style.display = 'none';
        };
        
        reader.readAsDataURL(mriImage.files[0]);
      }
    });
    
    mriImage.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          mriPreview.src = e.target.result;
          mriPreviewContainer.style.display = 'block';
          mriUploadArea.style.display = 'none';
        };
        
        reader.readAsDataURL(this.files[0]);
      }
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
  
  // AJAX form submission for predictions
  ajaxFormHandler('heart-form', '/predict/heart', 'heart-result');
  ajaxFormHandler('diabetes-form', '/predict/diabetes', 'diabetes-result');
  ajaxFormHandler('parkinsons-form', '/predict/parkinsons', 'parkinsons-result');

  // Modal logic for login/register
  injectAuthForms();

  // Modal open/close logic
  document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault();
    showAuthModal('login');
  });
  document.getElementById('register-btn').addEventListener('click', function(e) {
    e.preventDefault();
    showAuthModal('register');
  });
  document.getElementById('close-auth-modal').addEventListener('click', function() {
    hideAuthModal();
  });
  document.getElementById('modal-login-tab').addEventListener('click', function() {
    showAuthModal('login');
  });
  document.getElementById('modal-register-tab').addEventListener('click', function() {
    showAuthModal('register');
  });

  // AJAX login
  document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'modal-login-form-inner') {
      e.preventDefault();
      const username = document.getElementById('modal-login-username').value;
      const password = document.getElementById('modal-login-password').value;
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
      })
      .then(res => {
        if (res.redirected) {
          hideAuthModal();
          window.location.reload();
        } else if (res.status === 401) {
          document.getElementById('modal-login-error').innerText = 'Invalid username or password.';
          document.getElementById('modal-login-error').style.display = 'block';
        } else {
          return res.text().then(t => { throw new Error(t); });
        }
      })
      .catch(err => {
        document.getElementById('modal-login-error').innerText = err.message;
        document.getElementById('modal-login-error').style.display = 'block';
      });
    }
    // AJAX register
    if (e.target && e.target.id === 'modal-register-form-inner') {
      e.preventDefault();
      const username = document.getElementById('modal-register-username').value;
      const email = document.getElementById('modal-register-email').value;
      const password = document.getElementById('modal-register-password').value;
      fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      })
      .then(res => {
        if (res.status === 200) {
          hideAuthModal();
          window.location.reload();
        } else if (res.status === 400) {
          document.getElementById('modal-register-error').innerText = 'Username or email already exists.';
          document.getElementById('modal-register-error').style.display = 'block';
        } else {
          return res.text().then(t => { throw new Error(t); });
        }
      })
      .catch(err => {
        document.getElementById('modal-register-error').innerText = err.message;
        document.getElementById('modal-register-error').style.display = 'block';
      });
    }
  });

  // Protect features: if not logged in, clicking any .tab-btn or .chatbot-btn or .service-card opens modal
  function protectFeature(selector) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('click', function(e) {
        if (document.body.classList.contains('user-logged-out')) {
          e.preventDefault();
          e.stopPropagation();
          showAuthModal('login');
        }
      });
    });
  }
  protectFeature('.tab-btn');
  protectFeature('.chatbot-btn');
  protectFeature('.service-card');

  // User icon dropdown logic
  const userIcon = document.getElementById('user-icon');
  const userMenu = document.getElementById('user-menu');
  const userDropdown = document.getElementById('user-dropdown');
  if (userIcon && userMenu && userDropdown) {
    userIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      userMenu.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!userMenu.contains(e.target)) {
        userMenu.classList.remove('open');
      }
    });
  }
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

// AJAX form submission for predictions
function ajaxFormHandler(formId, endpoint, resultId) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const resultDiv = document.getElementById(resultId);
      resultDiv.innerHTML = '<span style="color: #007bff;">Processing...</span>';
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        resultDiv.innerHTML = `<div class="prediction-result"><h3>Prediction Result</h3><p class="prediction-text">${data.prediction}</p></div>`;
      } catch (err) {
        resultDiv.innerHTML = '<span style="color: red;">Error: Could not get prediction.</span>';
      }
    });
  }
}

// Skin Analysis Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const skinForm = document.getElementById('skin-form');
    const resultDiv = document.getElementById('skin-result');
    
    if (!skinForm || !resultDiv) {
        console.error('Required elements not found!');
        return;
    }
    
    skinForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const fileInput = document.getElementById('skin-image');
        if (!fileInput.files || fileInput.files.length === 0) {
            resultDiv.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-circle"></i>
                    Please select an image to analyze.
                </div>
            `;
            return;
        }
        
        const formData = new FormData(this);
        resultDiv.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Analyzing image...</div>';
        
        try {
            const response = await fetch('/skin-analysis', {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.predictions && data.predictions.length > 0) {
                let resultHTML = '<div class="prediction-result">';
                resultHTML += '<h3>Analysis Results</h3>';
                
                data.predictions.forEach((pred, index) => {
                    resultHTML += `
                        <div class="prediction-item ${index === 0 ? 'primary-prediction' : ''}">
                            <h4>${pred.condition}</h4>
                            <p class="description">${pred.description}</p>
                        </div>
                    `;
                });
                
                resultHTML += '</div>';
                resultDiv.innerHTML = resultHTML;
            } else {
                resultDiv.innerHTML = `
                    <div class="prediction-result">
                        <h3>Analysis Result</h3>
                        <p class="unidentified">Unable to confidently identify the condition. Please try with a clearer image.</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error during analysis:', error);
            resultDiv.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-circle"></i>
                    Error: ${error.message || 'Could not analyze image. Please try again.'}
                </div>
            `;
        }
    });
});

// Brain Tumor Detection Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const brainForm = document.getElementById('brain-form');
    const resultDiv = document.getElementById('brain-result');
    
    if (!brainForm || !resultDiv) {
        console.error('Required elements not found!');
        return;
    }
    
    brainForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const fileInput = document.getElementById('mri-image');
        if (!fileInput.files || fileInput.files.length === 0) {
            resultDiv.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-circle"></i>
                    Please select an MRI image to analyze.
                </div>
            `;
            return;
        }
        
        const formData = new FormData(this);
        resultDiv.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Analyzing MRI scan...</div>';
        
        try {
            const response = await fetch('/brain-tumor-detection', {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.prediction) {
                resultDiv.innerHTML = `
                    <div class="prediction-result">
                        <h3>Analysis Result</h3>
                        <div class="prediction-item ${data.prediction === 'Tumor Detected' ? 'warning' : 'success'}">
                            <h4>${data.prediction}</h4>
                            ${data.prediction === 'Tumor Detected' ? 
                                '<p class="warning-note"><i class="fas fa-exclamation-triangle"></i> Please consult a healthcare professional for further evaluation.</p>' : 
                                '<p class="success-note"><i class="fas fa-check-circle"></i> No tumor detected in the MRI scan.</p>'
                            }
                        </div>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div class="error">
                        <i class="fas fa-exclamation-circle"></i>
                        Unable to analyze the MRI scan. Please try again with a clearer image.
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error during analysis:', error);
            resultDiv.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-circle"></i>
                    Error: ${error.message || 'Could not analyze MRI scan. Please try again.'}
                </div>
            `;
        }
    });
});

// Modal logic for login/register
function injectAuthForms() {
  // Login form HTML
  const loginForm = `
    <form id="modal-login-form-inner">
      <div class="form-group">
        <label for="modal-login-username">Username</label>
        <input type="text" id="modal-login-username" name="username" required>
      </div>
      <div class="form-group">
        <label for="modal-login-password">Password</label>
        <input type="password" id="modal-login-password" name="password" required>
      </div>
      <button type="submit" class="btn primary-btn" style="width:100%;margin-top:1rem;">Login</button>
      <div id="modal-login-error" class="error" style="display:none;margin-top:0.5rem;"></div>
    </form>
  `;
  // Register form HTML
  const registerForm = `
    <form id="modal-register-form-inner">
      <div class="form-group">
        <label for="modal-register-username">Username</label>
        <input type="text" id="modal-register-username" name="username" required>
      </div>
      <div class="form-group">
        <label for="modal-register-email">Email</label>
        <input type="email" id="modal-register-email" name="email" required>
      </div>
      <div class="form-group">
        <label for="modal-register-password">Password</label>
        <input type="password" id="modal-register-password" name="password" required>
      </div>
      <button type="submit" class="btn primary-btn" style="width:100%;margin-top:1rem;">Register</button>
      <div id="modal-register-error" class="error" style="display:none;margin-top:0.5rem;"></div>
    </form>
  `;
  document.getElementById('modal-login-form').innerHTML = loginForm;
  document.getElementById('modal-register-form').innerHTML = registerForm;
}

function showAuthModal(tab) {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
  document.getElementById('modal-login-form').classList.remove('active');
  document.getElementById('modal-register-form').classList.remove('active');
  document.getElementById('modal-login-tab').classList.remove('active');
  document.getElementById('modal-register-tab').classList.remove('active');
  if (tab === 'register') {
    document.getElementById('modal-register-form').classList.add('active');
    document.getElementById('modal-register-tab').classList.add('active');
  } else {
    document.getElementById('modal-login-form').classList.add('active');
    document.getElementById('modal-login-tab').classList.add('active');
  }
}

function hideAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}