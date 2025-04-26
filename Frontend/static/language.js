// Multi-language support
document.addEventListener('DOMContentLoaded', function() {
  // Language translations
  const translations = {
    // English translations (default)
    en: {
      // Navigation
      'nav-home': 'Home',
      'nav-services': 'Services',
      'nav-diagnostic': 'Diagnostic Tools',
      'nav-contact': 'Contact',
      // Hero section
      'hero-title': 'Advanced Healthcare at Your Fingertips',
      'hero-description': 'Access cutting-edge diagnostic tools, professional healthcare advice, and emergency assistance all in one place.',
      'hero-cta-primary': 'Try Our Diagnostic Tools',
      'hero-cta-secondary': 'Explore Services',
      // Services section
      'services-title': 'Our Services',
      'services-description': 'Comprehensive healthcare solutions designed for your well-being',
      'service-heart-title': 'Heart Health Assessment',
      'service-heart-description': 'Early detection of heart disease risk factors through comprehensive analysis',
      'service-diabetes-title': 'Diabetes Screening',
      'service-diabetes-description': 'Advanced diabetes risk assessment and management guidelines',
      'service-parkinsons-title': 'Parkinson\'s Analysis',
      'service-parkinsons-description': 'Early signs detection through specialized symptom evaluation',
      'service-skin-title': 'Skin Condition Analysis',
      'service-skin-description': 'AI-powered skin condition assessment through image analysis',
      'service-mri-title': 'Brain MRI Evaluation',
      'service-mri-description': 'Advanced brain tumor detection through MRI scan analysis',
      'service-chatbot-title': 'AI Health Assistant',
      'service-chatbot-description': 'Get immediate answers to your health questions from our AI chatbot',
      'chatbot-btn': 'Chat Now',
      // Diagnostic section
      'diagnostic-title': 'Diagnostic Tools',
      'diagnostic-description': 'Advanced health assessment tools to monitor your well-being',
      'tab-heart': 'Heart Health',
      'tab-diabetes': 'Diabetes',
      'tab-parkinsons': 'Parkinson\'s',
      'tab-skin': 'Skin Analysis',
      'tab-brain': 'Brain MRI',
      // Heart form
      'heart-form-title': 'Heart Disease Risk Assessment',
      'heart-form-description': 'Fill in the details below for a preliminary heart health assessment',
      'heart-age': 'Age',
      'heart-gender': 'Gender',
      'heart-bp': 'Blood Pressure (mmHg)',
      'heart-cholesterol': 'Cholesterol (mg/dL)',
      'heart-sugar': 'Fasting Blood Sugar (mg/dL)',
      'heart-exercise': 'Regular Exercise?',
      // Diabetes form
      'diabetes-form-title': 'Diabetes Risk Assessment',
      'diabetes-form-description': 'Fill in the details below for a preliminary diabetes risk assessment',
      'diabetes-age': 'Age',
      'diabetes-glucose': 'Glucose Level (mg/dL)',
      'diabetes-bmi': 'BMI',
      'diabetes-insulin': 'Insulin Level (mu U/ml)',
      'diabetes-skin': 'Skin Thickness (mm)',
      'diabetes-family': 'Family History of Diabetes?',
      // Parkinson's form
      'parkinsons-form-title': 'Parkinson\'s Disease Assessment',
      'parkinsons-form-description': 'Fill in the details below for a preliminary Parkinson\'s disease assessment',
      'parkinsons-age': 'Age',
      'parkinsons-gender': 'Gender',
      'parkinsons-tremor': 'Do you experience tremors at rest?',
      'parkinsons-rigidity': 'Do you experience muscle stiffness or rigidity?',
      'parkinsons-balance': 'Do you have difficulty with balance or walking?',
      'parkinsons-speech': 'Have you noticed changes in your speech?',
      // Skin form
      'skin-form-title': 'Skin Condition Analysis',
      'skin-form-description': 'Upload a clear image of the affected skin area for analysis',
      'skin-upload': 'Drag & Drop or Click to Upload Image',
      'skin-upload-note': 'JPG, PNG or JPEG (Max 5MB)',
      'skin-duration': 'How long have you had this condition?',
      'skin-symptoms': 'Any additional symptoms?',
      // Brain MRI form
      'brain-form-title': 'Brain Tumor Detection',
      'brain-form-description': 'Upload an MRI scan image for brain tumor detection analysis',
      'mri-upload': 'Drag & Drop or Click to Upload MRI Scan',
      'mri-upload-note': 'JPG, PNG or JPEG (Max 10MB)',
      'mri-date': 'Date of MRI Scan',
      'mri-symptoms': 'Symptoms Experienced',
      // Common form elements
      'select-option': 'Select an option',
      'gender-male': 'Male',
      'gender-female': 'Female',
      'gender-other': 'Other',
      'option-yes': 'Yes',
      'option-no': 'No',
      'btn-analyze': 'Analyze',
      'duration-days': 'Days',
      'duration-weeks': 'Weeks',
      'duration-months': 'Months',
      'duration-years': 'Years',
      // Chatbot
      'chatbot-label': 'Chat with Health Assistant',
      // Contact section
      'contact-title': 'Contact Us',
      'contact-description': 'Reach out to our healthcare professionals for assistance',
      'contact-address-title': 'Address',
      'contact-address': '123 Healthcare Avenue, Medical District, New Delhi, 110001',
      'contact-phone-title': 'Phone',
      'contact-email-title': 'Email',
      'emergency-title': 'Emergency Contact',
      'emergency-ambulance': 'Ambulance Service',
      'emergency-helpline': 'National Health Helpline',
      'contact-form-title': 'Send Us a Message',
      'contact-name': 'Name',
      'contact-email': 'Email',
      'contact-phone': 'Phone',
      'contact-subject': 'Subject',
      'contact-message': 'Message',
      'btn-send': 'Send Message',
      // Footer
      'footer-about-title': 'About MediCare+',
      'footer-about-description': 'MediCare+ is a leading healthcare platform providing advanced diagnostic tools and medical services to ensure your well-being.',
      'footer-links-title': 'Quick Links',
      'footer-link-home': 'Home',
      'footer-link-services': 'Services',
      'footer-link-diagnostic': 'Diagnostic Tools',
      'footer-link-contact': 'Contact',
      'footer-link-privacy': 'Privacy Policy',
      'footer-link-terms': 'Terms of Service',
      'footer-services-title': 'Our Services',
      'footer-service-heart': 'Heart Health',
      'footer-service-diabetes': 'Diabetes',
      'footer-service-parkinsons': 'Parkinson\'s',
      'footer-service-skin': 'Skin Analysis',
      'footer-service-brain': 'Brain MRI',
      'footer-service-chatbot': 'AI Health Assistant',
      'footer-newsletter-title': 'Newsletter',
      'footer-newsletter-description': 'Subscribe to our newsletter for the latest health updates and tips.',
      'footer-copyright': '© 2025 MediCare+. All Rights Reserved.',
      'footer-disclaimer': 'Disclaimer: This website is for informational purposes only and is not a substitute for professional medical advice.'
    },

    // Hindi translations (Add missing ones if needed)
    hi: {
      'nav-home': 'होम',
      'nav-services': 'सेवाएं',
      'nav-diagnostic': 'डायग्नोस्टिक टूल्स',
      'nav-contact': 'संपर्क',
      'hero-title': 'उन्नत स्वास्थ्य देखभाल आपकी उंगलियों पर',
      'hero-description': 'अत्याधुनिक नैदानिक उपकरण, पेशेवर स्वास्थ्य सलाह और आपातकालीन सहायता एक ही स्थान पर प्राप्त करें।',
      'hero-cta-primary': 'हमारे नैदानिक उपकरण आज़माएं',
      'hero-cta-secondary': 'सेवाएं देखें',
      'services-title': 'हमारी सेवाएं',
      'services-description': 'आपके स्वास्थ्य के लिए डिज़ाइन की गई व्यापक स्वास्थ्य समाधान',
      'service-heart-title': 'हृदय स्वास्थ्य मूल्यांकन',
      'service-heart-description': 'व्यापक विश्लेषण के माध्यम से हृदय रोग के जोखिम कारकों का शीघ्र पता लगाना',
      'service-diabetes-title': 'मधुमेह स्क्रीनिंग',
      'service-diabetes-description': 'उन्नत मधुमेह जोखिम मूल्यांकन और प्रबंधन दिशानिर्देश',
      'service-parkinsons-title': 'पार्किंसंस विश्लेषण',
      'service-parkinsons-description': 'विशेष लक्षण मूल्यांकन के माध्यम से प्रारंभिक संकेतों का पता लगाना',
      'service-skin-title': 'त्वचा स्थिति विश्लेषण',
      'service-skin-description': 'AI-संचालित छवि विश्लेषण के माध्यम से त्वचा की स्थिति का मूल्यांकन',
      'service-mri-title': 'मस्तिष्क एमआरआई मूल्यांकन',
      'service-mri-description': 'एमआरआई स्कैन विश्लेषण के माध्यम से उन्नत मस्तिष्क ट्यूमर का पता लगाना',
      'service-chatbot-title': 'AI स्वास्थ्य सहायक',
      'service-chatbot-description': 'हमारे AI चैटबॉट से अपने स्वास्थ्य प्रश्नों के तत्काल उत्तर प्राप्त करें',
      'chatbot-btn': 'अभी चैट करें',
      'diagnostic-title': 'नैदानिक उपकरण',
      'diagnostic-description': 'आपके स्वास्थ्य की निगरानी के लिए उन्नत स्वास्थ्य मूल्यांकन उपकरण',
      'tab-heart': 'हृदय स्वास्थ्य',
      'tab-diabetes': 'मधुमेह',
      'tab-parkinsons': 'पार्किंसंस',
      'tab-skin': 'त्वचा विश्लेषण',
      'tab-brain': 'मस्तिष्क एमआरआई',
      'heart-form-title': 'हृदय रोग जोखिम मूल्यांकन', // Added Hindi
      'heart-form-description': 'प्रारंभिक हृदय स्वास्थ्य मूल्यांकन के लिए नीचे विवरण भरें', // Added Hindi
      'heart-age': '', // Added Hindi
      'heart-gender': '', // Added Hindi
      'heart-cp' : '',
      'heart-thalach' : '',
      'heart-exang' : '',
      'heart-oldpeak': '',
      'heart-slope' : '',
      'heart-ca' : '',
      'heart-thal' : '', 
      'diabetes-form-title': 'मधुमेह जोखिम मूल्यांकन', // Added Hindi
      'diabetes-form-description': 'प्रारंभिक मधुमेह जोखिम मूल्यांकन के लिए नीचे विवरण भरें', // Added Hindi
      'parkinsons-form-title': 'पार्किंसंस रोग मूल्यांकन', // Added Hindi
      'parkinsons-form-description': 'प्रारंभिक पार्किंसंस रोग मूल्यांकन के लिए नीचे विवरण भरें', // Added Hindi
      'skin-form-title': 'त्वचा स्थिति विश्लेषण', // Added Hindi
      'skin-form-description': 'विश्लेषण के लिए प्रभावित त्वचा क्षेत्र की स्पष्ट छवि अपलोड करें', // Added Hindi
      'skin-upload': 'छवि अपलोड करने के लिए खींचें और छोड़ें या क्लिक करें', // Added Hindi
      'skin-upload-note': 'JPG, PNG या JPEG (अधिकतम 5MB)', // Added Hindi
      'skin-duration': 'आपको यह स्थिति कब से है?', // Added Hindi
      'skin-symptoms': 'कोई अतिरिक्त लक्षण?', // Added Hindi
      'brain-form-title': 'ब्रेन ट्यूमर का पता लगाना', // Added Hindi
      'brain-form-description': 'ब्रेन ट्यूमर डिटेक्शन विश्लेषण के लिए एमआरआई स्कैन छवि अपलोड करें', // Added Hindi
      'mri-upload': 'एमआरआई स्कैन अपलोड करने के लिए खींचें और छोड़ें या क्लिक करें', // Added Hindi
      'mri-upload-note': 'JPG, PNG या JPEG (अधिकतम 10MB)', // Added Hindi
      'mri-date': 'एमआरआई स्कैन की तारीख', // Added Hindi
      'mri-symptoms': 'अनुभवी लक्षण', // Added Hindi
      'select-option': 'एक विकल्प चुनें',
      'gender-male': 'पुरुष',
      'gender-female': 'महिला',
      'gender-other': 'अन्य',
      'option-yes': 'हां',
      'option-no': 'नहीं',
      'btn-analyze': 'विश्लेषण करें',
      'duration-days': 'दिन', // Added Hindi
      'duration-weeks': 'सप्ताह', // Added Hindi
      'duration-months': 'महीने', // Added Hindi
      'duration-years': 'साल', // Added Hindi
      'chatbot-label': 'स्वास्थ्य सहायक से चैट करें',
      'contact-title': 'संपर्क करें',
      'contact-description': 'सहायता के लिए हमारे स्वास्थ्य पेशेवरों से संपर्क करें',
      'contact-address-title': 'पता', // Added Hindi
      'contact-address': '123 हेल्थकेयर एवेन्यू, मेडिकल डिस्ट्रिक्ट, नई दिल्ली, 110001', // Added Hindi (Address often kept in English/local script)
      'contact-phone-title': 'फ़ोन', // Added Hindi
      'contact-email-title': 'ईमेल', // Added Hindi
      'emergency-title': 'आपातकालीन संपर्क', // Added Hindi
      'emergency-ambulance': 'एम्बुलेंस सेवा', // Added Hindi
      'emergency-helpline': 'राष्ट्रीय स्वास्थ्य हेल्पलाइन', // Added Hindi
      'contact-form-title': 'हमें एक संदेश भेजें', // Added Hindi
      'contact-name': 'नाम', // Added Hindi
      'contact-email': 'ईमेल', // Added Hindi
      'contact-phone': 'फ़ोन', // Added Hindi
      'contact-subject': 'विषय', // Added Hindi
      'contact-message': 'संदेश', // Added Hindi
      'btn-send': 'संदेश भेजें', // Added Hindi
      'footer-about-title': 'मेडीकेयर+ के बारे में', // Added Hindi
      'footer-about-description': 'मेडीकेयर+ एक प्रमुख स्वास्थ्य सेवा मंच है जो आपकी भलाई सुनिश्चित करने के लिए उन्नत नैदानिक उपकरण और चिकित्सा सेवाएं प्रदान करता है।', // Added Hindi
      'footer-links-title': 'त्वरित लिंक्स', // Added Hindi
      'footer-link-home': 'होम', // Added Hindi
      'footer-link-services': 'सेवाएं', // Added Hindi
      'footer-link-diagnostic': 'डायग्नोस्टिक टूल्स', // Added Hindi
      'footer-link-contact': 'संपर्क', // Added Hindi
      'footer-link-privacy': 'गोपनीयता नीति', // Added Hindi
      'footer-link-terms': 'सेवा की शर्तें', // Added Hindi
      'footer-services-title': 'हमारी सेवाएं', // Added Hindi
      'footer-service-heart': 'हृदय स्वास्थ्य', // Added Hindi
      'footer-service-diabetes': 'मधुमेह', // Added Hindi
      'footer-service-parkinsons': 'पार्किंसंस', // Added Hindi
      'footer-service-skin': 'त्वचा विश्लेषण', // Added Hindi
      'footer-service-brain': 'मस्तिष्क एमआरआई', // Added Hindi
      'footer-service-chatbot': 'AI स्वास्थ्य सहायक', // Added Hindi
      'footer-newsletter-title': 'न्यूज़लेटर', // Added Hindi
      'footer-newsletter-description': 'नवीनतम स्वास्थ्य अपडेट और सुझावों के लिए हमारे न्यूज़लेटर की सदस्यता लें।', // Added Hindi
      'footer-copyright': '© 2025 मेडिकेयर+. सर्वाधिकार सुरक्षित।',
      'footer-disclaimer': 'अस्वीकरण: यह वेबसाइट केवल जानकारी के उद्देश्य से है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है।'
    },

    // Bengali translations (Add missing ones using English placeholders)
    bn: {
      'nav-home': 'হোম',
      'nav-services': 'সেবা',
      'nav-diagnostic': 'ডায়াগনস্টিক টুলস',
      'nav-contact': 'যোগাযোগ',
      'hero-title': 'আপনার আঙুলের ডগায় উন্নত স্বাস্থ্যসেবা',
      'hero-description': 'উন্নত ডায়াগনস্টিক টুলস, পেশাদার স্বাস্থ্য পরামর্শ, এবং জরুরি সহায়তা সব এক জায়গায় পান।',
      'hero-cta-primary': 'আমাদের ডায়াগনস্টিক টুলস ব্যবহার করুন',
      'hero-cta-secondary': 'সেবাসমূহ অন্বেষণ করুন',
      'services-title': 'আমাদের সেবাসমূহ',
      'services-description': 'আপনার সুস্থতার জন্য ব্যাপক স্বাস্থ্যসেবা সমাধান',
      'service-heart-title': 'হৃদরোগ মূল্যায়ন',
      'service-heart-description': 'বিশ্লেষণের মাধ্যমে হৃদরোগের ঝুঁকির প্রাথমিক সনাক্তকরণ',
      'service-diabetes-title': 'ডায়াবেটিস স্ক্রিনিং',
      'service-diabetes-description': 'উন্নত ডায়াবেটিস ঝুঁকি মূল্যায়ন ও ব্যবস্থাপনা নির্দেশিকা',
      'service-parkinsons-title': 'পারকিনসনের বিশ্লেষণ',
      'service-parkinsons-description': 'বিশেষ উপসর্গ মূল্যায়নের মাধ্যমে প্রাথমিক লক্ষণ সনাক্তকরণ',
      'service-skin-title': 'চর্মরোগ বিশ্লেষণ',
      'service-skin-description': 'ছবির মাধ্যমে এআই চালিত চর্মরোগ মূল্যায়ন',
      'service-mri-title': 'মস্তিষ্ক এমআরআই মূল্যায়ন',
      'service-mri-description': 'এমআরআই স্ক্যান বিশ্লেষণের মাধ্যমে মস্তিষ্ক টিউমার সনাক্তকরণ',
      'service-chatbot-title': 'এআই স্বাস্থ্য সহকারী',
      'service-chatbot-description': 'আমাদের এআই চ্যাটবট থেকে আপনার স্বাস্থ্য সম্পর্কিত প্রশ্নের তাৎক্ষণিক উত্তর পান',
      'chatbot-btn': 'এখনই চ্যাট করুন',
      'diagnostic-title': 'ডায়াগনস্টিক টুলস',
      'diagnostic-description': 'আপনার সুস্থতা পর্যবেক্ষণের জন্য উন্নত স্বাস্থ্য মূল্যায়ন টুলস',
      'tab-heart': 'হৃদরোগ',
      'tab-diabetes': 'ডায়াবেটিস',
      'tab-parkinsons': 'পারকিনসন\'স',
      'tab-skin': 'চর্ম বিশ্লেষণ',
      'tab-brain': 'মস্তিষ্ক এমআরআই',
      'heart-form-title': 'হৃদরোগ ঝুঁকি মূল্যায়ন',
      'heart-form-description': 'প্রাথমিক হৃদরোগ মূল্যায়নের জন্য নিচের বিবরণ পূরণ করুন',
      'diabetes-form-title': 'ডায়াবেটিস ঝুঁকি মূল্যায়ন',
      'diabetes-form-description': 'প্রাথমিক ডায়াবেটিস মূল্যায়নের জন্য নিচের বিবরণ পূরণ করুন',
      'parkinsons-form-title': 'পারকিনসনের রোগ মূল্যায়ন',
      'parkinsons-form-description': 'প্রাথমিক পারকিনসনের রোগ মূল্যায়নের জন্য নিচের বিবরণ পূরণ করুন',
      'skin-form-title': 'চর্মরোগ বিশ্লেষণ',
      'skin-form-description': 'বিশ্লেষণের জন্য আক্রান্ত চর্মের একটি স্পষ্ট ছবি আপলোড করুন',
      'skin-upload': 'ছবি টেনে আনুন বা ক্লিক করে আপলোড করুন',
      'skin-upload-note': 'JPG, PNG অথবা JPEG (সর্বোচ্চ ৫MB)',
      'skin-duration': 'এই সমস্যাটি কতদিন ধরে রয়েছে?',
      'skin-symptoms': 'অতিরিক্ত উপসর্গ আছে কি?',
      'brain-form-title': 'মস্তিষ্ক টিউমার সনাক্তকরণ',
      'brain-form-description': 'বিশ্লেষণের জন্য একটি এমআরআই স্ক্যান ছবি আপলোড করুন',
      'mri-upload': 'এমআরআই স্ক্যান টেনে আনুন বা ক্লিক করে আপলোড করুন',
      'mri-upload-note': 'JPG, PNG অথবা JPEG (সর্বোচ্চ ১০MB)',
      'mri-date': 'এমআরআই স্ক্যানের তারিখ',
      'mri-symptoms': 'অভিজ্ঞ উপসর্গসমূহ',
      'select-option': 'একটি অপশন নির্বাচন করুন',
      'gender-male': 'পুরুষ',
      'gender-female': 'মহিলা',
      'gender-other': 'অন্যান্য',
      'option-yes': 'হ্যাঁ',
      'option-no': 'না',
      'btn-analyze': 'বিশ্লেষণ করুন',
      'duration-days': 'দিন',
      'duration-weeks': 'সপ্তাহ',
      'duration-months': 'মাস',
      'duration-years': 'বছর',
      'chatbot-label': 'স্বাস্থ্য সহকারীর সাথে চ্যাট করুন',
      'contact-title': 'যোগাযোগ করুন',
      'contact-description': 'সহায়তার জন্য আমাদের স্বাস্থ্যসেবা পেশাদারদের সাথে যোগাযোগ করুন',
      'contact-address-title': 'ঠিকানা',
      'contact-address': '১২৩ হেলথকেয়ার অ্যাভিনিউ, মেডিকেল জেলা, নয়াদিল্লি, ১১০০০১',
      'contact-phone-title': 'ফোন',
      'contact-email-title': 'ইমেইল',
      'emergency-title': 'জরুরি যোগাযোগ',
      'emergency-ambulance': 'অ্যাম্বুলেন্স সার্ভিস',
      'emergency-helpline': 'জাতীয় স্বাস্থ্য সহায়তা লাইন',
      'contact-form-title': 'আমাদের বার্তা পাঠান',
      'contact-name': 'নাম',
      'contact-email': 'ইমেইল',
      'contact-phone': 'ফোন',
      'contact-subject': 'বিষয়',
      'contact-message': 'বার্তা',
      'btn-send': 'বার্তা পাঠান',
      'footer-about-title': 'মেডিকেয়ার+ সম্পর্কে',
      'footer-about-description': 'মেডিকেয়ার+ একটি অগ্রণী স্বাস্থ্যসেবা প্ল্যাটফর্ম যা উন্নত ডায়াগনস্টিক টুলস এবং চিকিৎসা সেবা প্রদান করে আপনার সুস্থতা নিশ্চিত করে।',
      'footer-links-title': 'দ্রুত লিংকসমূহ',
      'footer-link-home': 'হোম',
      'footer-link-services': 'সেবা',
      'footer-link-diagnostic': 'ডায়াগনস্টিক টুলস',
      'footer-link-contact': 'যোগাযোগ',
      'footer-link-privacy': 'গোপনীয়তা নীতি',
      'footer-link-terms': 'পরিষেবা শর্তাবলী',
      'footer-services-title': 'আমাদের সেবাসমূহ',
      'footer-service-heart': 'হৃদরোগ',
      'footer-service-diabetes': 'ডায়াবেটিস',
      'footer-service-parkinsons': 'পারকিনসন\'স',
      'footer-service-skin': 'চর্ম বিশ্লেষণ',
      'footer-service-brain': 'মস্তিষ্ক এমআরআই',
      'footer-service-chatbot': 'এআই স্বাস্থ্য সহকারী',
      'footer-newsletter-title': 'নিউজলেটার',
      'footer-newsletter-description': 'সর্বশেষ স্বাস্থ্য আপডেট ও টিপস পেতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন।',
      'footer-copyright': '© ২০২৫ মেডিকেয়ার+। সর্বস্বত্ব সংরক্ষিত।',
      'footer-disclaimer': 'দায়ত্যাগ: এই ওয়েবসাইটটি শুধুমাত্র তথ্যের উদ্দেশ্যে এবং এটি পেশাদার চিকিৎসা পরামর্শের বিকল্প নয়।'
    },
    

    // Odia translations (Placeholder - NEEDS ACTUAL TRANSLATION)
    or: {
      'nav-home': 'ହୋମ୍',
      'nav-services': 'ସେବା',
      'nav-diagnostic': 'ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ଟୁଲ୍ସ',
      'nav-contact': 'ଯୋଗାଯୋଗ',
      'hero-title': 'ଆପଣଙ୍କ ଆଙ୍ଗୁଳି ଟିପ୍‌ରେ ଉନ୍ନତ ସ୍ୱାସ୍ଥ୍ୟସେବା',
      'hero-description': 'ଉନ୍ନତ ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ଟୁଲ୍ସ, ପେଶାଦାର ସ୍ୱାସ୍ଥ୍ୟ ପରାମର୍ଶ ଏବଂ ଆପାତକାଳୀନ ସହାୟତା ଏକେଠାରେ ମିଳନ୍ତୁ।',
      'hero-cta-primary': 'ଆମର ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ଟୁଲ୍ସ ବ୍ୟବହାର କରନ୍ତୁ',
      'hero-cta-secondary': 'ସେବାଗୁଡିକ ଅନ୍ୱେଷଣ କରନ୍ତୁ',
      'services-title': 'ଆମର ସେବାଗୁଡିକ',
      'services-description': 'ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ସ୍ୱାସ୍ଥ୍ୟ ସମାଧାନ',
      'service-heart-title': 'ହୃଦରୋଗ ମୂଲ୍ୟାୟନ',
      'service-heart-description': 'ବିଶ୍ଳେଷଣ ମାଧ୍ୟମରେ ହୃଦରୋଗ ଜଣା ପୂର୍ବ ଜୋଖିମ ସନାକ୍ତ',
      'service-diabetes-title': 'ଡାୟାବେଟିସ୍ ସ୍କ୍ରିନିଂ',
      'service-diabetes-description': 'ଉନ୍ନତ ଡାୟାବେଟିସ୍ ଜୋଖିମ ମୂଲ୍ୟାୟନ ଓ ପରିଚାଳନା ନିର୍ଦ୍ଦେଶିକା',
      'service-parkinsons-title': 'ପାର୍କିନସନ୍ ବିଶ୍ଳେଷଣ',
      'service-parkinsons-description': 'ବିଶେଷ ଲକ୍ଷଣ ବିଶ୍ଳେଷଣ ମାଧ୍ୟମରେ ପ୍ରାରମ୍ଭିକ ଲକ୍ଷଣ ସନାକ୍ତ',
      'service-skin-title': 'ଚର୍ମରୋଗ ବିଶ୍ଳେଷଣ',
      'service-skin-description': 'ଛବି ମାଧ୍ୟମରେ AI ଚାଲିତ ଚର୍ମରୋଗ ବିଶ୍ଳେଷଣ',
      'service-mri-title': 'ମସ୍ତିଷ୍କ MRI ମୂଲ୍ୟାୟନ',
      'service-mri-description': 'MRI ସ୍କ୍ୟାନ ବିଶ୍ଳେଷଣ ମାଧ୍ୟମରେ ମସ୍ତିଷ୍କ ଟ୍ୟୁମର ସନାକ୍ତ',
      'service-chatbot-title': 'AI ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ',
      'service-chatbot-description': 'ଆମ AI ଚାଟବୋଟ ଠାରୁ ତୁରନ୍ତ ସ୍ୱାସ୍ଥ୍ୟ ଉତ୍ତର ପାଆନ୍ତୁ',
      'chatbot-btn': 'ଏବେ ଚାଟ୍ କରନ୍ତୁ',
      'diagnostic-title': 'ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ଟୁଲ୍ସ',
      'diagnostic-description': 'ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ପରିଚାଳନା ପାଇଁ ଉନ୍ନତ ମୂଲ୍ୟାୟନ ଟୁଲ୍ସ',
      'tab-heart': 'ହୃଦରୋଗ',
      'tab-diabetes': 'ଡାୟାବେଟିସ୍',
      'tab-parkinsons': 'ପାର୍କିନସନ୍',
      'tab-skin': 'ଚର୍ମ ବିଶ୍ଳେଷଣ',
      'tab-brain': 'ମସ୍ତିଷ୍କ MRI',
      'heart-form-title': 'ହୃଦରୋଗ ଜୋଖିମ ମୂଲ୍ୟାୟନ',
      'heart-form-description': 'ପ୍ରାରମ୍ଭିକ ହୃଦରୋଗ ମୂଲ୍ୟାୟନ ପାଇଁ ତଳେ ତଥ୍ୟ ଭରନ୍ତୁ',
      'diabetes-form-title': 'ଡାୟାବେଟିସ୍ ଜୋଖିମ ମୂଲ୍ୟାୟନ',
      'diabetes-form-description': 'ପ୍ରାରମ୍ଭିକ ଡାୟାବେଟିସ୍ ମୂଲ୍ୟାୟନ ପାଇଁ ତଳେ ତଥ୍ୟ ଭରନ୍ତୁ',
      'parkinsons-form-title': 'ପାର୍କିନସନ୍ ରୋଗ ମୂଲ୍ୟାୟନ',
      'parkinsons-form-description': 'ପ୍ରାରମ୍ଭିକ ପାର୍କିନସନ୍ ରୋଗ ମୂଲ୍ୟାୟନ ପାଇଁ ତଳେ ତଥ୍ୟ ଭରନ୍ତୁ',
      'skin-form-title': 'ଚର୍ମରୋଗ ବିଶ୍ଳେଷଣ',
      'skin-form-description': 'ବିଶ୍ଳେଷଣ ପାଇଁ ପ୍ରଭାବିତ ଚର୍ମର ଏକ ସ୍ପଷ୍ଟ ଛବି ଅପଲୋଡ୍ କରନ୍ତୁ',
      'skin-upload': 'ଛବି ଟାଣନ୍ତୁ କିମ୍ବା କ୍ଲିକ୍ କରି ଅପଲୋଡ୍ କରନ୍ତୁ',
      'skin-upload-note': 'JPG, PNG କିମ୍ବା JPEG (ସର୍ବାଧିକ ୫MB)',
      'skin-duration': 'ଏହି ସମସ୍ୟା କେତେ ଦିନ ହେଲା?',
      'skin-symptoms': 'ଅତିରିକ୍ତ ଲକ୍ଷଣ ଅଛି କି?',
      'brain-form-title': 'ମସ୍ତିଷ୍କ ଟ୍ୟୁମର ସନାକ୍ତ',
      'brain-form-description': 'ବିଶ୍ଳେଷଣ ପାଇଁ ଏକ MRI ସ୍କ୍ୟାନ୍ ଛବି ଅପଲୋଡ୍ କରନ୍ତୁ',
      'mri-upload': 'MRI ସ୍କ୍ୟାନ୍ ଟାଣନ୍ତୁ କିମ୍ବା କ୍ଲିକ୍ କରି ଅପଲୋଡ୍ କରନ୍ତୁ',
      'mri-upload-note': 'JPG, PNG କିମ୍ବା JPEG (ସର୍ବାଧିକ ୧୦MB)',
      'mri-date': 'MRI ସ୍କ୍ୟାନ୍ ତାରିଖ',
      'mri-symptoms': 'ଅନୁଭୂତ ଲକ୍ଷଣ',
      'select-option': 'ଏକ ବିକଳ୍ପ ବାଛନ୍ତୁ',
      'gender-male': 'ପୁରୁଷ',
      'gender-female': 'ମହିଳା',
      'gender-other': 'ଅନ୍ୟ',
      'option-yes': 'ହଁ',
      'option-no': 'ନା',
      'btn-analyze': 'ବିଶ୍ଳେଷଣ କରନ୍ତୁ',
      'duration-days': 'ଦିନ',
      'duration-weeks': 'ସପ୍ତାହ',
      'duration-months': 'ମାସ',
      'duration-years': 'ବର୍ଷ',
      'chatbot-label': 'ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ ସହିତ ଚାଟ୍ କରନ୍ତୁ',
      'contact-title': 'ଯୋଗାଯୋଗ କରନ୍ତୁ',
      'contact-description': 'ସାହାଯ୍ୟ ପାଇଁ ଆମ ସ୍ୱାସ୍ଥ୍ୟ ବିଶେଷଜ୍ଞଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ',
      'contact-address-title': 'ଠିକଣା',
      'contact-address': '୧୨୩ ହେଲ୍ଥକେୟାର ଅଭେନ୍ୟୁ, ମେଡିକାଲ୍ ଜିଲ୍ଲା, ନୂଆଦିଲ୍ଲୀ, ୧୧୦୦୦୧',
      'contact-phone-title': 'ଫୋନ୍',
      'contact-email-title': 'ଇମେଲ୍',
      'emergency-title': 'ଜରୁରୀ ସଂଯୋଗ',
      'emergency-ambulance': 'ଆମ୍ବୁଲାନ୍ସ ସେବା',
      'emergency-helpline': 'ରାଷ୍ଟ୍ରୀୟ ସ୍ୱାସ୍ଥ୍ୟ ସହାୟତା ଲାଇନ୍',
      'contact-form-title': 'ଆମକୁ ବାର୍ତ୍ତା ପଠାନ୍ତୁ',
      'contact-name': 'ନାମ',
      'contact-email': 'ଇମେଲ୍',
      'contact-phone': 'ଫୋନ୍',
      'contact-subject': 'ବିଷୟ',
      'contact-message': 'ବାର୍ତ୍ତା',
      'btn-send': 'ବାର୍ତ୍ତା ପଠାନ୍ତୁ',
      'footer-about-title': 'Medicare+ ବିଷୟରେ',
      'footer-about-description': 'Medicare+ ହେଉଛି ଏକ ଅଗ୍ରଣୀ ସ୍ୱାସ୍ଥ୍ୟ ପ୍ଲାଟଫର୍ମ ଯାହା ଉନ୍ନତ ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ଟୁଲ୍ସ ଓ ଚିକିତ୍ସା ସେବା ଦେଇଥାଏ।',
      'footer-links-title': 'ଦ୍ରୁତ ଲିଙ୍କଗୁଡିକ',
      'footer-link-home': 'ହୋମ୍',
      'footer-link-services': 'ସେବା',
      'footer-link-diagnostic': 'ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ଟୁଲ୍ସ',
      'footer-link-contact': 'ଯୋଗାଯୋଗ',
      'footer-link-privacy': 'ଗୋପନୀୟତା ନୀତି',
      'footer-link-terms': 'ସେବା ସର୍ତ୍ତାବଳୀ',
      'footer-services-title': 'ଆମ ସେବାଗୁଡିକ',
      'footer-service-heart': 'ହୃଦରୋଗ',
      'footer-service-diabetes': 'ଡାୟାବେଟିସ୍',
      'footer-service-parkinsons': 'ପାର୍କିନସନ୍',
      'footer-service-skin': 'ଚର୍ମ ବିଶ୍ଳେଷଣ',
      'footer-service-brain': 'ମସ୍ତିଷ୍କ MRI',
      'footer-service-chatbot': 'AI ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ',
      'footer-newsletter-title': 'ନ୍ୟୁଜଲେଟର୍',
      'footer-newsletter-description': 'ନୂତନ ସ୍ୱାସ୍ଥ୍ୟ ଅପଡେଟ୍ ଓ ଟିପ୍ସ ପାଇଁ ଆମ ନ୍ୟୁଜଲେଟର୍ ସବସ୍କ୍ରାଇବ୍ କରନ୍ତୁ।',
      'footer-copyright': '© ୨୦୨୫ Medicare+। ସମସ୍ତ ସ୍ୱାଧିନତା ସଂରକ୍ଷିତ।',
      'footer-disclaimer': 'ତ୍ୟାଗ: ଏହି ୱେବସାଇଟ୍ କେବଳ ତଥ୍ୟ ଉଦ୍ଦେଶ୍ୟରେ ଓ ଏହା ବୃହତ୍ ଚିକିତ୍ସା ପରାମର୍ଶ ପାଇଁ ବିକଳ୍ପ ନୁହେଁ।'
    },
    

    // Tamil translations (Add missing ones using English placeholders)
    ta: {
      'nav-home': 'முகப்பு',
      'nav-services': 'சேவைகள்',
      'nav-diagnostic': 'நோயறிதல் கருவிகள்',
      'nav-contact': 'தொடர்பு கொள்ள',
      'hero-title': 'உங்கள் விரல்துப்பியில் மேம்பட்ட சுகாதார சேவைகள்',
      'hero-description': 'மேம்பட்ட நோயறிதல் கருவிகள், நிபுணர் மருத்துவ ஆலோசனைகள் மற்றும் அவசர உதவிகள்—all in one place.',
      'hero-cta-primary': 'நோயறிதல் கருவிகளைப் பயன்படுத்துங்கள்',
      'hero-cta-secondary': 'சேவைகளை ஆராயுங்கள்',
      'services-title': 'எங்கள் சேவைகள்',
      'services-description': 'உங்கள் நலனுக்கான முழுமையான சுகாதாரத் தீர்வுகள்',
      'service-heart-title': 'இதய நோய் மதிப்பீடு',
      'service-heart-description': 'இதய நோய்களின் அபாயத்தை முன்கூட்டியே கண்டறிதல்',
      'service-diabetes-title': 'நீரிழிவு பரிசோதனை',
      'service-diabetes-description': 'நீரிழிவு அபாய மதிப்பீடு மற்றும் மேலாண்மை வழிகாட்டுதல்',
      'service-parkinsons-title': 'பார்கின்சன்ஸ் பகுப்பாய்வு',
      'service-parkinsons-description': 'அதிகரி அறிகுறிகளை மூலமாக முன்கூட்டியே கண்டறிதல்',
      'service-skin-title': 'தோல் நோய் பகுப்பாய்வு',
      'service-skin-description': 'படங்களை அடிப்படையாகக் கொண்டு AI சார்ந்த தோல் மதிப்பீடு',
      'service-mri-title': 'மூளை எம்.ஆர்.ஐ மதிப்பீடு',
      'service-mri-description': 'மூளை ட்யூமர்களைக் கண்டறிய எம்.ஆர்.ஐ படங்களை பகுப்பாய்வு செய்கிறது',
      'service-chatbot-title': 'AI சுகாதார உதவியாளர்',
      'service-chatbot-description': 'உங்கள் சுகாதாரக் கேள்விகளுக்கு உடனடி பதில்கள் பெறவும்',
      'chatbot-btn': 'இப்போது அரட்டையடிக்கவும்',
      'diagnostic-title': 'நோயறிதல் கருவிகள்',
      'diagnostic-description': 'உங்கள் நலனை கண்காணிக்க மேம்பட்ட சுகாதார கருவிகள்',
      'tab-heart': 'இதயம்',
      'tab-diabetes': 'நீரிழிவு',
      'tab-parkinsons': 'பார்கின்சன்ஸ்',
      'tab-skin': 'தோல் பகுப்பாய்வு',
      'tab-brain': 'மூளை எம்.ஆர்.ஐ',
      'heart-form-title': 'இதய நோய் அபாய மதிப்பீடு',
      'heart-form-description': 'முன் இதய மதிப்பீடு செய்ய கீழுள்ள விவரங்களை நிரப்பவும்',
      'heart-age': '', // Added Hindi
      'heart-gender': '', // Added Hindi
      'heart-cp' : '',
      'heart-thalach' : '',
      'heart-exang' : '',
      'heart-oldpeak': '',
      'heart-slope' : '',
      'heart-ca' : '',
      'heart-thal' : '',
      'diabetes-form-title': 'நீரிழிவு அபாய மதிப்பீடு',
      'diabetes-form-description': 'முன் நீரிழிவு மதிப்பீடு செய்ய கீழுள்ள விவரங்களை நிரப்பவும்',
      'parkinsons-form-title': 'பார்கின்சன்ஸ் மதிப்பீடு',
      'parkinsons-form-description': 'முன் பார்கின்சன்ஸ் மதிப்பீடு செய்ய விவரங்களை நிரப்பவும்',
      'skin-form-title': 'தோல் நோய் பகுப்பாய்வு',
      'skin-form-description': 'தோல் பிரச்சனையை கொண்ட ஒரு தெளிவான புகைப்படத்தை பதிவேற்றவும்',
      'skin-upload': 'படத்தை இழுத்து விடுங்கள் அல்லது கிளிக் செய்து பதிவேற்றவும்',
      'skin-upload-note': 'JPG, PNG அல்லது JPEG (அதிகபட்சம் 5MB)',
      'skin-duration': 'இந்த பிரச்சனை எவ்வளவு நாளாக இருக்கிறது?',
      'skin-symptoms': 'மேலும் அறிகுறிகள் உள்ளனவா?',
      'brain-form-title': 'மூளை ட்யூமர் கண்டறிதல்',
      'brain-form-description': 'பகுப்பாய்விற்காக எம்.ஆர்.ஐ படத்தை பதிவேற்றவும்',
      'mri-upload': 'எம்.ஆர்.ஐ படத்தை இழுத்து விடுங்கள் அல்லது கிளிக் செய்து பதிவேற்றவும்',
      'mri-upload-note': 'JPG, PNG அல்லது JPEG (அதிகபட்சம் 10MB)',
      'mri-date': 'எம்.ஆர்.ஐ தேதியிட்டு',
      'mri-symptoms': 'அறிகுறிகள்',
      'select-option': 'தேர்வொன்றைத் தேர்ந்தெடுக்கவும்',
      'gender-male': 'ஆண்',
      'gender-female': 'பெண்',
      'gender-other': 'மற்றவை',
      'option-yes': 'ஆம்',
      'option-no': 'இல்லை',
      'btn-analyze': 'பகுப்பாய்வு செய்யவும்',
      'duration-days': 'நாட்கள்',
      'duration-weeks': 'வாரங்கள்',
      'duration-months': 'மாதங்கள்',
      'duration-years': 'ஆண்டுகள்',
      'chatbot-label': 'சுகாதார உதவியாளருடன் அரட்டையடிக்கவும்',
      'contact-title': 'எங்களைத் தொடர்புகொள்ள',
      'contact-description': 'உதவிக்காக எங்கள் சுகாதார நிபுணர்களை அணுகுங்கள்',
      'contact-address-title': 'முகவரி',
      'contact-address': '123 ஹெல்த்கேர் அவென்யூ, மெடிக்கல் மாவட்டம், நியூடெல்லி, 110001',
      'contact-phone-title': 'தொலைபேசி',
      'contact-email-title': 'மின்னஞ்சல்',
      'emergency-title': 'அவசர தொடர்பு',
      'emergency-ambulance': 'அம்புலன்ஸ் சேவை',
      'emergency-helpline': 'தேசிய சுகாதார உதவி எண்',
      'contact-form-title': 'எங்களுக்கு ஒரு செய்தி அனுப்புங்கள்',
      'contact-name': 'பெயர்',
      'contact-email': 'மின்னஞ்சல்',
      'contact-phone': 'தொலைபேசி',
      'contact-subject': 'தலைப்பு',
      'contact-message': 'செய்தி',
      'btn-send': 'செய்தியை அனுப்பவும்',
      'footer-about-title': 'மெடிகேர்+ பற்றி',
      'footer-about-description': 'மெடிகேர்+ என்பது ஒரு முன்னணி சுகாதாரத் தளமாகும், இது மேம்பட்ட நோயறிதல் கருவிகள் மற்றும் மருத்துவ சேவைகளை வழங்குகிறது.',
      'footer-links-title': 'விரைவு இணைப்புகள்',
      'footer-link-home': 'முகப்பு',
      'footer-link-services': 'சேவைகள்',
      'footer-link-diagnostic': 'நோயறிதல் கருவிகள்',
      'footer-link-contact': 'தொடர்பு கொள்ள',
      'footer-link-privacy': 'தனியுரிமைக் கொள்கை',
      'footer-link-terms': 'பயன்பாட்டு விதிமுறைகள்',
      'footer-services-title': 'எங்கள் சேவைகள்',
      'footer-service-heart': 'இதயம்',
      'footer-service-diabetes': 'நீரிழிவு',
      'footer-service-parkinsons': 'பார்கின்சன்ஸ்',
      'footer-service-skin': 'தோல் பகுப்பாய்வு',
      'footer-service-brain': 'மூளை எம்.ஆர்.ஐ',
      'footer-service-chatbot': 'AI சுகாதார உதவியாளர்',
      'footer-newsletter-title': 'செய்திமடல்',
      'footer-newsletter-description': 'சுகாதார தகவல்கள் மற்றும் குறிப்புகளைப் பெற சந்தா ஏற்புங்கள்.',
      'footer-copyright': '© 2025 மெடிகேர்+. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      'footer-disclaimer': 'பொறுப்புத் தவிர்ப்பு: இந்த வலைத்தளம் தகவல் நோக்கங்களுக்காக மட்டுமே, இது மருத்துவ ஆலோசனையின் மாற்றாக இல்லை.'
    }
    ,

    // Telugu translations (Add missing ones using English placeholders)
    te: {
      'nav-home': 'హోం',
      'nav-services': 'సేవలు',
      'nav-diagnostic': 'నిదాన పరికరాలు',
      'nav-contact': 'సంప్రదించండి',
      'hero-title': 'మీ వేళ్లచిట్కాల్లో అత్యాధునిక ఆరోగ్య సంరక్షణ',
      'hero-description': 'ఆధునిక నిదాన పరికరాలు, నిపుణుల వైద్య సలహాలు మరియు అత్యవసర సేవలు — ఒకేచోట అందుబాటులో',
      'hero-cta-primary': 'నిదాన పరికరాలను ఉపయోగించండి',
      'hero-cta-secondary': 'సేవలను అన్వేషించండి',
      'services-title': 'మా సేవలు',
      'services-description': 'మీ ఆరోగ్యానికి సమగ్ర ఆరోగ్య పరిష్కారాలు',
      'service-heart-title': 'హృదయ వ్యాధి మూల్యాంకనం',
      'service-heart-description': 'హృదయ సంబంధిత వ్యాధుల ప్రమాదాన్ని ముందుగానే గుర్తించండి',
      'service-diabetes-title': 'డయాబెటిస్ స్క్రీనింగ్',
      'service-diabetes-description': 'డయాబెటిస్ ప్రమాద మూల్యాంకనం మరియు నిర్వహణ సూచనలు',
      'service-parkinsons-title': 'పార్కిన్సన్స్ విశ్లేషణ',
      'service-parkinsons-description': 'ప్రాథమిక లక్షణాల ఆధారంగా ముందస్తు గుర్తింపు',
      'service-skin-title': 'చర్మ రోగ విశ్లేషణ',
      'service-skin-description': 'చర్మ చిత్రాల ఆధారంగా AI ఆధారిత ముల్యాంకనం',
      'service-mri-title': 'మెదడు MRI విశ్లేషణ',
      'service-mri-description': 'మెదడు ట్యూమర్లను గుర్తించడానికి MRI విశ్లేషణ',
      'service-chatbot-title': 'AI ఆరోగ్య అసిస్టెంట్',
      'service-chatbot-description': 'మీ ఆరోగ్య ప్రశ్నలకు తక్షణ సమాధానాలు పొందండి',
      'chatbot-btn': 'ఇప్పుడు చాట్ చేయండి',
      'diagnostic-title': 'నిదాన పరికరాలు',
      'diagnostic-description': 'మీ ఆరోగ్యాన్ని పర్యవేక్షించడానికి ఆధునిక టూల్స్',
      'tab-heart': 'హృదయం',
      'tab-diabetes': 'డయాబెటిస్',
      'tab-parkinsons': 'పార్కిన్సన్స్',
      'tab-skin': 'చర్మ విశ్లేషణ',
      'tab-brain': 'మెదడు MRI',
      'heart-form-title': 'హృదయ వ్యాధి ప్రమాదం',
      'heart-form-description': 'ముందస్తుగా మూల్యాంకించడానికి ఈ వివరాలను ఇవ్వండి',
      'heart-age': '', // Added Hindi
      'heart-gender': '', // Added Hindi
      'heart-cp' : '',
      'heart-thalach' : '',
      'heart-exang' : '',
      'heart-oldpeak': '',
      'heart-slope' : '',
      'heart-ca' : '',
      'heart-thal' : '',
      'diabetes-form-title': 'డయాబెటిస్ ప్రమాదం',
      'diabetes-form-description': 'ప్రమాదాన్ని అంచనా వేయడానికి ఈ వివరాలను నమోదు చేయండి',
      'parkinsons-form-title': 'పార్కిన్సన్స్ మూల్యాంకనం',
      'parkinsons-form-description': 'ఈ వివరాలను ఉపయోగించి ముందస్తు అంచనా',
      'skin-form-title': 'చర్మ వ్యాధి విశ్లేషణ',
      'skin-form-description': 'సంబంధిత చర్మ సమస్య ఫోటోను అప్‌లోడ్ చేయండి',
      'skin-upload': 'ఫైల్‌ను డ్రాగ్ చేసి విడదీయండి లేదా క్లిక్ చేయండి',
      'skin-upload-note': 'JPG, PNG లేదా JPEG (గరిష్ఠ పరిమాణం 5MB)',
      'skin-duration': 'ఈ సమస్య ఎంతకాలంగా ఉంది?',
      'skin-symptoms': 'ఇతర లక్షణాలు ఉన్నాయా?',
      'brain-form-title': 'మెదడు ట్యూమర్ గుర్తింపు',
      'brain-form-description': 'మీ MRI చిత్రాన్ని అప్‌లోడ్ చేయండి',
      'mri-upload': 'చిత్రాన్ని డ్రాగ్ చేసి విడదీయండి లేదా క్లిక్ చేయండి',
      'mri-upload-note': 'JPG, PNG లేదా JPEG (గరిష్ఠ పరిమాణం 10MB)',
      'mri-date': 'MRI తేదీ',
      'mri-symptoms': 'లక్షణాలు',
      'select-option': 'ఒక ఎంపికను ఎంచుకోండి',
      'gender-male': 'పురుషుడు',
      'gender-female': 'స్త్రీ',
      'gender-other': 'ఇతరులు',
      'option-yes': 'అవును',
      'option-no': 'కాదు',
      'btn-analyze': 'విశ్లేషించండి',
      'duration-days': 'రోజులు',
      'duration-weeks': 'వారాలు',
      'duration-months': 'నెలలు',
      'duration-years': 'సంవత్సరాలు',
      'chatbot-label': 'ఆరోగ్య అసిస్టెంట్‌తో చాట్ చేయండి',
      'contact-title': 'మమ్మల్ని సంప్రదించండి',
      'contact-description': 'మా నిపుణులతో సహాయం పొందండి',
      'contact-address-title': 'చిరునామా',
      'contact-address': '123 హెల్త్‌కేర్ వీధి, మెడికల్ డిస్ట్రిక్ట్, న్యూ ఢిల్లీ, 110001',
      'contact-phone-title': 'ఫోన్',
      'contact-email-title': 'ఇమెయిల్',
      'emergency-title': 'అత్యవసర సమాచారము',
      'emergency-ambulance': 'ఆంబులెన్స్ సేవ',
      'emergency-helpline': 'జాతీయ ఆరోగ్య సహాయ నంబర్',
      'contact-form-title': 'మాకు సందేశం పంపండి',
      'contact-name': 'పేరు',
      'contact-email': 'ఇమెయిల్',
      'contact-phone': 'ఫోన్',
      'contact-subject': 'విషయం',
      'contact-message': 'సందేశం',
      'btn-send': 'పంపండి',
      'footer-about-title': 'Medicare+ గురించి',
      'footer-about-description': 'Medicare+ అనేది ముందున్న ఆరోగ్య ప్లాట్‌ఫారంగా, ఇది ఆధునిక నిదాన పరికరాలు మరియు వైద్య సేవలను అందిస్తుంది.',
      'footer-links-title': 'త్వరిత లింకులు',
      'footer-link-home': 'హోం',
      'footer-link-services': 'సేవలు',
      'footer-link-diagnostic': 'నిదాన పరికరాలు',
      'footer-link-contact': 'సంప్రదించండి',
      'footer-link-privacy': 'గోప్యతా విధానం',
      'footer-link-terms': 'వాడుక నిబంధనలు',
      'footer-services-title': 'మా సేవలు',
      'footer-service-heart': 'హృదయం',
      'footer-service-diabetes': 'డయాబెటిస్',
      'footer-service-parkinsons': 'పార్కిన్సన్స్',
      'footer-service-skin': 'చర్మ విశ్లేషణ',
      'footer-service-brain': 'మెదడు MRI',
      'footer-service-chatbot': 'AI ఆరోగ్య అసిస్టెంట్',
      'footer-newsletter-title': 'న్యూస్‌లెటర్',
      'footer-newsletter-description': 'ఆరోగ్య సమాచారం మరియు చిట్కాల కోసం సబ్‌స్క్రైబ్ అవ్వండి.',
      'footer-copyright': '© 2025 Medicare+. అన్ని హక్కులూ కలదు.',
      'footer-disclaimer': 'గమనిక: ఈ వెబ్‌సైట్ సమాచారం కోసం మాత్రమే, ఇది వైద్య సలహాకు బదులుగా ఉండదు.'
    },

    // Kannada translations (Placeholder - NEEDS ACTUAL TRANSLATION)
    kn: {
      'nav-home': 'ಮುಖಪುಟ',
      'nav-services': 'ಸೇವೆಗಳು',
      'nav-diagnostic': 'ನಿರ್ಣಯ ಉಪಕರಣಗಳು',
      'nav-contact': 'ಸಂಪರ್ಕಿಸಿ',
      'hero-title': 'ನಿಮ್ಮ ಉಂಗುರದ ತುದಿಯಲ್ಲಿ ಸುಧಾರಿತ ಆರೋಗ್ಯ ಸೇವೆ',
      'hero-description': 'ಸುಧಾರಿತ ನಿರ್ಣಯ ಉಪಕರಣಗಳು, ತಜ್ಞರ ಆರೋಗ್ಯ ಸಲಹೆಗಳು ಮತ್ತು ತಾತ್ಕಾಲಿಕ ಸಹಾಯವನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಪಡೆಯಿರಿ.',
      'hero-cta-primary': 'ನಮ್ಮ ನಿರ್ಣಯ ಉಪಕರಣಗಳನ್ನು ಬಳಸಿ',
      'hero-cta-secondary': 'ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
      'services-title': 'ನಮ್ಮ ಸೇವೆಗಳು',
      'services-description': 'ನಿಮ್ಮ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಸಂಪೂರ್ಣ ಆರೋಗ್ಯ ಪರಿಹಾರಗಳು',
      'service-heart-title': 'ಹೃದಯರೋಗ ಮೌಲ್ಯಮಾಪನ',
      'service-heart-description': 'ವಿಶ್ಲೇಷಣೆಯ ಮೂಲಕ ಹೃದಯದ ಅಲರ್ಜಿ ಅಥವಾ ಅಪಾಯವನ್ನು ಮೊದಲೇ ಗುರುತಿಸಿ',
      'service-diabetes-title': 'ಡೈಬೆಟಿಸ್ ತಪಾಸಣೆ',
      'service-diabetes-description': 'ಸುಧಾರಿತ ಡೈಬೆಟಿಸ್ ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ನಿರ್ವಹಣಾ ಮಾರ್ಗದರ್ಶನ',
      'service-parkinsons-title': 'ಪಾರ್ಕಿನ್ಸನ್ ವಿಶ್ಲೇಷಣೆ',
      'service-parkinsons-description': 'ಲಕ್ಷಣಗಳ ವಿಶ್ಲೇಷಣೆಯಿಂದ ಆರಂಭಿಕ ಲಕ್ಷಣಗಳ ಗುರುತು',
      'service-skin-title': 'ಚರ್ಮರೋಗ ವಿಶ್ಲೇಷಣೆ',
      'service-skin-description': 'ಚಿತ್ರದ ಆಧಾರಿತ AI ಚಾಲಿತ ಚರ್ಮರೋಗ ಮೌಲ್ಯಮಾಪನ',
      'service-mri-title': 'ಮೆದುಳಿನ MRI ಮೌಲ್ಯಮಾಪನ',
      'service-mri-description': 'MRI ಸ್ಕ್ಯಾನ್ ವಿಶ್ಲೇಷಣೆಯ ಮೂಲಕ ಮೆದುಳಿನ ಟ್ಯೂಮರ್ ಗುರುತಿಕೆ',
      'service-chatbot-title': 'AI ಆರೋಗ್ಯ ಸಹಾಯಕ',
      'service-chatbot-description': 'ನಮ್ಮ AI ಚಾಟ್‌ಬಾಟ್‌ನಿಂದ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ತಕ್ಷಣದ ಉತ್ತರ ಪಡೆಯಿರಿ',
      'chatbot-btn': 'ಇದೇ ಈಗ ಚಾಟ್ ಮಾಡಿ',
      'diagnostic-title': 'ನಿರ್ಣಯ ಉಪಕರಣಗಳು',
      'diagnostic-description': 'ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಸುಧಾರಿತ ಉಪಕರಣಗಳು',
      'tab-heart': 'ಹೃದಯ',
      'tab-diabetes': 'ಡೈಬೆಟಿಸ್',
      'tab-parkinsons': 'ಪಾರ್ಕಿನ್ಸನ್',
      'tab-skin': 'ಚರ್ಮ ವಿಶ್ಲೇಷಣೆ',
      'tab-brain': 'ಮೆದುಳಿನ MRI',
      'heart-form-title': 'ಹೃದಯರೋಗ ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ',
      'heart-form-description': 'ಪ್ರಾಥಮಿಕ ಹೃದಯರೋಗ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ',
      'heart-age': '', // Added Hindi
      'heart-gender': '', // Added Hindi
      'heart-cp' : '',
      'heart-thalach' : '',
      'heart-exang' : '',
      'heart-oldpeak': '',
      'heart-slope' : '',
      'heart-ca' : '',
      'heart-thal' : '',
      'diabetes-form-title': 'ಡೈಬೆಟಿಸ್ ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ',
      'diabetes-form-description': 'ಪ್ರಾಥಮಿಕ ಡೈಬೆಟಿಸ್ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ',
      'diabetes-family': 'ಡೈಬೆಟಿಸ್ ಕುಟುಂಬದಲ್ಲಿ ಇತಿಹಾಸವಿದೆಯಾ?',
      'parkinsons-form-title': 'ಪಾರ್ಕಿನ್ಸನ್ ರೋಗ ಮೌಲ್ಯಮಾಪನ',
      'parkinsons-form-description': 'ಪ್ರಾಥಮಿಕ ಪಾರ್ಕಿನ್ಸನ್ ರೋಗ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ',
      'skin-form-title': 'ಚರ್ಮರೋಗ ವಿಶ್ಲೇಷಣೆ',
      'skin-form-description': 'ವಿಶ್ಲೇಷಣೆಗೆ ಸಂಬಂಧಿಸಿದ ಚರ್ಮದ ಸ್ಪಷ್ಟ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
      'skin-upload': 'ಚಿತ್ರವನ್ನು ಎಳೆದು ಬಿಡಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು',
      'skin-upload-note': 'JPG, PNG ಅಥವಾ JPEG (ಗರಿಷ್ಠ 5MB)',
      'skin-duration': 'ಈ ಸಮಸ್ಯೆ ಎಷ್ಟು ದಿನಗಳಿನಿಂದ ಇದೆ?',
      'skin-symptoms': 'ಹೆಚ್ಚುವರಿ ಲಕ್ಷಣಗಳಿವೆಯಾ?',
      'brain-form-title': 'ಮೆದುಳಿನ ಟ್ಯೂಮರ್ ಗುರುತಿಕೆ',
      'brain-form-description': 'ವಿಶ್ಲೇಷಣೆಗೆ MRI ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
      'mri-upload': 'MRI ಚಿತ್ರವನ್ನು ಎಳೆದು ಬಿಡಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು',
      'mri-upload-note': 'JPG, PNG ಅಥವಾ JPEG (ಗರಿಷ್ಠ 10MB)',
      'mri-date': 'MRI ಸ್ಕ್ಯಾನ್ ದಿನಾಂಕ',
      'mri-symptoms': 'ಅನುಭವಿಸಿದ ಲಕ್ಷಣಗಳು',
      'select-option': 'ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      'gender-male': 'ಪುರುಷ',
      'gender-female': 'ಮಹಿಳೆ',
      'gender-other': 'ಇತರೆ',
      'option-yes': 'ಹೌದು',
      'option-no': 'ಇಲ್ಲ',
      'btn-analyze': 'ವಿಶ್ಲೇಷಿಸಿ',
      'duration-days': 'ದಿನಗಳು',
      'duration-weeks': 'ವಾರಗಳು',
      'duration-months': 'ತಿಂಗಳುಗಳು',
      'duration-years': 'ವರ್ಷಗಳು',
      'chatbot-label': 'ಆರೋಗ್ಯ ಸಹಾಯಕನೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ',
      'contact-title': 'ಸಂಪರ್ಕಿಸಿ',
      'contact-description': 'ಸಹಾಯಕ್ಕಾಗಿ ನಮ್ಮ ತಜ್ಞರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ',
      'contact-address-title': 'ವಿಳಾಸ',
      'contact-address': '123 ಹೆಲ್ತ್‌ಕೇರ್ ಅವೆನ್ಯೂ, ಮೆಡಿಕಲ್ ಜಿಲ್ಲೆ, ನವದೆಹಲಿ, 110001',
      'contact-phone-title': 'ದೂರವಾಣಿ',
      'contact-email-title': 'ಇಮೇಲ್',
      'emergency-title': 'ತುರ್ತು ಸಂಪರ್ಕ',
      'emergency-ambulance': 'ಆಂಬ್ಯುಲೆನ್ಸ್ ಸೇವೆ',
      'emergency-helpline': 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಸಹಾಯ ಲೈನ್',
      'contact-form-title': 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      'contact-name': 'ಹೆಸರು',
      'contact-email': 'ಇಮೇಲ್',
      'contact-phone': 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ',
      'contact-subject': 'ವಿಷಯ',
      'contact-message': 'ಸಂದೇಶ',
      'btn-send': 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      'footer-about-title': 'Medicare+ ಬಗ್ಗೆ',
      'footer-about-description': 'Medicare+ ಒಂದು ಮುಂಚೂಣಿ ಆರೋಗ್ಯ ವೇದಿಕೆ ಆಗಿದ್ದು, ಸುಧಾರಿತ ನಿರ್ಣಯ ಉಪಕರಣಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.',
      'footer-links-title': 'ತ್ವರಿತ ಲಿಂಕುಗಳು',
      'footer-link-home': 'ಮುಖಪುಟ',
      'footer-link-services': 'ಸೇವೆಗಳು',
      'footer-link-diagnostic': 'ನಿರ್ಣಯ ಉಪಕರಣಗಳು',
      'footer-link-contact': 'ಸಂಪರ್ಕಿಸಿ',
      'footer-link-privacy': 'ಗೌಪ್ಯತಾ ನೀತಿ',
      'footer-link-terms': 'ಸೇವೆಯ ನಿಯಮಗಳು',
      'footer-services-title': 'ನಮ್ಮ ಸೇವೆಗಳು',
      'footer-service-heart': 'ಹೃದಯ',
      'footer-service-diabetes': 'ಡೈಬೆಟಿಸ್',
      'footer-service-parkinsons': 'ಪಾರ್ಕಿನ್ಸನ್',
      'footer-service-skin': 'ಚರ್ಮ ವಿಶ್ಲೇಷಣೆ',
      'footer-service-brain': 'ಮೆದುಳಿನ MRI',
      'footer-service-chatbot': 'AI ಆರೋಗ್ಯ ಸಹಾಯಕ',
      'footer-newsletter-title': 'ನ್ಯೂಸ್‌ಲೆಟರ್',
      'footer-newsletter-description': 'ಅಂತಿಮ ಆರೋಗ್ಯ ನವೀಕರಣಗಳು ಮತ್ತು ಸಲಹೆಗಾಗಿ ನಮ್ಮ ನ್ಯೂಸ್‌ಲೆಟರ್ ಗೆ ಚಂದಾದಾರರಾಗಿ.',
      'footer-copyright': '© 2025 Medicare+‌. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      'footer-disclaimer': 'ಅಸ್ವೀಕಾರ: ಈ ವೆಬ್‌ಸೈಟ್ ಕೇವಲ ಮಾಹಿತಿಯ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮತ್ತು ಇದು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.'
    }
    ,

    // Punjabi translations (Placeholder - NEEDS ACTUAL TRANSLATION)
    pa: {
      "nav-home": "ਘਰ",
      "nav-services": "ਸੇਵਾਵਾਂ",
      "nav-diagnostic": "ਡਾਇਗਨੋਸਟਿਕ ਟੂਲਜ਼",
      "nav-contact": "ਸੰਪਰਕ",
      "hero-title": "ਤੁਹਾਡੇ ਅੰਗੂਠੇ 'ਤੇ ਉन्नਤ ਸਿਹਤ ਸੇਵਾਵਾਂ",
      "hero-description": "ਉੱਚ ਗੁਣਵੱਤਾ ਵਾਲੇ ਡਾਇਗਨੋਸਟਿਕ ਟੂਲਜ਼, ਪੇਸ਼ਾਵਰ ਸਿਹਤ ਸਲਾਹ, ਅਤੇ ਐਮਰਜੈਂਸੀ ਮਦਦ ਇਕੱਠੀ ਥਾਂ 'ਤੇ ਪ੍ਰਦਾਨ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
      "hero-cta-primary": "ਸਾਡੇ ਡਾਇਗਨੋਸਟਿਕ ਟੂਲਜ਼ ਦਾ ਇਸਤੇਮਾਲ ਕਰੋ",
      "hero-cta-secondary": "ਸੇਵਾਵਾਂ ਦਾ ਪੜਤਾਲ ਕਰੋ",
      "services-title": "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ",
      "services-description": "ਤੁਹਾਡੇ ਸਿਹਤ ਲਈ ਸਮੁੱਚੀ ਸਿਹਤ ਸੇਵਾਵਾਂ",
      "service-heart-title": "ਹਿਰਦਯੋਗ ਵਿਸ਼ਲੇਸ਼ਣ",
      "service-heart-description": "ਹਿਰਦਯੋਗ ਦੀ ਜੋਖਮ ਦੀ ਪਹਿਚਾਣ ਲਈ ਵਿਸ਼ਲੇਸ਼ਣ",
      "service-diabetes-title": "ਸ਼ੂਗਰ ਜਾਂਚ",
      "service-diabetes-description": "ਉੱਚ ਸ਼ੂਗਰ ਜੋਖਮ ਮੁਲਾਂਕਣ ਅਤੇ ਪ੍ਰਬੰਧਨ ਹਦਾਇਤਾਂ",
      "service-parkinsons-title": "ਪਾਰਕੀਨਸਨ ਵਿਸ਼ਲੇਸ਼ਣ",
      "service-parkinsons-description": "ਖਾਸ ਲੱਛਣਾਂ ਦੀ ਪਹਿਚਾਣ ਰਾਹੀਂ ਪ੍ਰਾਰੰਭਿਕ ਲੱਛਣਾਂ ਦੀ ਪਛਾਣ",
      "service-skin-title": "ਚਮੜੀ ਦੀ ਬੀਮਾਰੀ ਵਿਸ਼ਲੇਸ਼ਣ",
      "service-skin-description": "ਏ.ਆਈ. ਦੁਆਰਾ ਚਮੜੀ ਦੀ ਬੀਮਾਰੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ",
      "service-mri-title": "ਮਸਤੀਸ਼ਕ ਐਮ.ਆਰ.ਆਈ. ਵਿਸ਼ਲੇਸ਼ਣ",
      "service-mri-description": "ਐਮ.ਆਰ.ਆਈ. ਸਕੈਨ ਵਿਸ਼ਲੇਸ਼ਣ ਰਾਹੀਂ ਮਸਤੀਸ਼ਕ ਟਿਊਮਰ ਪਹਿਚਾਣ",
      "service-chatbot-title": "ਏ.ਆਈ. ਸਿਹਤ ਸਹਾਇਕ",
      "service-chatbot-description": "ਸਾਡੇ ਏ.ਆਈ. ਚੈਟਬੋਟ ਤੋਂ ਆਪਣੀਆਂ ਸਿਹਤ ਸੰਬੰਧੀ ਸਵਾਲਾਂ ਦੇ ਤੁਰੰਤ ਜਵਾਬ ਪ੍ਰਾਪਤ ਕਰੋ",
      "chatbot-btn": "ਹੁਣੀ ਚੈਟ ਕਰੋ",
      "diagnostic-title": "ਡਾਇਗਨੋਸਟਿਕ ਟੂਲਜ਼",
      "diagnostic-description": "ਤੁਹਾਡੇ ਸਿਹਤ ਦੀ ਨਿਗਰਾਨੀ ਲਈ ਉੱਚ ਗੁਣਵੱਤਾ ਵਾਲੇ ਸਿਹਤ ਮੁਲਾਂਕਣ ਟੂਲਜ਼",
      "tab-heart": "ਹਿਰਦਯੋਗ",
      "tab-diabetes": "ਸ਼ੂਗਰ",
      "tab-parkinsons": "ਪਾਰਕੀਨਸਨ",
      "tab-skin": "ਚਮੜੀ ਵਿਸ਼ਲੇਸ਼ਣ",
      "tab-brain": "ਮਸਤੀਸ਼ਕ ਐਮ.ਆਰ.ਆਈ.",
      "heart-form-title": "ਹਿਰਦਯੋਗ ਜੋਖਮ ਮੁਲਾਂਕਣ",
      "heart-form-description": "ਪ੍ਰਾਰੰਭਿਕ ਹਿਰਦਯੋਗ ਮੁਲਾਂਕਣ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਗਏ ਵੇਰਵੇ ਭਰੋ",
      'heart-age': '', // Added Hindi
      'heart-gender': '', // Added Hindi
      'heart-cp' : '',
      'heart-thalach' : '',
      'heart-exang' : '',
      'heart-oldpeak': '',
      'heart-slope' : '',
      'heart-ca' : '',
      'heart-thal' : '',
      "diabetes-form-title": "ਸ਼ੂਗਰ ਜੋਖਮ ਮੁਲਾਂਕਣ",
      "diabetes-form-description": "ਪ੍ਰਾਰੰਭਿਕ ਸ਼ੂਗਰ ਮੁਲਾਂਕਣ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਗਏ ਵੇਰਵੇ ਭਰੋ",
      "parkinsons-form-title": "ਪਾਰਕੀਨਸਨ ਮੁਲਾਂਕਣ",
      "parkinsons-form-description": "ਪ੍ਰਾਰੰਭਿਕ ਪਾਰਕੀਨਸਨ ਮੁਲਾਂਕਣ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਗਏ ਵੇਰਵੇ ਭਰੋ",
      "skin-form-title": "ਚਮੜੀ ਦੀ ਬੀਮਾਰੀ ਵਿਸ਼ਲੇਸ਼ਣ",
      "skin-form-description": "ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਪ੍ਰਭਾਵਿਤ ਚਮੜੀ ਦੀ ਸਪਸ਼ਟ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ",
      "skin-upload": "ਤਸਵੀਰ ਖਿੱਚੋ ਜਾਂ ਅਪਲੋਡ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ",
      "skin-upload-note": "JPG, PNG ਜਾਂ JPEG (ਅਧਿਕਤਮ 5MB)",
      "skin-duration": "ਇਹ ਸਮੱਸਿਆ ਕਿੰਨੇ ਸਮੇਂ ਤੋਂ ਹੈ?",
      "skin-symptoms": "ਕੀ ਹੋਰ ਲੱਛਣ ਹਨ?",
      "brain-form-title": "ਮਸਤੀਸ਼ਕ ਟਿਊਮਰ ਪਹਿਚਾਣ",
      "brain-form-description": "ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਇੱਕ ਐਮ.ਆਰ.ਆਈ. ਸਕੈਨ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ",
      "mri-upload": "ਐਮ.ਆਰ.ਆਈ. ਸਕੈਨ ਖਿੱਚੋ ਜਾਂ ਅਪਲੋਡ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ",
      "mri-upload-note": "JPG, PNG ਜਾਂ JPEG (ਅਧਿਕਤਮ 10MB)",
      "mri-date": "ਐਮ.ਆਰ.ਆਈ. ਸਕੈਨ ਦੀ ਤਾਰੀਖ",
      "mri-symptoms": "ਲੱਛਣ ਜੋ ਅਨੁਭਵ ਕੀਤੇ ਗਏ ਹਨ",
      "select-option": "ਇੱਕ ਵਿਕਲਪ ਚੁਣੋ",
      "gender-male": "ਪੁਰਸ਼",
      "gender-female": "ਮਹਿਲਾ",
      "gender-other": "ਹੋਰ",
      "option-yes": "ਹਾਂ",
      "option-no": "ਨਹੀਂ",
      "btn-analyze": "ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",
      "duration-days": "ਦਿਨ",
      "duration-weeks": "ਹਫ਼ਤੇ",
      "duration-months": "ਮਹੀਨੇ",
      "duration-years": "ਸਾਲ",
      "chatbot-label": "ਸਿਹਤ ਸਹਾਇਕ ਨਾਲ ਚੈਟ ਕਰੋ",
      "contact-title": "ਸੰਪਰਕ ਕਰੋ",
      "contact-description": "ਸਹਾਇਤਾ ਲਈ ਸਾਡੇ ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ਾਵਰਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
      "contact-address-title": "ਪਤਾ",
      "contact-address": "123 ਹੈਲਥਕੇਅਰ ਐਵੇਨਿਊ, ਮੈਡੀਕਲ ਜ਼ਿਲ੍ਹਾ, ਨਵੀਂ ਦਿੱਲੀ, 110001",
      "contact-phone-title": "ਫੋਨ",
      "contact-email-title": "ਈਮੇਲ",
      "emergency-title": "ਇਮਰਜੈਂਸੀ ਸੰਪਰਕ",
      "emergency-ambulance": "ਐਮਬੂਲੈਂਸ ਸੇਵਾ",
      "emergency-helpline": "ਰਾਸ਼ਟਰ ਸਿਹਤ ਸਹਾਇਤਾ ਲਾਈਨ",
      "contact-form-title": "ਸਾਡਾ ਸੁਨੇਹਾ ਭੇਜੋ",
      "contact-name": "ਨਾਮ",
      "contact-email": "ਈਮੇਲ",
      "contact-phone": "ਫੋਨ",
      "contact-subject": "ਵਿਸ਼ਾ",
      "contact-message": "ਸੁਨੇਹਾ",
      "btn-send": "ਸੁਨੇਹਾ ਭੇਜੋ",
      "footer-about-title": "ਮੇਡੀਕੇਅਰ+ ਬਾਰੇ",
      "footer-about-description": "ਮੇਡੀਕੇਅਰ+ ਇੱਕ ਅਗਰਣੀ ਸਿਹਤ ਸੇਵਾ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਉੱਚ ਗੁਣਵੱਤਾ ਵਾਲੇ ਡਾਇਗਨੋਸਟਿਕ ਟੂਲਜ਼ ਅਤੇ ਚਿਕਿਤਸਾ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਤਾਂ ਕਿ ਤੁਹਾਡੀ ਸਿਹਤ ਬਰਕਰਾਰ ਰਹੇ।",
      "footer-links-title": "ਤੇਜ਼ ਲਿੰਕ",
      "footer-link-home": "ਘਰ",
      "footer-link-services": "ਸੇਵਾਵਾਂ",
      "footer-link-diagnostic": "ਡਾਇਗਨੋਸਟਿਕ ਟੂਲਜ਼",
      "footer-link-contact": "ਸੰਪਰਕ",
      "footer-link-privacy": "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
      "footer-link-terms": "ਸੇਵਾ ਸ਼ਰਤਾਂ",
      "footer-services-title": "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ",
      "footer-service-heart": "ਹਿਰਦਯੋਗ",
      "footer-service-diabetes": "ਸ਼ੂਗਰ",
      "footer-service-parkinsons": "ਪਾਰਕੀਨਸਨ",
      "footer-service-skin": "ਚਮੜੀ ਵਿਸ਼ਲੇਸ਼ਣ",
      "footer-service-brain": "ਮਸਤੀਸ਼ਕ ਐਮ.ਆਰ.ਆਈ.",
      "footer-service-chatbot": "ਏ.ਆਈ. ਸਿਹਤ ਸਹਾਇਕ",
      "footer-newsletter-title": "ਨਿਊਜ਼ਲੈਟਰ",
      "footer-newsletter-description": "ਤਾਜ਼ਾ ਸਿਹਤ ਅੱਪਡੇਟ ਅਤੇ ਸੁਝਾਅ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਾਡੇ ਨਿਊਜ਼ਲੈਟਰ ਨੂੰ ਸਬਸਕ੍ਰਾਈਬ ਕਰੋ।",
      "footer-copyright": "© 2025 ਮੇਡੀਕੇਅਰ+। ਸਾਰੇ ਅਧਿਕਾਰ ਸੰਰਖਿਤ।",
      "footer-disclaimer": "ਅਸਰ: ਇਹ ਵੈੱਬਸਾਈਟ ਸਿਰਫ ਜਾਣਕਾਰੀ ਦੇ ਉਦੇਸ਼ ਲਈ ਹੈ ਅਤੇ ਇਹ ਪੇਸ਼ੇਵਰ ਚਿਕਿਤਸਾ ਸਲਾਹ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ।"
    }
    ,

    // Urdu translations (Placeholder - NEEDS ACTUAL TRANSLATION)
    ur:{
      'nav-home': 'ہوم',
      'nav-services': 'سروسز',
      'nav-diagnostic': 'تشخیصی اوزار',
      'nav-contact': 'رابطہ',
      'hero-title': 'آپ کے انگلی کے سرے پر جدید صحت کی دیکھ بھال',
      'hero-description': 'جدید تشخیصی اوزار، پیشہ ورانہ صحت مشورے، اور ایمرجنسی امداد سب کچھ ایک جگہ پر',
      'hero-cta-primary': 'ہمارے تشخیصی اوزار استعمال کریں',
      'hero-cta-secondary': 'سروسز دریافت کریں',
      'services-title': 'ہماری سروسز',
      'services-description': 'آپ کی فلاح و بہبود کے لئے جامع صحت کی دیکھ بھال کے حل',
      'service-heart-title': 'دل کی بیماری کی تشخیص',
      'service-heart-description': 'تجزیے کے ذریعے دل کی بیماری کے خطرے کی ابتدائی شناخت',
      'service-diabetes-title': 'ذیابیطس کی اسکریننگ',
      'service-diabetes-description': 'جدید ذیابیطس کے خطرے کا تجزیہ اور انتظام کی رہنمائی',
      'service-parkinsons-title': 'پارکنسن کی تشخیص',
      'service-parkinsons-description': 'خصوصی علامات کے تجزیے کے ذریعے ابتدائی علامات کی شناخت',
      'service-skin-title': 'جلد کی بیماری کی تشخیص',
      'service-skin-description': 'تصویر کے ذریعے اے آئی پر مبنی جلد کی بیماری کی تشخیص',
      'service-mri-title': 'دماغ کا ایم آر آئی تجزیہ',
      'service-mri-description': 'ایم آر آئی اسکین کے تجزیے کے ذریعے دماغی ٹیومر کی شناخت',
      'service-chatbot-title': 'اے آئی ہیلتھ اسسٹنٹ',
      'service-chatbot-description': 'ہمارے اے آئی چیٹ بوٹ سے آپ کے صحت سے متعلق سوالات کے فوری جوابات حاصل کریں',
      'chatbot-btn': 'ابھی چیٹ کریں',
      'diagnostic-title': 'تشخیصی اوزار',
      'diagnostic-description': 'آپ کی صحت کی نگرانی کے لئے جدید صحت کے تجزیہ کے اوزار',
      'tab-heart': 'دل کی بیماری',
      'tab-diabetes': 'ذیابیطس',
      'tab-parkinsons': 'پارکنسن\'س',
      'tab-skin': 'جلد کا تجزیہ',
      'tab-brain': 'دماغ کا ایم آر آئی',
      'heart-form-title': 'دل کی بیماری کے خطرے کا تجزیہ',
      'heart-form-description': 'ابتدائی دل کی بیماری کے تجزیے کے لئے نیچے کی تفصیلات پُر کریں',
      'heart-age': 'عمر',
      'heart-gender': 'جنس',
      'heart-bp': 'بلڈ پریشر (mmHg)',
      'heart-cholesterol': 'کولیسٹرول (mg/dL)',
      'heart-sugar': 'فاسٹینگ بلڈ شوگر (mg/dL)',
      'heart-cp' : '',
      'heart-fbs': '',
      'heart-restecg' : '',
      'heart-thalach' : '',
      'heart-exang' : '',
      'heart-oldpeak': '',
      'heart-slope' : '',
      'heart-ca' : '',
      'heart-thal' : '',
      'heart-exercise': 'کیا آپ باقاعدگی سے ورزش کرتے ہیں؟',
      'diabetes-form-title': 'ذیابیطس کے خطرے کا تجزیہ',
      'diabetes-form-description': 'ابتدائی ذیابیطس کے تجزیے کے لئے نیچے کی تفصیلات پُر کریں',
      'parkinsons-form-title': 'پارکنسن\'s کا تجزیہ',
      'parkinsons-form-description': 'ابتدائی پارکنسن\'s کے تجزیے کے لئے نیچے کی تفصیلات پُر کریں',
      'skin-form-title': 'جلد کی بیماری کا تجزیہ',
      'skin-form-description': 'تجزیہ کے لئے متاثرہ جلد کی ایک واضح تصویر اپ لوڈ کریں',
      'skin-upload': 'تصویر کو ڈریگ کریں یا اپ لوڈ کرنے کے لئے کلک کریں',
      'skin-upload-note': 'JPG، PNG یا JPEG (زیادہ سے زیادہ 5MB)',
      'skin-duration': 'یہ مسئلہ کتنے دنوں سے ہے؟',
      'skin-symptoms': 'کیا کوئی اضافی علامات ہیں؟',
      'brain-form-title': 'دماغی ٹیومر کی شناخت',
      'brain-form-description': 'تجزیہ کے لئے ایک ایم آر آئی اسکین کی تصویر اپ لوڈ کریں',
      'mri-upload': 'ایم آر آئی اسکین کو ڈریگ کریں یا اپ لوڈ کرنے کے لئے کلک کریں',
      'mri-upload-note': 'JPG، PNG یا JPEG (زیادہ سے زیادہ 10MB)',
      'mri-date': 'ایم آر آئی اسکین کی تاریخ',
      'mri-symptoms': 'محسوس ہونے والی علامات',
      'select-option': 'ایک آپشن منتخب کریں',
      'gender-male': 'مرد',
      'gender-female': 'عورت',
      'gender-other': 'دیگر',
      'option-yes': 'ہاں',
      'option-no': 'نہیں',
      'btn-analyze': 'تجزیہ کریں',
      'duration-days': 'دن',
      'duration-weeks': 'ہفتے',
      'duration-months': 'مہینے',
      'duration-years': 'سال',
      'chatbot-label': 'صحت کے اسسٹنٹ سے چیٹ کریں',
      'contact-title': 'رابطہ کریں',
      'contact-description': 'مدد کے لئے ہمارے ہیلتھ کیئر پروفیشنلز سے رابطہ کریں',
      'contact-address-title': 'پتہ',
      'contact-address': '123 ہیلتھ کیئر ایوینیو، میڈیکل ڈسٹرکٹ، نئی دہلی، 110001',
      'contact-phone-title': 'فون',
      'contact-email-title': 'ای میل',
      'emergency-title': 'ایمرجنسی رابطہ',
      'emergency-ambulance': 'ایمبولینس سروس',
      'emergency-helpline': 'قومی ہیلتھ ہیلپ لائن',
      'contact-form-title': 'ہمیں پیغام بھیجیں',
      'contact-name': 'نام',
      'contact-email': 'ای میل',
      'contact-phone': 'فون',
      'contact-subject': 'موضوع',
      'contact-message': 'پیغام',
      'btn-send': 'پیغام بھیجیں',
      'footer-about-title': 'میڈ کیئر+ کے بارے میں',
      'footer-about-description': 'میڈ کیئر+ ایک جدید ہیلتھ کیئر پلیٹ فارم ہے جو جدید تشخیصی اوزار اور طبی خدمات فراہم کرتا ہے تاکہ آپ کی فلاح و بہبود کو یقینی بنائے۔',
      'footer-links-title': 'فوری لنکس',
      'footer-link-home': 'ہوم',
      'footer-link-services': 'سروسز',
      'footer-link-diagnostic': 'تشخیصی اوزار',
      'footer-link-contact': 'رابطہ',
      'footer-link-privacy': 'پرائیویسی پالیسی',
      'footer-link-terms': 'سروس کے شرائط',
      'footer-services-title': 'ہماری سروسز',
      'footer-service-heart': 'دل کی بیماری',
      'footer-service-diabetes': 'ذیابیطس',
      'footer-service-parkinsons': 'پارکنسن\'s',
      'footer-service-skin': 'جلد کی بیماری',
      'footer-service-brain': 'دماغ کا ایم آر آئی',
      'footer-service-chatbot': 'اے آئی ہیلتھ اسسٹنٹ',
      'footer-newsletter-title': 'نیوز لیٹر',
      'footer-newsletter-description': 'سب سے حالیہ صحت کی معلومات اور ٹپس کے لئے ہمارے نیوز لیٹر کو سبسکرائب کریں۔',
      'footer-copyright': '© 2025 میڈ کیئر+۔ تمام حقوق محفوظ ہیں۔',
      'footer-disclaimer': 'ڈس کلیمر: یہ ویب سائٹ صرف معلومات کے مقاصد کے لیے ہے اور یہ پیشہ ورانہ طبی مشورے کا متبادل نہیں ہے۔'
    }
    

  }; // End of translations object

  // Get language select element
  const languageSelect = document.getElementById('language-select');

  // Set default language (English)
  let currentLanguage = 'en';

  // Function to update text for the selected language
  function updateLanguage(language) {
    // Get all elements with lang class
    const elements = document.querySelectorAll('.lang'); // Make sure your HTML elements have class="lang" and key="your-key"

    elements.forEach(element => {
      // Get the text key from the element
      const key = element.getAttribute('key');

      // Check if the key exists in the selected language translation object
      if (translations[language] && translations[language][key]) {
        // Update the text content or attribute value
        if (element.tagName === 'INPUT' && element.type === 'submit') { // More specific check for submit inputs
            element.value = translations[language][key];
        } else if (element.tagName === 'INPUT' && element.placeholder) { // Handle placeholders for input fields
            element.placeholder = translations[language][key];
        } else if (element.tagName === 'TEXTAREA' && element.placeholder) { // Handle placeholders for textareas
            element.placeholder = translations[language][key];
        } else if (element.tagName === 'OPTION' && element.parentElement.id !== 'language-select') { // Update options in other selects, not the language selector itself
            element.textContent = translations[language][key]; // Use textContent for option text
        } else if (element.tagName !== 'OPTION') { // Avoid changing text of language select options here
            element.textContent = translations[language][key];
        }
      } else if (translations['en'] && translations['en'][key]) {
        // Fallback to English if the translation is not available
        // (Use the same logic as above for different element types)
        if (element.tagName === 'INPUT' && element.type === 'submit') {
            element.value = translations['en'][key];
        } else if (element.tagName === 'INPUT' && element.placeholder) {
            element.placeholder = translations['en'][key];
        } else if (element.tagName === 'TEXTAREA' && element.placeholder) {
            element.placeholder = translations['en'][key];
        } else if (element.tagName === 'OPTION' && element.parentElement.id !== 'language-select') {
             element.textContent = translations['en'][key];
        } else if (element.tagName !== 'OPTION') {
            element.textContent = translations['en'][key];
        }
      } else {
          // Optional: Log if a key is missing in both selected language and English
          // console.warn(`Translation key "${key}" not found for language "${language}" or fallback "en".`);
      }
    });

    // Update document title based on current language
    const titleKey = 'hero-title'; // Or choose another representative key
    if (translations[language] && translations[language][titleKey]) {
      document.title = 'MediCare+ | ' + translations[language][titleKey];
    } else if (translations['en'] && translations['en'][titleKey]) {
      document.title = 'MediCare+ | ' + translations['en'][titleKey];
    } else {
       document.title = 'MediCare+ | Advanced Healthcare Solutions'; // Default title
    }

    // Optional: Set the lang attribute on the <html> element for accessibility/styling
    document.documentElement.lang = language;
  }

  // Event listener for language selection
  if (languageSelect) {
    languageSelect.addEventListener('change', function() {
      currentLanguage = this.value;
      updateLanguage(currentLanguage);

      // Save language preference to localStorage
      localStorage.setItem('preferredLanguage', currentLanguage);
    });

    // Check for saved language preference on page load
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
       // Ensure the saved language is actually one of the options
       if (Array.from(languageSelect.options).some(option => option.value === savedLanguage)) {
         languageSelect.value = savedLanguage;
         currentLanguage = savedLanguage;
       } else {
         // Saved language isn't valid anymore, maybe options changed. Fallback to default.
         localStorage.removeItem('preferredLanguage');
         currentLanguage = 'en'; // Or whatever your default is
         languageSelect.value = currentLanguage;
       }
    } else {
        // No saved preference, use the default selected in the HTML or 'en'
        currentLanguage = languageSelect.value || 'en';
    }

    // Initial language update on page load
    updateLanguage(currentLanguage);
  } else {
      console.warn("Language select dropdown with id 'language-select' not found.");
      // Optionally, run updateLanguage with the default 'en' even without the selector
      updateLanguage('en');
  }
});