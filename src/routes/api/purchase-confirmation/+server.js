import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY);
const PDF_GUIDE_URL="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf";

export async function POST({request}){
   const requestBody = await request.json();
   console.log(requestBody);

   const response = await fetch(PDF_GUIDE_URL);
   const pdfBuffer = await response.arrayBuffer();
   const base64Pdf = Buffer.from(pdfBuffer).toString("base64");

   const customerEmail = requestBody.data.object.customer_details.email;
      const customerName = requestBody.data.object.customer_details.name;

      const message = {
        to: customerEmail,
        from: "zone2fun@gmail.com",
        subject:"Your Purchase Ebook Confirmation",
        html:`
        <h1>Thank you for your purchase</h1>

<p>Dear ${customerName},</p>

<p>We’re excited to let you know that your order has been successfully processed.</p>


<p>
  If you have any issues with the download or need assistance, please contact us.  
</p>

<p>Best regards,<br>
<p>Customer Service</p>
        `,
        attachments:[{
            content: base64Pdf,
            filename:"Digital Book Move to Spain",
            type:"application/pdf",
            disposition:"attachment"
        }]
      }

 await sgMail.send(message);


   return json({response:"Email Sent!"});
   
}