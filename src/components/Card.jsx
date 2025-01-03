import React from 'react'


export default function Card(props) {
  return (
    <div className='w-[273px] shrink-0 grow mb-3'>
      <div className='group h-[182px] rounded-[15px] overflow-hidden relative'>
        <img className='group-hover:scale-110 duration-100 object-cover w-full h-full' src={'http://localhost:5000/images/'+props.image} alt=''/>
        <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter'
        >
            {props.offer}
        </div>
       
      </div>
      <div className='mt-3 text-xl font-bold'>
            {props.title}
        </div>
        <div> 
        <Start className='inline'/> {props.rating}
        <span className='ml-2'>{props.minTime} - {props.maxTime} minutes</span>
        </div>
        <div className='text-slate-700'>
            {props.name}
            <br/>
            {props.place}
        </div>
    </div>
  )
}

const Start = (props) => {
    return(
        <svg
        className={props.className}
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
>
  <circle cx="12.0002" cy={12} r="10.8" fill="#1BA672" />
  <path
    d="M12.0977 15.438C12.0373 15.4024 11.9623 15.4024 11.9019 15.438L8.77957 17.2761C8.32159 17.5457 7.76507 17.1308 7.89275 16.6149L8.73063 13.2294C8.74846 13.1573 8.72339 13.0814 8.66614 13.0341L5.94605 10.7883C5.5298 10.4447 5.74364 9.76902 6.28183 9.72744L9.88118 9.44931C9.95264 9.44379 10.0152 9.39914 10.0435 9.33333L11.4489 6.07662C11.6574 5.59359 12.3423 5.59359 12.5507 6.07662L13.9561 9.33333C13.9845 9.39914 14.047 9.44379 14.1184 9.44931L17.7178 9.72744C18.256 9.76902 18.4698 10.4447 18.0536 10.7883L15.3335 13.0341C15.2762 13.0814 15.2512 13.1573 15.269 13.2294L16.1069 16.6149C16.2345 17.1308 15.678 17.5457 15.22 17.2761L12.0977 15.438Z"
    fill="white"
  />
</svg>

    )
}