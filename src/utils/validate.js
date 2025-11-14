import * as yup from "yup"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,12}$/;

export const registerFormValidationSchema = yup.object({
    username: yup
    .string()
    .required("Username is required.")
    .min(3,"Username must be atleast 3 character.")
    .max(25,"Username cannot exceed 25 charcter."),

    email: yup
    .string()
    .email('Invalid email.')
    .required("Email is required."),

    password: yup
    .string()
    .required("Password is required.")
    .matches(passwordRegex,"Weak password."),

    conform_password: yup
    .string()
    .oneOf([yup.ref('password')],"Password does not match.")
    .required("Conform password is required.")
})
