import { Form, TextField, Submit } from '@redwoodjs/forms'
import './SearchBarStyles.scss'

const SearchBar = ({ onSubmit, name, placeholder, validation }) => {
  return (
    <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
      <TextField
        name={name}
        placeholder={placeholder}
        validation={{ required: validation }}
      />
      <Submit>Search That User!</Submit>
    </Form>
  )
}

export default SearchBar
