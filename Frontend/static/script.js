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