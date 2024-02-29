import nodemailer from 'nodemailer';

const emailServices = async(user, register) => {

   const transport = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAILNAME,
            pass: process.env.EMAILPASS,
        }
   })

   try {
    const sendEmail = await transport.sendMail({
        from: `Chamaleon Softwares <${process.env.EMAILNAME}> `,
        to: user.email,
        subject: `Time Records`,
        html: `
            <h1> registration details: </h1>
            
            <ul>
                <li> <strong> Employee: </strong> ${user.name} </li>
                <li> <strong> date: </strong> ${register.date} </li>
                <li> <strong> time: </strong> ${register.hours} </li>
                <li> <strong> recordType: </strong> ${register.recordType} </li>    
           </ul>
        `,
    })

       return sendEmail

   } catch (error) {
    console.error(error)
   }
   

}


export default emailServices;