import { Dna } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { useState } from 'react';
import { formatNumber } from 'utils/formatNumber';
import { formatName } from 'utils/formatName';
import { ContactEditForm } from 'components/ContactEditForm/ContactEditForm';
import { Confirm } from 'components/Confirm/Confirm';
import PropTypes from 'prop-types';
import {
  ListItemStyled,
  ButtonDeleteListItem,
  ContactDesc,
  ButtonEditListItem,
} from './ContactListItem.styled';
import { toast } from 'react-toastify';

export const ContactListItem = ({ id, name, number }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <>
      <ListItemStyled>
        {isEdit ? (
          <ContactEditForm
            id={id}
            initialValues={{ name, number }}
            onSubmit={() => setIsEdit(false)}
          />
        ) : (
          <>
            {!isEdit && (
              <ButtonEditListItem
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                Edit
              </ButtonEditListItem>
            )}
            <ButtonDeleteListItem
              disabled={isLoading}
              onClick={() => {
                setOpenConfirm(true);
              }}
            >
              <span>
                {isLoading ? <Dna height="40" width="30" /> : 'Delete'}
              </span>
            </ButtonDeleteListItem>
            <ContactDesc>{formatNumber(number)}</ContactDesc>
            <ContactDesc>{formatName(name)} :</ContactDesc>
          </>
        )}
      </ListItemStyled>

      <Confirm
        title="Are you sure?"
        text="Are you sure you want to delete this contact?"
        btnAgree="Yes"
        btnDisagree="No"
        handleBtnAgree={() => {
          dispatch(deleteContact(id));
          if (!isLoading && !error) {
            toast.success(`${formatName(name)} deleted from contacts `);
          }
        }}
        open={openConfirm}
        setOpen={setOpenConfirm}
      />
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
