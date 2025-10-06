import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { from_name, reply_to, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'webmail.shahriyarjamali.art',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });

        await transporter.sendMail({
            from: '"Contact Form" <info@shahriyarjamali.art>',
            to: 'info@shahriyarjamali.art',
            replyTo: reply_to,
            subject: `New Contact from ${from_name}`,
            text: message,
            html: `<h3>New Contact Form Submission</h3>
             <p><strong>Name:</strong> ${from_name}</p>
             <p><strong>Email:</strong> ${reply_to}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}