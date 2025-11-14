
const Contact: React.FC = () => {
    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;