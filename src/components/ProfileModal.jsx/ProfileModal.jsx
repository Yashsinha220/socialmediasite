import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        overlayOpacity={0.5}
        overlayBlur={3}
        size={"55%"}
      >
        {/* Modal content */}
        <form action="" className="infoForm">
          <h3>Your Info</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="FirstName"
              placeholder="First Name"
            />
            <input
              type="text"
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            />
          </div>
          <div>
          <input
              type="text"
              className="infoInput"
              name="worksAt"
              placeholder="Works at"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="LiverIN"
              placeholder="Lives In"
            />
            <input
              type="text"
              className="infoInput"
              name="Country"
              placeholder="Country"
            />
          </div>

          <div>
            <input type="text" className="infoInput" 
            placeholder="RelationShip Status"/>
          </div>

          <div>
            Profile Image
            <input type="file"
            name="profileImg"/>
            Cover Image 
            <input type="file" name="coverImg" id="" />

          </div>
          <button className="button infoButton">Update</button>

          
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;
