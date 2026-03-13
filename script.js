(function () {
  'use strict';

  const WHATSAPP_NUMBER = '13477829896';
  const STORAGE_LANG = 'arfs-lang';

  var currentLang = localStorage.getItem(STORAGE_LANG) || 'es';

  var translations = {
    es: {
      nav_inicio: 'Inicio',
      nav_servicios: 'Servicios',
      nav_sobre: 'Sobre nosotros',
      nav_agendar: 'Agendar cita',
      nav_promociones: 'Promociones',
      nav_ubicacion: 'Ubicación',
      nav_contacto: 'Contacto',
      hero_badge: 'Mecánica General Fernando Lara · Bronx, NY',
      hero_title: 'Tu vehículo en las mejores manos',
      hero_sub: 'Diagnóstico, reparación y mantenimiento. Atención 24 horas. Presupuesto sin compromiso.',
      btn_agendar: 'Agendar cita',
      btn_whatsapp: 'Escribir por WhatsApp',
      services_title: 'Nuestros servicios',
      services_sub: 'Soluciones completas para tu auto, con calidad y confianza. Auto repair near me · Mecánico en Bronx, NY.',
      serv_oil: 'Cambio de aceite',
      serv_oil_desc: 'Cambio de aceite y filtro. Mantenimiento preventivo para alargar la vida del motor.',
      serv_brake: 'Reparación de frenos',
      serv_brake_desc: 'Reparación y cambio de frenos: pastillas, discos, calipers. Tu seguridad es prioridad.',
      serv_diag: 'Diagnóstico del motor',
      serv_diag_desc: 'Revisión con escáner y experiencia para detectar fallas y dar presupuesto claro.',
      serv_trans: 'Reparación de transmisión',
      serv_trans_desc: 'Reparación de transmisión automática y manual. Diagnóstico y servicio especializado.',
      serv_ac: 'Reparación de A/C',
      serv_ac_desc: 'Reparación y carga de aire acondicionado. Diagnóstico de fugas y recarga de refrigerante.',
      about_title: 'Sobre nosotros',
      about_lead: 'En <strong>Auto Repair F Solution</strong> somos tu taller de confianza en el Bronx. Con años de experiencia en mecánica general, nos especializamos en dejar tu vehículo como nuevo.',
      about_p2: 'Fundado por <strong>Fernando Lara</strong>, nuestro equipo combina conocimiento técnico con un trato cercano. Trabajamos con transparencia: te explicamos el problema, el presupuesto y el tiempo estimado antes de tocar tu auto.',
      about_li1: 'Atención <strong>24 horas</strong> en nuestro taller principal',
      about_li2: 'Presupuesto sin compromiso',
      about_li3: 'Diagnóstico claro y honesto',
      about_li4: 'Servicio en español e inglés',
      about_btn: 'Agendar una cita',
      about_stat24: 'Abiertos las 24 horas para tu comodidad',
      about_statexp: 'Años de experiencia en mecánica automotriz',
      form_title: 'Agenda tu cita para reparar tu vehículo',
      form_badge: 'Presupuesto sin compromiso',
      form_quote_title: 'Solicitar presupuesto gratuito',
      form_desc: 'Completa el formulario con los datos de tu auto y el problema. Te contestamos por WhatsApp con tu cotización y para confirmar tu cita.',
      form_name: 'Nombre completo *',
      form_phone: 'Teléfono *',
      form_marca: 'Marca del vehículo *',
      form_modelo: 'Modelo y año *',
      form_problema: 'Describe el problema o servicio que necesitas *',
      form_submit: 'Solicitar presupuesto gratuito',
      ph_name: 'Tu nombre',
      ph_phone: 'Ej: (347) 555-1234',
      ph_marca: 'Ej: Toyota, Honda, Ford',
      ph_modelo: 'Ej: Camry 2020',
      ph_problema: 'Ej: El motor hace un ruido al acelerar, necesito revisión de frenos, cambio de aceite...',
      promo_title: 'Promociones',
      promo_sub: 'Aprovecha estas ofertas para el cuidado de tu vehículo.',
      promo_destacado: 'Destacado',
      promo_diag: 'Diagnóstico gratuito',
      promo_diag_desc: 'Revisión inicial sin costo. Te decimos qué tiene tu auto y cuánto costaría repararlo antes de que pagues nada.',
      promo_diag_btn: 'Pedir cita por WhatsApp',
      promo_aceite: 'Cambio de aceite',
      promo_aceite_desc: 'Mantenimiento básico con aceite de calidad. Incluye filtro y revisión de niveles.',
      promo_frenos: 'Revisión de frenos',
      promo_frenos_desc: 'Revisión completa del sistema de frenos. Tu seguridad es lo primero.',
      promo_consultar: 'Consultar precio →',
      nav_reviews: 'Reseñas',
      nav_gallery: 'Galería',
      location_title: 'Dónde estamos',
      location_seo: 'Mechanic near me · Auto repair near me · Taller mecánico Bronx NY · 834 St Anns Ave',
      location_hours: 'Horario:',
      location_24: 'Abierto 24 horas',
      location_taller: 'Taller principal:',
      location_oficina: 'Oficina:',
      location_taller2: 'Taller 2:',
      btn_maps: 'Ver en Google Maps',
      btn_directions: 'Cómo llegar (Google Maps)',
      reviews_title: 'Lo que dicen nuestros clientes',
      reviews_sub: 'Confían en nosotros para el cuidado de su vehículo.',
      review_1_text: '"Excelente servicio y reparación rápida. Muy recomendados."',
      review_1_author: '— Cliente satisfecho',
      review_2_text: '"Excellent service and fast repair! Will come back."',
      review_2_author: '— Happy customer',
      review_3_text: '"Buen precio y trato honesto. Me explicaron todo antes de hacer el trabajo."',
      review_3_author: '— Cliente, Bronx',
      gallery_title: 'Nuestro taller',
      gallery_sub: 'Mecánicos trabajando, instalaciones y vehículos que confían en nosotros.',
      gallery_1: 'Mecánico trabajando',
      gallery_2: 'Nuestro equipo en el taller',
      gallery_3: 'Servicio profesional',
      contact_title: 'Contacto',
      contact_sub: 'Escríbenos por WhatsApp o llámanos para una respuesta rápida.',
      contact_send: 'Enviar mensaje →',
      contact_24: 'Taller 24 horas',
      contact_follow: 'Seguir →',
      contact_page: 'Ver página →',
      contact_youtube: 'Ver canal →',
      intro_tagline: 'En Auto Repair F Solutions cuidamos tu vehículo',
      intro_taller: 'Taller',
      intro_oficina: 'Oficina',
      tip_title: '¿Sabías que...?',
      tip_text: 'El <strong>90%</strong> de los fallos en la transmisión automática podrían evitarse con un <strong>cambio de aceite a tiempo.</strong>',
      tip_cta: 'Agendar mantenimiento',
      team_caption: 'Nuestro equipo',
      footer_copy: 'Auto Repair F Solution. Mecánica General Fernando Lara.',
      whatsapp_help: '¿Necesitas ayuda?',
      cta_call_now: 'Llamar ahora',
      cta_whatsapp: 'WhatsApp',
      cta_whatsapp_sub: 'Pedir cita o consultar',
      alert_error: 'Por favor completa todos los campos obligatorios.',
      msg_title: 'Solicitud de cita - Auto Repair F Solution',
      msg_name: 'Nombre:',
      msg_phone: 'Teléfono:',
      msg_vehicle: 'Vehículo:',
      msg_problema: 'Problema o servicio:'
    },
    en: {
      nav_inicio: 'Home',
      nav_servicios: 'Services',
      nav_sobre: 'About us',
      nav_agendar: 'Book appointment',
      nav_promociones: 'Promotions',
      nav_ubicacion: 'Location',
      nav_reviews: 'Reviews',
      nav_gallery: 'Gallery',
      nav_contacto: 'Contact',
      hero_badge: 'General Mechanics Fernando Lara · Bronx, NY',
      hero_title: 'Your vehicle in the best hands',
      hero_sub: 'Diagnostics, repair and maintenance. 24-hour service. Free estimate.',
      btn_agendar: 'Book appointment',
      btn_whatsapp: 'Message on WhatsApp',
      services_title: 'Our services',
      services_sub: 'Complete solutions for your car, with quality and trust. Auto repair near me · Mechanic Bronx NY.',
      serv_oil: 'Oil Change',
      serv_oil_desc: 'Oil and filter change. Preventive maintenance to extend engine life.',
      serv_brake: 'Brake Repair',
      serv_brake_desc: 'Brake repair and replacement: pads, rotors, calipers. Your safety is our priority.',
      serv_diag: 'Engine Diagnostics',
      serv_diag_desc: 'Scan and experience to find issues and give you a clear estimate.',
      serv_trans: 'Transmission Repair',
      serv_trans_desc: 'Automatic and manual transmission repair. Diagnosis and specialized service.',
      serv_ac: 'AC Repair',
      serv_ac_desc: 'Air conditioning repair and recharge. Leak diagnosis and refrigerant recharge.',
      about_title: 'About us',
      about_lead: 'At <strong>Auto Repair F Solution</strong> we are your trusted shop in the Bronx. With years of experience in general mechanics, we specialize in making your vehicle like new.',
      about_p2: 'Founded by <strong>Fernando Lara</strong>, our team combines technical knowledge with a personal touch. We work with transparency: we explain the problem, the estimate and the time before touching your car.',
      about_li1: '<strong>24-hour</strong> service at our main shop',
      about_li2: 'Free estimate, no obligation',
      about_li3: 'Clear and honest diagnostics',
      about_li4: 'Service in Spanish and English',
      about_btn: 'Book an appointment',
      about_stat24: 'Open 24 hours for your convenience',
      about_statexp: 'Years of experience in auto mechanics',
      form_title: 'Book your appointment to repair your vehicle',
      form_badge: 'Free estimate',
      form_quote_title: 'Request a Free Quote',
      form_desc: 'Fill out the form with your vehicle details and the issue. We will reply via WhatsApp with your quote and to confirm your appointment.',
      form_name: 'Full name *',
      form_phone: 'Phone *',
      form_marca: 'Vehicle make *',
      form_modelo: 'Model and year *',
      form_problema: 'Describe the problem or service you need *',
      form_submit: 'Request Free Quote',
      ph_name: 'Your name',
      ph_phone: 'E.g.: (347) 555-1234',
      ph_marca: 'E.g.: Toyota, Honda, Ford',
      ph_modelo: 'E.g.: Camry 2020',
      ph_problema: 'E.g.: Engine makes a noise when accelerating, need brake check, oil change...',
      promo_title: 'Promotions',
      promo_sub: 'Take advantage of these offers for your vehicle care.',
      promo_destacado: 'Featured',
      promo_diag: 'Free diagnostics',
      promo_diag_desc: 'Initial inspection at no cost. We tell you what\'s wrong and what it would cost before you pay anything.',
      promo_diag_btn: 'Request appointment via WhatsApp',
      promo_aceite: 'Oil change',
      promo_aceite_desc: 'Basic maintenance with quality oil. Includes filter and level check.',
      promo_frenos: 'Brake inspection',
      promo_frenos_desc: 'Complete brake system inspection. Your safety comes first.',
      promo_consultar: 'Get quote →',
      location_title: 'Where we are',
      location_seo: 'Mechanic near me · Auto repair near me · Auto repair Bronx NY · 834 St Anns Ave',
      location_hours: 'Hours:',
      location_24: 'Open 24 hours',
      location_taller: 'Main shop:',
      location_oficina: 'Office:',
      location_taller2: 'Shop 2:',
      btn_maps: 'View on Google Maps',
      btn_directions: 'Get directions (Google Maps)',
      reviews_title: 'What our customers say',
      reviews_sub: 'They trust us for their vehicle care.',
      review_1_text: '"Excellent service and fast repair! Highly recommended."',
      review_1_author: '— Satisfied customer',
      review_2_text: '"Excellent service and fast repair! Will come back."',
      review_2_author: '— Happy customer',
      review_3_text: '"Fair price and honest service. They explained everything before doing the work."',
      review_3_author: '— Customer, Bronx',
      gallery_title: 'Our shop',
      gallery_sub: 'Mechanics at work, our facility, and vehicles that trust us.',
      gallery_1: 'Mechanic at work',
      gallery_2: 'Our team at the shop',
      gallery_3: 'Professional service',
      contact_title: 'Contact',
      contact_sub: 'Message us on WhatsApp or call for a quick response.',
      contact_send: 'Send message →',
      contact_24: '24-hour shop',
      contact_follow: 'Follow →',
      contact_page: 'View page →',
      contact_youtube: 'View channel →',
      intro_tagline: 'At Auto Repair F Solutions we take care of your vehicle',
      intro_taller: 'Shop',
      intro_oficina: 'Office',
      tip_title: 'Did you know...?',
      tip_text: '<strong>90%</strong> of automatic transmission failures could be avoided with <strong>timely oil changes.</strong>',
      tip_cta: 'Schedule maintenance',
      team_caption: 'Our team',
      footer_copy: 'Auto Repair F Solution. General Mechanics Fernando Lara.',
      whatsapp_help: 'Need help?',
      cta_call_now: 'Call Now',
      cta_whatsapp: 'WhatsApp',
      cta_whatsapp_sub: 'Book or ask',
      alert_error: 'Please fill in all required fields.',
      msg_title: 'Appointment request - Auto Repair F Solution',
      msg_name: 'Name:',
      msg_phone: 'Phone:',
      msg_vehicle: 'Vehicle:',
      msg_problema: 'Problem or service:'
    }
  };

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';

    var t = translations[lang] || translations.es;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key]) el.innerHTML = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.classList.contains('active'));
    });
  }

  // Año en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Selector de idioma
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = this.getAttribute('data-lang');
      if (lang) applyLanguage(lang);
    });
  });
  applyLanguage(currentLang);

  // Menú móvil
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open);
    });
  }

  // Formulario de cita → mensaje WhatsApp
  var formCita = document.getElementById('form-cita');
  if (formCita) {
    formCita.addEventListener('submit', function (e) {
      e.preventDefault();
      var t = translations[currentLang] || translations.es;

      var nombre = document.getElementById('nombre').value.trim();
      var telefono = document.getElementById('telefono').value.trim();
      var marca = document.getElementById('marca').value.trim();
      var modelo = document.getElementById('modelo').value.trim();
      var problema = document.getElementById('problema').value.trim();

      if (!nombre || !telefono || !marca || !modelo || !problema) {
        alert(t.alert_error);
        return;
      }

      var mensaje = [
        '*' + t.msg_title + '*',
        '',
        t.msg_name + ' ' + nombre,
        t.msg_phone + ' ' + telefono,
        t.msg_vehicle + ' ' + marca + ' - ' + modelo,
        '',
        t.msg_problema,
        problema
      ].join('\n');

      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(mensaje);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Cerrar menú al hacer clic en un enlace (móvil)
  document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Aviso de cookies
  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');
  var COOKIE_CONSENT_KEY = 'arfs-cookies';
  var COOKIE_CONSENT_EXPIRY = 365; // días

  if (cookieBanner && cookieAccept) {
    var accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!accepted) {
      cookieBanner.classList.add('is-visible');
      cookieBanner.setAttribute('aria-hidden', 'false');
    }
    cookieAccept.addEventListener('click', function () {
      var expiry = new Date();
      expiry.setDate(expiry.getDate() + COOKIE_CONSENT_EXPIRY);
      localStorage.setItem(COOKIE_CONSENT_KEY, expiry.toISOString());
      cookieBanner.classList.remove('is-visible');
      cookieBanner.setAttribute('aria-hidden', 'true');
    });
  }
})();
