import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  onCloseModal,
  handleEditProfile,
  buttonText,
}) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const currentUser = useContext(CurrentUserContext);

  const handleNameChage = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile({ name, avatar });
  };

  useEffect(() => {
    if (isOpen === true) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Change profile data"
      onCloseModal={onCloseModal}
      isOpen={isOpen}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <label className="modal__form-label">
        Name
        <input
          className="modal__form-input"
          type="text"
          name="name"
          minLength="1"
          maxLength="100"
          placeholder="Name"
          value={name}
          onChange={handleNameChage}
          required
        />
      </label>

      <label className="modal__form-label">
        Avatar
        <input
          className="modal__form-input"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
