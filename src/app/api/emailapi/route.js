import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req, res) {
    try {
        const { name, phone, email, IP, currentdate, pageUrl } = await req.json();
        const brandname = 'New Brand'
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "dev.faz@productions-dev.com",
                pass: "cl-faroq1"
            }
        });
        const mailOptions = {
            from: "dev.faz@productions-dev.com",
            to: "dev.faz@productions-dev.com",
            subject: `New Brand Lead`,
            html: `<table>
                    <tr>
                        <th>Name</th>
                        <td>${name}</td>
                    </tr> 
                    <tr>
                        <th>Phone</th>
                        <td>${phone}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>${email}</td>
                    </tr>

                    <tr>
                        <th>Brand Name</th>
                        <td>${brandname}</td>
                    </tr>

                    <tr>
                        <th>Currentdate</th>
                        <td>${currentdate}</td>
                    </tr>

                    <tr>
                        <th>IP</th>
                        <td>${IP}</td>
                    </tr>
               
                    <tr>
                        <th>pageUrl</th>
                        <td>${pageUrl}</td>
                    </tr>
            </table>`
        }
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ "mesaage": "Email sent successfully", "status": 200 })
    } catch (error) {
        return NextResponse.json({ "mesaage": "Failed to sent Email", "status": 500 })
    }
}