import React from 'react'
import img from "../assets/success.png"
import img1 from "../assets/pending.png"
import img2 from "../assets/failed.png"

const wallet = () => {
  return (
    <div>
      <div className='max-w-[1127px] w-full border border-gray-300 rounded-lg px-3 py-4 '>
        <p className='text-[20px] font-semibold py-2 ' >Transactions/Wallet</p>

        <div className='max-w-[1070px] shadow-md shadow-gray-300 mx-auto w-full border border-gray-300 rounded-lg  py-2  my-4 '>
          <p className='text-[19px] font-medium px-4 py-1'>Wallet Top-Ups</p>
         
         <div className='overflow-x-auto'>
           <table className='w-full my-3 whitespace-nowrap' >
              <thead className=' border-t border-b bg-gray-50 '>
                
                <tr className=' text-[#231F20] text-left '>
                  <th className='py-2 pl-3 pr-3 w-[146px] font-normal'>Date/Time</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>User</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Amount</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Payment Method</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Status</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Reference ID</th>
                </tr>
                
              </thead>

              <tbody className='whitespace-nowrap'>
                <tr className='border-b '>
                  <td className='py-3 whitespace-nowrap pl-4 pr-10 '><span className='font-[15.4px]'>4/13/2025</span> <span className='text-[15.5px] text-[#858E9B] '>09:55AM</span> </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>Joseph Akande </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>N5.000.00</td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>Bank Transfer</td>
                   <td className='flex items-center gap-2 py-3 whitespace-nowrap pl-1 pr-10 ' ><span><img src={img} alt="" className=' w-[18px] h-[18px] min-w-[18px] min-h-[18px] rounded-full flex-shrink-0 '/></span> <span className='text-[#659B77]'>Successful</span> </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>FT12345578</td>
                </tr>

                <tr className='border-b '>
                  <td className='py-3 whitespace-nowrap pl-4 pr-10 '><span className='font-[15.4px]'>4/13/2025</span> <span className='text-[15.5px] text-[#858E9B] '>08:45AM</span> </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>Victoria Okoro</td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>N5.000.00</td>
                  <td className='py-3 whitespace-nowrap pl-4 pr-10 '>Bank Transfer</td>
                   <td className='flex items-center gap-2 py-3 whitespace-nowrap pl-1 pr-10 ' ><span><img src={img} alt="" className=' w-[18px] h-[18px] min-w-[18px] min-h-[18px] rounded-full flex-shrink-0 '/></span> <span className='text-[#659B77]'>Successful</span> </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>FT12345578</td>
                </tr>

                <tr className='border-b '>
                  <td className='py-3 whitespace-nowrap pl-4 pr-10 '><span className='font-[15.4px]'>4/13/2025</span> <span className='text-[15.5px] text-[#858E9B] '>07:30AM</span> </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>David Eze </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>N5.000.00</td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>Bank Transfer</td>
                   <td className='flex items-center gap-2 py-3 whitespace-nowrap pl-1 pr-10 ' ><span><img src={img1} alt="" className=' w-[18px] h-[18px] min-w-[18px] min-h-[18px] rounded-full flex-shrink-0 '/></span> <span className='text-[#FDBB5A]' >Pending</span> </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>FT12345578</td>
                </tr>

                <tr className='border-b '>
                  <td className='py-3 whitespace-nowrap pl-4 pr-10 '><span className='font-[15.4px]'>4/13/2025</span> <span className='text-[15.5px] text-[#858E9B] '>05:20AM</span> </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>Fatima Bello </td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>N5.000.00</td>
                   <td className='py-3 whitespace-nowrap pl-4 pr-10 '>Bank Transfer</td>
                   <td className='flex items-center gap-2 py-3 whitespace-nowrap pl-1 pr-10 ' ><span><img src={img2} alt="" className=' w-[18px] h-[18px] min-w-[18px] min-h-[18px] rounded-full flex-shrink-0 '/></span> <span className='text-[#FE7957]' >Failed</span> </td>
                  <td className='py-3 whitespace-nowrap pl-4 pr-10 '>FT12345578</td>
                </tr>
              </tbody>
          </table>
         </div>
          

        </div>
        <div className='grid fa:grid-cols-2 grid-cols-1 gap-5 py-5 '>
          <div className='bg-[#FCFDFD] border border-gray-300 rounded-lg px-5 '>
            <p className='pt-5 text-[20px] font-medium pb-2 '>Wallet Transfers</p>
            
            <div className="w-full overflow-x-auto whitespace-nowrap sm:px-5 py-1">
              <table className="w-full whitespace-nowrap table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="font-normal pr-5 py-2 text-left whitespace-nowrap">Date/Time</th>
                    <th className="font-normal pr-5 py-2 text-left whitespace-nowrap ">Sender</th>
                    <th className="font-normal pr-5  py-2 text-left whitespace-nowrap ">Receiver</th>
                    <th className="font-normal  py-2 text-left whitespace-nowrap ">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="text-sm text-gray-700">
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] "><span className='text-[#231F20] text-[15.4px] '>4/13/2025</span> <span className='text-[#818997] text-[15.3px] '>10:00</span></td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] ">Divine Umeh</td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] ">Mary Ibe</td>
                    <td className=" py-2  text-[#231F20] whitespace-nowrap text-[15.1px] ">N600.00</td>
                  </tr>

                  <tr className="text-sm text-gray-700">
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] "><span className='text-[#231F20] text-[15.4px] '>4/13/2025</span> <span className='text-[#818997] text-[15.3px] '>10:00</span></td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] ">Divine Umeh</td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] ">Mary Ibe</td>
                    <td className=" py-2  text-[#231F20] whitespace-nowrap text-[15.1px] ">N600.00</td>
                  </tr>

                  <tr className="text-sm text-gray-700">
                    <td className=" py-2 pr-5 whitespace-nowrap "><span className='text-[#231F20] text-[15.4px] '>4/13/2025</span> <span className='text-[#818997] text-[15.3px] '>10:00</span></td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] ">Divine Umeh</td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] ">Mary Ibe</td>
                    <td className=" py-2  text-[#231F20] whitespace-nowrap text-[15.1px] ">N600.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
         </div>


         <div className='bg-[#FCFDFD] border border-gray-300 rounded-lg px-5 '>
            <p className='pt-5 text-[20px] font-medium pb-2 '>Admin Action Logs</p>
            
            <div className="w-full overflow-x-auto whitespace-nowrap sm:px-5 py-1">
              <table className="w-full whitespace-nowrap table-auto  border-collapse">
                <thead>
                  <tr>
                    <th className="font-normal pr-5 py-2 text-left whitespace-nowrap">Date/Time</th>
                    <th className="font-normal pr-5 py-2 text-left whitespace-nowrap ">Admin</th>
                    <th className="font-normal pr-5  py-2 text-left whitespace-nowrap ">Action Type</th>
                    <th className="font-normal  py-2 text-left whitespace-nowrap ">Affected User/Driver</th>
                  </tr>
                </thead>

                <tbody className='' >
                  <tr className="text-sm text-gray-700 border-b border-gray-300 ">
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap  "><span className='text-[#231F20] text-[15.4px] '>4/13/2025</span> <br /> <span className='text-[#818997] text-[15.3px] '>10:00</span></td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] ">Wallet <br /> Credit</td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px]  "> Wallet <br /> Recieved</td>
                    <td className=" py-2  text-[#231F20] whitespace-nowrap text-[15.1px] ">Olivia Adeoye</td>
                  </tr>
                    
                   <tr className="text-sm text-gray-700 ">
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap "><span className='text-[#231F20] text-[15.4px] '>4/13/2025</span> <br /> <span className='text-[#818997] text-[15.3px] '>10:00</span></td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] ">Wallet <br /> Credit</td>
                    <td className=" py-2 pr-5 text-[#231F20] whitespace-nowrap text-[15.1px] "> Wallet <br /> Recieved</td>
                    <td className=" py-2  text-[#231F20] whitespace-nowrap text-[15.1px] ">Olivia Adeoye</td>
                  </tr>
                </tbody>
              </table>
            </div>
         </div>


        </div>
       
      </div>
    </div>
  )
}

export default wallet
