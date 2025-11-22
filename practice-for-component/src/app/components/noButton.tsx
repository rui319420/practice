export const Button = (label: string, onClick: () => void) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  )
}