import Realm from 'realm';
import {NoteSchema} from './NoteSchema';
const realm = new Realm({
  schema: [NoteSchema],
});
export default realm;
