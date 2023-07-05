import { Button, Form, InputGroup } from 'react-bootstrap';
import './formadd.scss'
import { useFormik } from 'formik';

const onSubmit = (values) => {
    console.log(values);
};
const validate = (values) => {
    let errors = {}
    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
        errors.email = 'Invalid email format';
    }

    if (!values.phonenum) {
        errors.phonenum = 'Required';
    } else if (!/^\+998(33|7(0|1|7)|88|9\d{1})(\d{7})$/i.test(values.phonenum)) {
        errors.phonenum = 'Invalid phone format';
    }

    return errors
}
const FormDataAdd = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phonenum: '',
            email: ''
        },
        onSubmit,
        validate,
    })

    return (
        <div className='container w-50'>
            <form className='mt-5' onSubmit={formik.handleSubmit}>
                <div className="name">
                    <Form.Label htmlFor='name'>Name:</Form.Label>
                    <InputGroup>
                        <Form.Control
                            aria-label="Text input with checkbox"
                            type="text"
                            id='name'
                            name='name'
                            placeholder='Enter Your Name'
                            value={formik.values.name}
                            onChange={formik.handleChange} />
                    </InputGroup>
                    {formik.errors.name ? (
                        <div className="error text-danger">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="phoneNumber mt-3 mb-3">
                    <Form.Label htmlFor='phone'>Phone number:</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="number"
                            id='phone'
                            name='phonenum'
                            placeholder='Enter Your Phone Number'
                            value={formik.values.phonenum}
                            onChange={formik.handleChange}
                        />
                    </InputGroup>
                    {formik.errors.phonenum ? (
                        <div className="error text-danger">{formik.errors.phonenum}</div>
                    ) : null}
                </div>
                <div className="email">
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="email"
                            id='email'
                            placeholder='Enter Your Email'
                            value={formik.values.email}
                            onChange={formik.handleChange} />
                    </InputGroup>
                    {formik.errors.email ? (
                        <div className="error text-danger">{formik.errors.email}</div>
                    ) : null}
                </div>
                <Button type='submit'>Save Edit</Button>
            </form>
        </div>
    )
}

export default FormDataAdd