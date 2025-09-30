// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailConfig = {
  serviceID: 'service_qnyaas5', // Replace with your EmailJS service ID
  templateID: 'template_rt9hwfv', // Replace with your EmailJS template ID
  publicKey: 'RT0Nhrv-sO0DRFYqh', // Replace with your EmailJS public key
};

// Template variables for EmailJS
export const emailTemplate = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  subject: '{{subject}}',
  message: '{{message}}',
  to_email: 'sabridokhan2@gmail.com',
  reply_to: '{{reply_to}}'
};