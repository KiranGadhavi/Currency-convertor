import { useState} from 'react'
import Input from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount,setAmount] =useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [ConvertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)

 const options =  Object.keys(currencyInfo)
 const swap =()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(ConvertedAmount)
 }
 const convert =() =>{
  setConvertedAmount(amount * currencyInfo[to])
 }
 
  return (
    <div>
    <div 
    className='w-full h-screen flex flex-wrap justify-center  items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url('https://media.istockphoto.com/id/1421589651/photo/futuristic-high-tech-background-abstract-multiple-neon-columns.jpg?s=612x612&w=0&k=20&c=1HQfhM5d__vCrIBaEOdRy4b15TH5Ve9VkW-uqKMrBHU=')`}}
    >
<div className='w-full'>
  <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
    <form onSubmit={(e)=>{e.preventDefault();
      convert()
    }}>
      <div className='w-full mb-1'>
        <Input label='From'
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency)=> setAmount(amount)}
        selectCurrency={from}
        onAmountChange={(amount)=> setAmount(amount)}
        
        />
        
      </div>
      <div className='relative w-full h-0.5'>
        <button
        type='button'
        className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
        onClick={swap}>
         swap
        </button>
      </div>
      <div className='w-full mb-1'>
        <Input label='To'
        amount={ConvertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency)=> setTo(currency)}
        selectCurrency={to}
        amountDisable
        />
      </div>
      <button type='submit' 
      className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
        Convert{from.toUpperCase()} to {to.toLocaleUpperCase()}
      </button>
    </form>
</div>
</div>
</div>
</div>
    
  )
}

export default App
