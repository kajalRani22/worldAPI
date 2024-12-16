export const Contact = () => {
    const handleFormSubmit = (formData) => {      {/* React 19 */}
       // console.log(formData.entries());  {/* React 19   ( formData.entries() returns an iterator of key-value pairs from the form data)*/}

        const formInputData = Object.fromEntries(formData.entries());   {/* iterator of key-value pairs convert to plain javaScript Object  nd es Object ko backend ko forward krdege.... */}
        console.log(formInputData)
    };
    return (
<section className="section-contact">
<h2 className="container-title">Contact Us</h2>
<div className="contact-wrapper container">
<form action={handleFormSubmit}>  {/* React 19 */}
<input type="text" 
required autoComplete="false"
placeholder="Enter your name" 
name="username"
/>


<input type="email" 
className="form-control"
 placeholder ="Enter your email" 
 name="email"
required autoComplete="false"
/>
<textarea
className="form-control"
rows="10"
placeholder="Enter Yoyr Message"
name="message"
required autoComplete="false"


>

</textarea>
<button type="submit" value="send">Send</button>
</form>
</div>
</section>



    )
}