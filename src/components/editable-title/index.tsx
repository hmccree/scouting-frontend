import { Component, h } from 'preact'

interface Props {
  onEdit: (newTitle: string) => any
  value: string
}

interface State {
  editing: boolean
  value: string | null
}

export default class EditableTitle extends Component<Props, State> {
  state = { editing: false, value: null }

  edit = () => {
    this.setState({ editing: true })
  }

  save = (e: Event) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.querySelector('input')
    if (input !== null) {
      this.props.onEdit(input.value)
      this.setState({ editing: false })
    }
  }

  render({ value }: Props, { value: editedValue, editing }: State) {
    return editing ? (
      <form onSubmit={this.save}>
        <input name="title" value={editedValue || value} />
        <button>Save</button>
      </form>
    ) : (
      <h1>
        {editedValue || value} <span onClick={this.edit}>edit</span>
      </h1>
    )
  }
}
