import s from './symbol.module.css'

function Symbol({ symbol }) {
  return (
    <div className={`${s.symbol} ${s[symbol.status]}`}>{symbol.symbol}</div>
  )
}

export default Symbol
