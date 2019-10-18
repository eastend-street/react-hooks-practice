import React, { useState } from "react";

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
      title,
      body
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm("Are you sure to delete all events?");
    if (result) dispatch({ type: "DELETE_ALL_EVENTS" });
  };

  const unCreatable = title === "" || body === "";

  return (
    <>
      <h1>イベント作成フォーム</h1>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          すべてのイベントを削除
        </button>
      </form>
    </>
  );
};

export default EventForm;
