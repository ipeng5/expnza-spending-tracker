import { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

function ProfilePhotoSelector({ image, setImage }) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  }

  function handleRemoveImage(e) {
    setImage(null);
    setPreviewUrl(null);
  }

  function onChooseFile() {
    inputRef.current.click();
  }

  return (
    <div className="mb-6 flex justify-center">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
          <LuUser className="text-primary text-4xl" />
          <button
            type="button"
            className="bg-primary absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full text-white hover:cursor-pointer"
            onClick={onChooseFile}
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Profile photo"
            className="h-20 w-20 rounded-full object-cover"
          />
          <button
            type="button"
            className="absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:cursor-pointer"
            onClick={handleRemoveImage}
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfilePhotoSelector;
