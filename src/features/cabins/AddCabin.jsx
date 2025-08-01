import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opensWindowName="cabin-form">
        <Button>Add new cabins</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opensWindowName="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable/>
      </Modal.Window>
    </Modal>
  );
};

// const AddCabin = () => {
//   const [isOpenModel, setIsOpenModel] = useState();

//   return (
//     <>
//       <Button onClick={() => setIsOpenModel((show) => !show)}>
//         Add new Cabin
//       </Button>

//       {isOpenModel && (
//         <Modal onClose={() => setIsOpenModel((open) => !open)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModel((open) => !open)}
//           />
//         </Modal>
//       )}
//     </>
//   );
// };

export default AddCabin;
