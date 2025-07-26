'use client';

import Button from '@mui/material/Button';

export default function Actions() {
  const handleEdit = () => {
    console.log('this is edit');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleEdit}>
      Edit
    </Button>
  );
}