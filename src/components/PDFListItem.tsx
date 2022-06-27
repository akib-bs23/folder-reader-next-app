import Image from 'next/image';
import { useState } from "react";
import IPDFList from "../models/PDFList.model";
import Modal from "./Modal";

const PDFListItem: React.FC<IPDFList> = ({ name, path, }: IPDFList) => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <div onClick={() => setShowModal(!showModal)} className='box' title="Click for details">
        <div className="pdf-icon">
          <Image src={'/pdf.png'} width={70} height={70} alt="pdf icon" quality={100} priority={true} layout="fixed" />
        </div>
        <div className="">
          <h6 className='text-xl mb-1'> {name} </h6>
        </div>
      </div>
      {showModal ? <Modal modalShow={showModal} modalClose={() => setShowModal(false)} url={path} /> : null}
    </>
  )
}

export default PDFListItem