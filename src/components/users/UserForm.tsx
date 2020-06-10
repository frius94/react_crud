import React from 'react';
import { format } from 'path';
import {User} from '../../models/user';

type Props = {
    onSubmit: (user: User) => void;
}

export const UserForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form>
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname"/>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname"/>
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday"/>
            <label htmlFor="active">Active</label>
            <input type="checkbox" id="active"/>
            <button type="submit">Submit</button>
        </form>
    );
}