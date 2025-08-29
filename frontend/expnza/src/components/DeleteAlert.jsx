function DeleteAlert({ content, onDelete }) {
  return (
    <div>
      <p className="text-sm">{content}</p>
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteAlert;
