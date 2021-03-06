import IPDFList from "../models/PDFList.model";
import PDFListItem from "./PDFListItem";

interface PDFLists {
  lists: IPDFList[]
}

const PDFList: React.FC<PDFLists> = ({ lists }: PDFLists) => {
  return (
    <div className="grid">
      {lists?.map((list, i) => {
        return <PDFListItem key={list.path} name={list.name} path={list.path} />
      })}

    </div>
  )
}

export default PDFList