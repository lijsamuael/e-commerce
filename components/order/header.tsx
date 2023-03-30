export default function Header({name, required, order}: {name: string, required: boolean, order: number}){
    return(
        <div className="border-b border-gray-400 py-8 flex justify-between items-center">
        <h3 className="text-2xl">{order}. {name}</h3>
        {required ? <p>* Required</p> : null}
      </div>    );
}