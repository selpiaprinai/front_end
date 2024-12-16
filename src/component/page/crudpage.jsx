import React, { useState } from 'react';
import UserForm from '../molekul/DataUser';
import UserTable from '../molekul/usertable';

const CRUDPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleSave = (user) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      user.id = Date.now();
      setUsers([...users, user]);
    }
    setEditingUser(null);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>CRUD React</h1>
      <UserForm onSave={handleSave} editingUser={editingUser} />
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default CRUDPage;
