import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create the email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    // Send the email using the native fetch API to avoid adding dependencies
    // This uses the Email.js service which is free and doesn't require server setup
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', // Using environment variable for service ID
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', // Using environment variable for template ID
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '', // Using environment variable for public key
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          to_email: 'moakshkakar@gmail.com', // Your email address
        },
      }),
    });

    if (response.status === 200) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Failed to send email', details: errorData },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}