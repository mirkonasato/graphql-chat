import { Database } from 'fakebase';

const db = new Database('./data');

export const Message = db.table('messages');
export const User = db.table('users');
