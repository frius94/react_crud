import React from 'react';
import { User } from '../models/user';
import { userInfo } from 'os';

type Props = {
    users: User[];
    onDelete: (id: number) => void;
}

export const UserIndex: React.FC<Props> = (props) => {
    const handleDelete = (id: number) => {
        props.onDelete(id);
    }

    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Birthday</th>
            </tr>
            {props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.birthday}</td>
                    <td>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </table>
    );
}