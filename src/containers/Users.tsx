import React, { useState } from 'react';
import { User } from '../models/user';
import { UserIndex } from '../components/UserIndex';
import { UserForm } from '../components/users/UserForm';

export const UsersContainer: React.FC = () => {

    const [users, setUsers] = useState<User[]>([
        { id: 1, firstname: 'firstname', lastname: 'lastname', birthday: new Date('1/1/1990').toISOString(), active: true },
        { id: 2, firstname: 'testfirstname', lastname: 'testlastname', birthday: new Date('1/1/2000').toISOString(), active: true },
        { id: 3, firstname: 'umut', lastname: 'savas', birthday: new Date('1/1/2010').toISOString(), active: true }
    ])

    const onDelete = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    }

    const table = users.map(function (user) {
        return <tr><td>{user.firstname}</td><td>{user.lastname}</td><td>{user.birthday}</td></tr>
    });

    return (
        <div>
            <UserForm/>
            <UserIndex users={users} onDelete={onDelete} />
        </div>
    );
};