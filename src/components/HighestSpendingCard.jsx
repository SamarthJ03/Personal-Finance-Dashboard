import ComposedChart from "./ComposedChart";


export default function HighestSpendingCard({title, amount}){
    return (
       <div className="rounded-xl p-5 md:p-6 w-full h-full shadow-sm flex flex-col gap-4 bg-white">

  <div className="flex  items-center gap-x-2">
  <div className="text-base font-bold text-gray-800">
    Highest Spending Category :
  </div>
   <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm w-fit flex text-center items-center">
      {title}
    </span>
  </div>

  
  <div className="">
    <span className="text-3xl font-bold text-green-600">
      ₹{amount}
    </span>

  </div>

 
  <div className="w-full h-[220px] md:h-[260px] mt-2">
  <ComposedChart />
</div>

</div>
    )
}