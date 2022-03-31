import { Form, TextField, Submit, FieldError } from '@redwoodjs/forms'
import './SearchBarStyles.scss'

const SearchBar = ({ onSubmit, name, placeholder, validation }) => {
  return (
    <Form className='search-bar' onSubmit={onSubmit}>
    <div class="search-bar-wrapper">
      <TextField
        name={name}
        className='input '
        placeholder={placeholder}
        errorClassName="input error"
        validation={{ required: true }}
      />
      </div>
      <FieldError name="name" className="error-message" />
    </Form>
  )
}

export default SearchBar
