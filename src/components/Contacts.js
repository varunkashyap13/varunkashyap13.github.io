import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();
    const serviceID="service_ID";
    const templateID="template_ID";
    const userID="user_Eg1AV8WZ2n4bwrbMx7BC6";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
              name: data.name,
              phone: data.phone,
              email: data.email,
              subject: data.subject,
              description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form below.</p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("name", {
                            required: "Please enter your name",
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            },
                        })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        {/* PHONE INPUT */}
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        aria-invalid={errors.phone ? "true" : "false"}
                        {...register("phone", {
                            required: "Please enter your phone number",
                        })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        {/* EMAIL INPUT */}
                        <div className="text-center">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email", {
                            required: "Please enter your email address",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address entered"
                            }
                        })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        aria-invalid={errors.subject ? "true" : "false"}
                        {...register("subject", {
                            required: "Please enter a subject",
                        })}
                        />
                        <div className="line"></div>
                    </div>
                    <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">
                        <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Enter message here..."
                        name="description"
                        aria-invalid={errors.description ? "true" : "false"}
                        {...register("description", {
                            required: "Please enter a message",
                        })}
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
