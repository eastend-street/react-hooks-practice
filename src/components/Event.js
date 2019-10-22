import React, { useContext } from "react";
import { ADD_OPERATION_LOG, DELETE_EVENT } from "../actions";
import { timeCurrentIso8601 } from "../utils";
import AppContext from "../contexts/AppContext";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `Are you sure to delete this event(id=${id})?`
    );
    if (result)
      dispatch({
        type: DELETE_EVENT,
        id: id
      });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: `deleted event(id=${id})`,
      operatedAt: timeCurrentIso8601()
    });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
