/****************************************************************
 *                         MailService
 *
 * Simplifies the interface for nodemailer and returns a promise
 *
 * usage:
 *
 * import { mailService } from 'backend-tools'
 * var mailer = mailService(service, username, pwd)
 * var info = await mailer.send(to, from, subject, body)
 ***************************************************************/

var nodemailer = require('nodemailer')


export default function mailService(service, username, pwd)
{
    function sendMail(to, from, subject, body)
    {
        return new Promise(function(resolve, reject)
        {
            const SETTINGS = {
                service: service,
                auth: {
                    user: username,
                    pass: pwd
                }
            }

            const OPTIONS = {
                to: to,
                from: from,
                subject: subject,
                text: body
            }

            nodemailer
                .createTransport(SETTINGS)
                .sendMail(OPTIONS, (err, info) => {
                    err ? reject(err) : resolve(info.response)
                })
        })
    }

    return {
        send: sendMail
    }
}