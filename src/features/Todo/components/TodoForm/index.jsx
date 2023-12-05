import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../../../../components/form-controls/InputField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
}

function TodoForm(props) {
    const { onSubmit } = props
    const schema = yup
        .object({
            title: yup.string().required('Trường này không được để trống').min(5, 'Tối thiêu 5 ký tự'),
        })
        .required()

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        onSubmit(values)
        console.log('Form: ', form)
        form.reset()
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name='title' label='Todo 123' form={form} />
        </form>
    )
}

export default TodoForm
