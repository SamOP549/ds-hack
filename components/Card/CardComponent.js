export default function CardComponent(props) {
    return (<div className="flex flex-col bg-gray-400 mb-[40px] ml-[40px] mr-[40px] rounded-lg shadow-md w-full  overflow-hidden md:w-60 hover:animate-bounce">
        <div className="flex bg-white rounded-lg shadow-md m-6 px-[50px] py-[100px]" />
        <h2 className="text-center px-2 pb-5">{props.author}</h2>
        <p className="text-center ml-2 mr-2 pb-3">
           {props.text}
        </p>
    </div>)
}