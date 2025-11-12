import './index.scss'
const Contact = () => {
    const LinkedInURL = "https://www.linkedin.com/in/joshua-dadson-88b652138"
    const sendEmail = () => {
        const recipient = "joshuadadson@yahoo.com";
        const subject = "Regarding your inquiry";
        const body = "Dear recipient,\n\nI am writing to you about...";

        // Encode the subject and body to handle special characters
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);

        // Construct the mailto link
        const mailtoLink = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

        // Redirect the user to the mailto link
        window.location.href = mailtoLink;
    }
    return (
        <div className="contact-container">
            <div className='title'>Keep In Touch</div>
            <div className='button-container'>
                <div className='contact-button' onClick={() => sendEmail()}>Email</div>
                <div className='contact-button' onClick={() => window.open(LinkedInURL, "_blank")}>LinkedIn</div>
            </div>
            <div className='info-container'>
                <div className='info' >Phone Number: 817-914-1866</div>
                <div className='info'>Email: joshuadadson@yahoo.com</div>
            </div>
        </div>
    )
}

export default Contact;