function ContactForm() {
    return (
      <section className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
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
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
  
  export default ContactForm;
  