import React, { useState } from "react";
import styles from "../Item/Item.module.css";
import ItemBody from "../ItemBody/ItemBody";
import OnEditItemBody from "../OnEditItemBody/OnEditItemBody";
import { connect } from "react-redux";
import { editItem } from "../../store/actions/actions";

const Item = ({ editItem, ...props }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onEditToggleHandler = () => {
    setIsEditing(!isEditing);
  };

  const submitEditData = (values) => {
    editItem(values);
    onEditToggleHandler();
  };
  return (
    <div className={styles.item}>
      {isEditing ? (
        <OnEditItemBody onSubmit={submitEditData} {...props} />
      ) : (
        <ItemBody onEditToggleHandler={onEditToggleHandler} {...props} />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editItem: (payload) => dispatch(editItem(payload)),
});

export default connect(null, mapDispatchToProps)(Item);
