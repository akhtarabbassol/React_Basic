import { useState } from "react";


function RegistrationForm() {
 
  const [formData, setFormData] = useState({

    name: "",

    email: "",

    password: "",

    confirmPassword: "",

    phone: "",

    terms: false,

  });

  // VALIDATION ERRORS//
 

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] =
    useState("");


  const handleChange = (event) => {

    const { name, value, type, checked } =
      event.target;


    setFormData((previousData) => ({

      ...previousData,

      [name]:
        type === "checkbox"
          ? checked
          : value,

    }));


    // Input change hone par us field ka
    // purana error remove kar dein

    setErrors((previousErrors) => ({

      ...previousErrors,

      [name]: "",

    }));


    // Agar user dobara form edit kare
    // to success message remove kar dein

    setSuccessMessage("");

  };
 
  const validateForm = () => {

    const newErrors = {};

    if (!formData.name.trim()) {

      newErrors.name =
        "Name is required";

    } else if (formData.name.trim().length < 3) {

      newErrors.name =
        "Name must be at least 3 characters";

    }

    if (!formData.email.trim()) {

      newErrors.email =
        "Email is required";

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {

      newErrors.email =
        "Please enter a valid email";

    }

    if (!formData.password) {

      newErrors.password =
        "Password is required";

    } else if (formData.password.length < 6) {

      newErrors.password =
        "Password must be at least 6 characters";

    }

    if (!formData.confirmPassword) {

      newErrors.confirmPassword =
        "Please confirm your password";

    } else if (
      formData.password !==
      formData.confirmPassword
    ) {

      newErrors.confirmPassword =
        "Passwords do not match";

    }

    if (!formData.phone.trim()) {

      newErrors.phone =
        "Phone number is required";

    } else if (
      !/^[0-9]{10,15}$/.test(
        formData.phone
      )
    ) {

      newErrors.phone =
        "Enter a valid phone number";

    }

    if (!formData.terms) {

      newErrors.terms =
        "You must accept Terms & Conditions";

    }

    setErrors(newErrors);


    // Agar errors empty hain
    // to form valid hai

    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = (event) => {

    event.preventDefault();


    // Pehle validation

    const isValid = validateForm();


    if (!isValid) {

      return;

    }
    setSuccessMessage(
      "Registration successful!"
    );

    setFormData({

      name: "",

      email: "",

      password: "",

      confirmPassword: "",

      phone: "",

      terms: false,

    });

    setErrors({});

  };

  const isFormValid = (

    formData.name.trim().length >= 3 &&

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.email
    ) &&

    formData.password.length >= 6 &&

    formData.confirmPassword ===
      formData.password &&

    /^[0-9]{10,15}$/.test(
      formData.phone
    ) &&

    formData.terms

  );


  return (

    <div className="registration-card">

      <h1>
        Create Account
      </h1>

      <p className="form-description">
        Register your account by filling
        in the form below.
      </p>

      {successMessage && (

        <div className="success-message">

          {successMessage}

        </div>

      )}


      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>
            Name
          </label>

          <input type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && (

            <p className="error">
              {errors.name}
            </p>

          )}

        </div>

        <div className="form-group">

          <label>
            Email
          </label>

          <input  type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && (

            <p className="error">
              {errors.email}
            </p>

          )}

        </div>
       
        <div className="form-group">

          <label>
            Password
          </label>

          <input type="password" name="password" value={formData.password} onChange={handleChange}
            placeholder="Enter password"
          />

          {errors.password && (

            <p className="error">
              {errors.password}
            </p>

          )}

        </div>

        <div className="form-group">

          <label>
            Confirm Password
          </label>

          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
            placeholder="Confirm password"
          />

          {errors.confirmPassword && (

            <p className="error">
              {errors.confirmPassword}
            </p>

          )}

        </div>
        <div className="form-group">

          <label>
            Phone
          </label>

          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number"/>

          {errors.phone && (

            <p className="error">
              {errors.phone}
            </p>

          )}

        </div>

        <div className="terms-group">

          <label>

            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange}/>

            <span>
              I agree to Terms & Conditions
            </span>

          </label>


          {errors.terms && (

            <p className="error">
              {errors.terms}
            </p>

          )}

        </div>
    
        <button  type="submit" className="submit-btn" disabled={!isFormValid}>
          Register
        </button>


      </form>

    </div>

  );

}


export default RegistrationForm;