export default {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    console.log('Contact beforeCreate triggered');
  },

  async afterCreate(event) {
    const { result, params } = event;
    
    // Add debug logging
    console.log('Contact afterCreate triggered', {
      eventId: event.uid,
      resultId: result.id,
      timestamp: new Date().toISOString()
    });
    
    try {
      // Get admin email from environment variable
      const adminEmail = process.env.ADMIN_EMAIL;
      
      if (!adminEmail) {
        console.warn('No admin email configured. Skipping notification email.');
        return;
      }

      // Check if this is a draft
      if (params?.data?.publishedAt === null) {
        console.log('Skipping email for draft creation');
        return;
      }

      // Send email notification
      await strapi.plugins.email.services.email.send({
        to: adminEmail,
        from: process.env.SMTP_FROM,
        subject: 'New Contact Form Submission',
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${result.name}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Feedback:</strong> ${result.feedback}</p>
          <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
        `,
      });

      console.log('Contact notification email sent successfully', {
        contactId: result.id,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error sending notification email:', error);
      // Don't throw the error to prevent affecting the contact creation
    }
  },
};
